"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { db } from "@/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

export default function SignIn() {
  const router = useRouter();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const checkAdmin = async (email: string) => {
    try {
      const adminRef = doc(db, "Config", "AdminUsers");
      const adminSnap = await getDoc(adminRef);

      if (adminSnap.exists() && adminSnap.data().users.includes(email)) {
        setIsAdmin(true);
        router.push("/blog-editor");
      } else {
        alert("Access denied. Not an admin.");
        await handleSignOut();
      }
    } catch (error) {
      console.error("Error checking admin status:", error);
    }
  };

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const userEmail = result.user.email;
      if (userEmail) {
        await checkAdmin(userEmail);
      }
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
    setIsAdmin(false);
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Welcome To BlrGrooveCo</h1>
          </div>

          <div className="max-w-sm mx-auto">
            {user ? (
              <div className="text-center">
                <img src={user.photoURL} alt="Profile" className="w-16 h-16 rounded-full mx-auto mb-2" />
                <p className="text-lg font-semibold">{user.displayName}</p>
                <p className="text-sm text-gray-400">{user.email}</p>
                {isAdmin && <p className="text-green-500 text-sm mt-2">Admin Access Granted</p>}
                <button onClick={handleSignOut} className="btn bg-red-600 text-white mt-4 w-full">
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={handleSignIn}
                  className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center"
                >
                  <svg
                    className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                  </svg>
                  <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4"></span>
                  <span className="flex-auto pl-16 pr-8 -ml-16">Sign in with Google</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
