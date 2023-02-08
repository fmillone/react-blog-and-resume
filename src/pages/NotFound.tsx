import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export default function NotFound() {

  return (
    <Header title="404">
      <p className="text-lg text-gray-600">
        Not Found
      </p>
      <p className="text-lg text-gray-600 pt-10">
        Can't find what you are looking for?
      </p>
      <p className="text-lg text-gray-600">
        Check on my  <Link className=" text-blue-800 " to="/"> Blog </Link> or in my <Link className=" text-blue-800 " to="/resume"> Resume </Link>
      </p>
    </Header>
  );
}
