import { useContext } from "react";
import { Card } from "../components/Card";
import { DataContext } from "../data.context";

export function Social() {
  const { contact } = useContext(DataContext);
  return (
    <>
      <Card title="Contact">
        <div className="flex text-center text-4xl md:text-2xl xl:text-4xl no-underline">
          <a className="w-full" target="_blank" href={`mailto:${contact.email}`}>
            <i className="fa fa-envelope"></i>
          </a>
          <a className="w-full" target="_blank" href={contact.twitter}>
            <i className="fab fa-twitter"></i>
          </a>
          <a className="w-full" target="_blank" href={contact.linkedin}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a className="w-full" target="_blank" href={contact.devto}>
            <i className="fab fa-dev"></i>
          </a>
          <a className="w-full" target="_blank" href={contact.github}>
            <i className="fab fa-github"></i>
          </a>
          <a className="w-full" target="_blank" href={contact.mastodon}>
            <i className="fab fa-mastodon"></i>
          </a>
        </div>
      </Card>
    </>
  );
}
