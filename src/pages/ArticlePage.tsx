import { useContext, useEffect, useMemo, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ArticleContext } from "../data.context";
import { Markdown } from "../components/Markdown";
import { Footer } from "../sections/Footer";
import { Loading } from "../components/Loading";
import type { Article } from "../types";
import { Header } from "../components/Header";


function useArticle(id:string, path: string) {
  const { articles } = useContext(ArticleContext);
  const article = useMemo(() => articles.find(it => it.path === id), [id, articles]);
  const [text, setText] = useState<string>()

  useEffect(() => {
      fetch(path)
      .then(response => response.text())
      .then(setText);
  }, []);

  return { article, text };
}

interface ArticleLoaderData {
  articleId: string;
  path: string;
}

export default function ArticlePage() {
  const { articleId, path } = useLoaderData() as ArticleLoaderData;
  const { article, text } = useArticle(articleId, path)

  const content = useMemo(() =>
    text ? <Article text={text} article={article!} /> : <Loading/>,
    [text]
  );

  return (
    <>
      <Header title={article?.title}>
        <p className="text-sm md:text-lg text-gray-600">
          By <Link to="/" className="font-semibold hover:text-gray-800">{article?.publisher}</Link>, Published on {article?.publishDate}
        </p>
        <Link to="#" className="text-blue-700 text-xs md:text-sm font-bold uppercase pb-1">
            {article?.tags.join(', ')}
        </Link>
      </Header>

      {content}

      <Footer />
    </>
  );
}

interface ArticleParams {
  text: string;
  article: Article;
}

function Article({text, article}: ArticleParams) {
  return (
  <div className="container mx-auto flex flex-wrap">

    <article className="flex flex-col shadow w-full my-4">
      <div className="bg-white flex flex-col justify-start p-6 text-lg space-y-5">
        <Markdown children={text!} />
        <br />
        <p className="text-sm pb-3">
          By <Link to="/" className="font-semibold hover:text-gray-800">{article?.publisher}</Link>, Published on {article?.publishDate}
        </p>
      </div>
    </article>

  </div>
  );
}
