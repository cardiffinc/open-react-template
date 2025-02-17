"use client";

import { useEffect, useState } from "react";
import { db, collection } from "@/firebaseConfig";
import { getDocs } from "firebase/firestore";
import Link from "next/link";
import HeroTemplate from "@/components/HeroTemplate";

// export const metadata = {
//   title: 'BlrGrooveCo Blogs - Latest Articles on Music, Events, and More',
//   description: 'Explore BlrGrooveCo’s collection of blogs featuring the latest on music, events, artists, and industry insights. Stay updated with our fresh and engaging content.',
// }

interface BlogData {
  id: string;
  title: string;
  keywords: string;
  metaTags: string;
  description: string;
  content: string;
  image?: string;
  slug: string;
  author: string;
  date: string;
  views: number;
  comments: number;
  authorImage?: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      setBlogs(
        querySnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() } as BlogData)
        )
      );
    };

    fetchBlogs();
  }, []);

  return (
    <>
    <div className="max-w-3xl mx-auto py-12 px-6 min-h-screen text-white mt-16">
        {/* Blog Header */}
        <div className="pb-6">
          <h1 className="text-4xl font-bold text-white text-center">Latest Blogs</h1>
          </div>
      <div className="max-w-4xl mx-auto py-10">
      <div className="grid gap-6 m-5">
        {blogs.map((blog) => (
          <Link
            key={blog?.slug}
            href={`/blogs/${blog.slug}`}
            className="flex items-start justify-between border-b pb-6"
          >
            {/* Left Section: Blog Details */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                {blog.authorImage && (
                  <img
                    src={blog.authorImage}
                    alt={blog.author}
                    className="w-6 h-6 rounded-full"
                  />
                )}
                <span className="text-sm text-gray-600">{blog.author}</span>
              </div>
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600 mt-1">{blog.description}</p>

              <div className="flex items-center text-gray-500 text-sm mt-2">
                <span>{blog.date}</span>
              </div>
            </div>

            {/* Right Section: Thumbnail */}
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-32 h-24 object-cover rounded-lg"
              />
            )}
          </Link>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default Blogs;
