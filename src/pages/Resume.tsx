import { memo, useContext } from "react";
import { Footer } from "../sections/Footer";
import { Navbar } from "../components/Navbar";
import { DataContext } from "../data.context";
import profilePhoto from "../assets/profile_photo.jpg"
import { Card } from "../components/Card";
import { Social } from "../sections/Social";
import { Flag } from "../components/Flag";
import { Link, Outlet } from "react-router-dom";
import { Links } from "../sections/Links";
import { Header } from "../components/Header";
import { AboutMe } from "../sections/AboutMe";


const navigationData = [
  {
    name: 'Experience',
    path: ''
  },
  {
    name: 'Side Projects',
    path: 'side-projects'
  },
  {
    name: 'Certifications',
    path: 'certifications'
  },
  {
    name: 'Skills',
    path: 'skills'
  },
];
export default function ResumePage() {
  const { name, languages, skills } = useContext(DataContext);
  return (
    <>
      <Header title={name} />

      <div className="container mx-auto flex flex-wrap py-6">

        <Sidebar>
          <Card>
            <img className="rounded" src={profilePhoto}  alt="profile picture"/>
          </Card>

          <Link to="/" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">
            Check my Blog
          </Link>

          <div className="md:hidden container">
            <AboutMe/>
          </div>

          <Social />

          <Card title="Languages">
            <ul className=" flex">
              {languages.map((lang, i) => <li key={i} className="text-2xl md:text-xs xl:text-xl ml-0 text-grey-800 w-full inline-block text-center">
                <div>{lang.flag.map((code, i) => <Flag key={i} code={code} alt={lang.name} />)}</div>
                <div>{lang.name}: {lang.level}</div>
              </li>)}
            </ul>
          </Card>

          <div className="hidden md:flex">
            <Card title="Skills and Tools">
              <ul>
                {skills.map((lang, i) => <li key={i} className="chip">{lang}</li>)}
              </ul>
            </Card>
          </div>

          <div className="hidden md:contents"><Links/></div>

        </Sidebar>

        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          <div className="hidden md:flex md:container">
            <AboutMe/>
          </div>

          <div className="w-full">
            <Navbar navigationData={navigationData}/>
          </div>

          <Outlet />

          <div className="w-full md:hidden"><Links/></div>

        </section>

      </div>
      <Footer />
    </>
  )
}

const Sidebar = memo(({ children }: any) =>
  <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
    {children}
  </aside>
);
