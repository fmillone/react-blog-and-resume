import { useContext } from "react";
import { Card } from "../components/Card";
import { DataContext } from "../data.context";

export default function Certifications() {
  const { certifications } = useContext(DataContext);
  return (
    <Card title="Certifications">
      {certifications.map((certification, i) =>
        <div key={i}>
          <div className="flex flex-start items-center">
            <div className="bg-blue-600 w-4 h-8 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
            <p className="text-gray-800 font-semibold text-xl -mt-2">{certification.title}</p>
            <span className="text-cyan-800 pl-2 font-semibold text-xl -mt-2">
                {certification.link && <a href={certification.link} target="_blank"><i className="fa fa-link"></i></a>}
              </span>
          </div>
          <div className="ml-6 mb-6 pb-6">
            <span className="text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm">
              {certification.year} {certification.duration} @ {certification.place} {certification.instructor}
            </span>
          </div>
        </div>
      )}
    </Card>
  );
}
