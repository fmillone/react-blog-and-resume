import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArticleContext, DataContext } from "../data.context";
import { Footer } from "../sections/Footer";
import { BlogSidebar } from "../sections/BlogSidebar";
import { Header } from "../components/Header";

export default function Blog() {
  const { name, title } = useContext(DataContext);

  return (
    <>
      <Header title={name} subtitle={title} />
      <div className="container mx-auto flex flex-wrap py-6">
        <div className="hidden md:contents">
          <BlogSidebar />
        </div>
        <PostsSection />
        <div className="md:hidden">
          <BlogSidebar />
        </div>
      </div>
      <Footer />
    </>
  );
}

function PostsSection() {
  const { articles, presentation } = useContext(ArticleContext);
  return (
    <section className="w-full md:w-2/3 flex flex-col items-center px-3">
      <Presentation {...presentation} />

      {articles.map((article, i) => <ArticlePreview key={i} article={article} />)}

    </section>
  );
}

function Presentation({ text, title }: any) {
  return (
    <article className="flex flex-col shadow my-4">
      <div className="bg-white flex flex-col justify-start p-6">
        <p className="text-3xl font-bold hover:text-gray-700 pb-4">{title}</p>
        <p className="pb-6">{text}</p>
      </div>
    </article>
  );
}

function ArticlePreview({ article }: any) {
  const { tags, publishDate, publisher, preview, title, path } = article;
  const articlePath = useMemo(() => `article/${path}`, [path]);
  return (
    <article className="flex flex-col shadow w-full my-4">
      <div className="bg-white flex flex-col justify-start p-6">
        <Link to="#" className="text-blue-700 text-sm font-bold uppercase pb-4">{tags.join(', ')}</Link>
        <Link to={articlePath || '#'} className="text-3xl font-bold hover:text-gray-700 pb-4">{title}</Link>
        <p className="text-sm pb-3">
          By <span className="font-semibold hover:text-gray-800">{publisher}</span>, Published on {publishDate}
        </p>
        <Link to={articlePath || '#'} className="pb-6">{preview}</Link>
        <Link to={articlePath || '#'} className="text-blue-800 hover:text-black">Continue Reading <i className="fas fa-arrow-right"></i></Link>
      </div>
    </article>
  );
}
