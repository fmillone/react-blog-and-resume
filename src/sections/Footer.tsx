import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../data.context";


export function Footer() {
  const { name, contact: {email} } = useContext(DataContext);
  return (
    <footer className="w-full border-t bg-white pb-12">
      <div className="w-full container mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
          <Link to="/" className=" px-3">About Me</Link>
          <Link to="#" target="_blank" className=" px-3">Source code  <i className="fab fa-github"></i></Link>
          <a href={`mailto:${email}`} className=" px-3">Contact</a>
        </div>
        <Link to="/" className="pb-6"> © {name}</Link>
      </div>
    </footer>
  );
}
