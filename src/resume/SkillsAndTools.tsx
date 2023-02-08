import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { Card } from "../components/Card";
import { DataContext } from "../data.context";
import { Tool } from "../types";

const p = ({children}: any) => <p className="text-gray-700 mt-1 mb-2">{children}</p>
const ul = ({children}: any) => <ul className=" list-disc text-gray-700 mt-1 mb-2 ">{children}</ul>;


function Skill({ skill: { name, description } }: { skill: Tool }) {
  return (
    <>
      <div className="flex flex-start items-center">
        <div className="bg-blue-600 w-4 h-8 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
        <p className="text-gray-800 font-semibold text-xl -mt-2">{name}</p>
      </div>
      <div className="ml-6 mb-6 pb-6">
        <ul>
          {description.map((it, i) =>
            <ReactMarkdown key={i} components={{ ul, p }}>{it}</ReactMarkdown>)
          }
        </ul>
      </div>
    </>
  );
}

export default function SkillsAndTools() {
  const { tools } = useContext(DataContext);

  return (
    <>
      <Card title="Skills" >
        {tools.map((it, i) => <Skill key={i} skill={it} />)}
      </Card>
    </>
  );
}
