"use client";

import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { updateDoc, doc, query, where, getDocs } from "firebase/firestore";
import { db, storage, collection, addDoc, ref, uploadBytesResumable, getDownloadURL } from "@/firebaseConfig";
import { v4 as uuidv4 } from "uuid";
import { 
  getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged 
} from "firebase/auth";
import { useRouter } from "next/navigation";

interface BlogData {
  id?: string;
  title: string;
  keywords: string;
  metaTags: string;
  description: string;
  content: string;
  image?: string;
  slug: string;
}

const BlogEditor: React.FC = () => {
  const router = useRouter()
  const [blog, setBlog] = useState<BlogData>({
    title: "",
    keywords: "",
    metaTags: "",
    description: "",
    content: "",
    slug: "",
  });
  const auth = getAuth();
  const [user, setUser] = useState<any>(null);
  const [image, setImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string>("");
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [isNew, setIsNew] = useState<boolean>(true); // State to toggle between new and edit mode
  const [showEditor, setShowEditor] = useState<boolean>(false); // Track visibility of editor
  const [popupVisible, setPopupVisible] = useState<boolean>(false); // Track popup visibility

  useEffect(() => {
    // Fetch all blogs from Firestore to populate the dropdown
    const fetchBlogs = async () => {
      const q = query(collection(db, "blogs"));
      const querySnapshot = await getDocs(q);
      const fetchedBlogs: BlogData[] = [];
      querySnapshot.forEach((doc) => {
        fetchedBlogs.push({ id: doc.id, ...doc.data() } as BlogData);
      });
      setBlogs(fetchedBlogs);
    };

    if(user) fetchBlogs();
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const uploadImage = async () => {
    if (!image) return alert("Please select an image!");

    const imageRef = ref(storage, `blog_images/${uuidv4()}-${image.name}`);
    const uploadTask = uploadBytesResumable(imageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log(`Progress: ${(snapshot.bytesTransferred / snapshot.totalBytes) * 100}%`);
      },
      (error) => console.error("Image upload error:", error),
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setImageURL(downloadURL);
        alert("Image uploaded successfully!");
      }
    );
  };

  const saveBlog = async () => {
    if (!blog.title || !blog.keywords || !blog.metaTags || !blog.description || !blog.content) {
      return alert("Please fill all fields!");
    }

    try {
      if (isNew) {
        // Save new blog
        await addDoc(collection(db, "blogs"), {
          ...blog,
          slug: blog?.title?.replace(/[^\w\s-]/g, "").replaceAll(" ", '-').toLowerCase(),
          image: imageURL,
          date: new Date().toUTCString(),
          createdAt: new Date(),
          author: 'BlrGrooveCo Team'
        });
        alert("Blog created successfully!");
      } else {
        // Update existing blog
        if (blog.id) {
          await updateDoc(doc(db, "blogs", blog.id), {
            ...blog,
            image: imageURL,
            updatedAt: new Date(),
          });
          alert("Blog updated successfully!");
        }
      }

      // Reset everything after save or update
      setBlog({ title: "", keywords: "", metaTags: "", description: "", content: "", slug: "" });
      setImage(null);
      setImageURL("");
      setIsNew(true); // Reset to "new" state after saving
      setShowEditor(false); // Hide editor after saving
      setPopupVisible(true); // Show popup
    } catch (error) {
      console.error("Error saving blog:", error);
    }
  };

  const loadBlogForEditing = (blogId: string) => {
    const selectedBlog = blogs.find((b) => b.id === blogId);
    if (selectedBlog) {
      setBlog(selectedBlog);
      setImageURL(selectedBlog.image || "");
      setIsNew(false); // Switch to edit mode
      setShowEditor(true); // Show editor for editing
    }
  };
  
  useEffect(() => {
    const checkAuth = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        router.push("/signin");
        return;
      }
      setUser(currentUser);
    });

    return () => checkAuth();
  }, [auth, router]);

  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto m-20">
      <h1>Blog Editor</h1>
      {user  && <button onClick={handleSignOut} className="btn bg-red-600 text-white mt-4 w-full">
        Sign Out
      </button>}
      {popupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>Saved successfully!</p>
            <button onClick={() => setPopupVisible(false)} className="close-popup">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Dropdown to select a blog */}
      {(!showEditor && user) && (
        <>
          <select
            onChange={(e) => loadBlogForEditing(e.target.value)}
            className="border p-2 w-full mb-2"
          >
            <option value="">Select a blog to edit</option>
            {blogs.map((blog) => (
              <option key={blog.id} value={blog.id}>
                {blog.title}
              </option>
            ))}
          </select>

          {/* Button to create a new blog */}
          {user && <button
            onClick={() => {
              setIsNew(true);
              setBlog({
                title: "",
                keywords: "",
                metaTags: "",
                description: "",
                content: "",
                slug: "",
              });
              setImage(null);
              setImageURL("");
              setShowEditor(true); // Show editor to create new blog
            }}
            className="bg-blue-500 text-white p-2 mt-2"
          >
            Create New Blog
          </button>}
        </>
      )}

      {/* Editor Section */}
      {showEditor && (
        <>
          <h2 className="text-2xl font-bold mb-4">{isNew ? "Create Blog" : "Edit Blog"}</h2>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={blog.title}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />

          <input
            type="text"
            name="keywords"
            placeholder="Keywords (comma-separated)"
            value={blog.keywords}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />

          <input
            type="text"
            name="metaTags"
            placeholder="Meta Tags"
            value={blog.metaTags}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />

          <textarea
            name="description"
            placeholder="Short Description"
            value={blog.description}
            onChange={handleChange}
            className="border p-2 w-full mb-2 h-20"
          />

          <Editor
            apiKey="5tunrzc9cab4ubsmqgcl08hf1d4ibux2y1masrv7oeq5qmun"
            value={blog.content}
            onEditorChange={(newValue) => setBlog({ ...blog, content: newValue })}
            init={{
              height: 400,
              menubar: true,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | bold italic underline strikethrough | link image | alignleft aligncenter alignright | bullist numlist outdent indent | code",
              image_caption: true,
              automatic_uploads: true,
              file_picker_types: "image",
              file_picker_callback: (callback, value, meta) => {
                if (meta.filetype === "image") {
                  const input = document.createElement("input");
                  input.setAttribute("type", "file");
                  input.setAttribute("accept", "image/*");
                  input.click();

                  input.onchange = async function () {
                    const file = input.files?.[0];
                    if (!file) return;

                    const imageRef = ref(storage, `blog_images/${uuidv4()}-${file.name}`);
                    const uploadTask = uploadBytesResumable(imageRef, file);

                    uploadTask.on(
                      "state_changed",
                      (snapshot) => {
                        console.log(`Progress: ${(snapshot.bytesTransferred / snapshot.totalBytes) * 100}%`);
                      },
                      (error) => console.error("Image upload error:", error),
                      async () => {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        callback(downloadURL, { alt: file.name });
                      }
                    );
                  };
                }
              },
            }}
          />

          {/* Image upload and save button */}
          {true && (
            <>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="border p-2 w-full mt-2"
              />
              {image && imageURL === "" && <button onClick={uploadImage} className="bg-blue-500 text-white p-2 mt-2">
                Upload Image
              </button>}
            </>
          )}

          {imageURL && (
            <div className="mt-2">
              <img src={imageURL} alt="Blog" className="w-48" />
              <button
                onClick={() => setImageURL("")}
                className="bg-red-500 text-white p-1 mt-2"
              >
                Replace Image
              </button>
            </div>
          )}

          <button onClick={saveBlog} className="bg-green-500 text-white p-2 mt-2">
            {isNew ? "Save Blog" : "Update Blog"}
          </button>
        </>
      )}
    </div>
  );
};

export default BlogEditor;
