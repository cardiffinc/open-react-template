import BlogEditor from "@/components/BlogEditor/BlogEditor";

export const metadata = {
  title: 'BlrGrooveCo Blog Editor - Create, Edit, and Manage Your Blogs',
  description: 'Easily create and manage your blogs with BlrGrooveCo\'s intuitive Blog Editor. Edit, add images, and keep your blog content up-to-date with ease. Start now!',
}

const Home: React.FC = () => {
  return (
    <div>
      <BlogEditor />
    </div>
  );
};

export default Home;
