import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Head from "next/head";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const dynamicParams = true; // Allow new params dynamically
export const revalidate = 60; // Regenerate page every 60 seconds

export const metadata = {
  title: "BlrGrooveCo Blogs - Latest Articles on Music, Events, and More",
  description:
    "Explore BlrGrooveCo’s collection of blogs featuring the latest on music, events, artists, and industry insights. Stay updated with our fresh and engaging content.",
};

interface BlogData {
  id: string;
  title: string;
  keywords: string;
  metaTags: string;
  description: string;
  content: string;
  image?: string;
  slug: string;
  author?: string;
  date?: string;
}

// 🔥 Fetch all blog slugs at BUILD TIME
export async function generateStaticParams() {
  try {
    const blogCollection = collection(db, "blogs");
    const querySnapshot = await getDocs(blogCollection);

    return querySnapshot.docs.map((doc) => ({
      slug: doc.data().slug, // Ensure each document has a `slug`
    }));
  } catch (error) {
    console.error("Error fetching blog slugs:", error);
    return [];
  }
}

// 🔥 Fetch single blog post data at BUILD TIME
const getBlogBySlug = async (slug: string): Promise<BlogData | null> => {
  try {
    const blogCollection = collection(db, "blogs");
    const querySnapshot = await getDocs(blogCollection);
    const blogs = querySnapshot.docs.map((doc) => doc.data() as BlogData);
    return blogs.find((blog) => blog.slug === slug) || null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};

export default async function BlogDetail({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Head key={1}>
        <title>{blog.title} - BlrGrooveCo</title>
        <meta name="description" content={blog.description || "Explore the latest blog from BlrGrooveCo"} />
        <meta name="keywords" content={blog.keywords || "BlrGrooveCo, music, events, artists"} />
      </Head>

      <div className="max-w-3xl mx-auto py-12 px-6 min-h-screen text-white mt-16">
        {/* Blog Header */}
        <div className="border-b border-gray-700 pb-6">
          <h1 className="text-4xl font-bold text-white text-center">{blog.title}</h1>
          <p className="text-lg text-gray-400 mt-2">{blog.description}</p>

          {/* Author & Meta */}
          <div className="flex items-center gap-4 mt-4">
            <div>
              <p className="text-gray-300 font-medium">{blog.author || "Guest Author"}</p>
              <p className="text-gray-500 text-sm">{blog.date || "2025-01-01"}</p>
            </div>
          </div>
        </div>

        {/* Blog Image */}
        {blog.image && (
          <div className="my-8">
            <img src={blog.image} alt={blog.title} className="w-full rounded-lg shadow-md border border-gray-700" />
          </div>
        )}

        {/* Blog Content (Custom Font Applied) */}
        <div className="prose prose-lg text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: blog.content }}></div>

        {/* Blog Footer */}
        <div className="mt-10 text-gray-400 text-sm border-t border-gray-700 pt-4">
          <p>{blog.keywords}</p>
        </div>
      </div>
    </>
  );
}
