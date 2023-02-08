import { memo, useContext } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Card } from "../components/Card";
import { DataContext } from "../data.context";
import type { Certification } from "../types";


export default function WorkExperience() {
  const { experience } = useContext(DataContext);
  return (
    <Card title="Working Experience">
      <ol className="border-l-2 border-blue-600">
        {experience.map((it, i) => <TimelineItem key={`Ex-${i}`} experience={it} />)}
      </ol>
    </Card>
  );
}

const p = ({children}: any) => <p className="text-gray-700 mt-1 mb-2">{children}</p>;


const TimelineItem = memo(({ experience }: { experience: Certification }) =>
  <li>
    <div className="flex flex-start items-center">
      <div className="bg-blue-600 w-4 h-8 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
      <p className="text-gray-800 font-semibold text-xl -mt-2">{experience.title}</p>
      <span className="text-cyan-800 pl-2 font-semibold text-xl -mt-2">
        @ {experience.company}
      </span>
    </div>
    <div className="ml-6 mb-6 pb-6">
      <span className="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm">
        {experience.startDate} - {experience.endDate}
      </span>

      {experience.description?.map((it, i) => <ReactMarkdown key={i} components={{p}}>{it}</ReactMarkdown>)}
      <div>
        <strong className="text-slate-800 text-sm">Tech stack: </strong>
        <span className=" text-slate-500 font-mono transition ease-in-out text-sm">
          {experience.stack?.join(' ')}
        </span>
      </div>
    </div>
  </li>
);
