import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArticleContext, DataContext } from "../data.context";
import { Social } from "./Social";
import { Card } from "../components/Card";
import { Links } from "./Links";
import { Sidebar } from "../components/Sidebar";


export function BlogSidebar() {
  const { aboutMe } = useContext(DataContext);
  const tags = useArticleTags();
  return (
    <Sidebar>

      <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        <p className="text-xl font-semibold pb-5">About Me</p>

        {aboutMe.map((it, i) => <p key={i} className="pb-2">{it}</p>)}

        <Link to="/resume" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
          Check my Resume
        </Link>
      </div>

      <Card title="Tags">
        <ul>
          {tags.map((tag, i) =>
            <li key={i} className="text-blue-700 text-sm font-bold uppercase pb-4 cursor-pointer" >#{tag}</li>
          )}
        </ul>
      </Card>

      <Social />
      <Links />

    </Sidebar>
  );
}

function useArticleTags() {
  const { articles } = useContext(ArticleContext);
  const tags = useMemo(() => articles.flatMap(it => it.tags), [articles]);

  return tags;
}
