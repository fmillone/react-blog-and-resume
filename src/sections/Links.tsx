import { useContext, useMemo } from "react";
import { useSvgAsset } from "../common";
import { Card } from "../components/Card";
import { DataContext } from "../data.context";
import type { Website } from "../types";

export function Links() {
  const { contact: { websites } } = useContext(DataContext);
  return (
    <Card title="Links">
      <div className="flex text-center text-4xl no-underline">
        {websites.map((web, i) =>
          <WebsiteLink web={web} key={i} />
        )}
      </div>
    </Card>
  )
}

function WebsiteLink({ web }: { web: Website }) {

  const icon = useMemo(() => {
    if (web.iconFromAssets) {
      return <SvgFromAssets className="inline-block h-10 align-text-top" path={web.iconFromAssets} />
    } else {
      return <i className={web.cssIcon || "fas fa-globe-americas"}></i>;
    }
  }, [web])
  return (
    <a className="w-full tooltip" target="_blank" href={web.url}>
      {icon}
      <span className="tooltip-text">{web.url}</span>
    </a>
  );
}

function SvgFromAssets({ path, className }: any) {
  const asset = useSvgAsset(path)
  return <img src={asset} className={className} />;
}