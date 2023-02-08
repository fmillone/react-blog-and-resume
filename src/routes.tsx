import React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import { Loading } from "./components/Loading";


function lazyLoaded(func: () => Promise<{ default: React.ComponentType<any> }>) {
  const Component = React.lazy(func);
  return () => (
    <React.Suspense fallback={<Loading />}>
      <Component />
    </React.Suspense>
  );
}

const Blog = lazyLoaded(() => import('./pages/Blog'));
const ArticlePage = lazyLoaded(() => import('./pages/ArticlePage'));

const Resume = lazyLoaded(() => import('./pages/Resume'));
const WorkExperience = lazyLoaded(() => import('./resume/WorkExperience'));
const SideProjects = lazyLoaded(() => import('./resume/SideProjects'));
const Certifications = lazyLoaded(() => import('./resume/Certifications'));
const SkillsAndTools = lazyLoaded(() => import('./resume/SkillsAndTools'));

const NotFound = lazyLoaded(() => import('./pages/NotFound'));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Blog />,
  },
  {
    path: '/article/:id',
    element: <ArticlePage />,
    async loader({ params }) {
      try {
        const { default: path } = await import(`./assets/articles/${params.id}.md`);
        return {
          articleId: params.id,
          path,
        };
      } catch (error) {
        console.error(error);
        throw redirect('/');
      }
    },
  },
  {
    path: '/resume',
    element: <Resume/>,
    children: [
      {
        element: <WorkExperience />,
        index: true
      },
      {
        path: '/resume/side-projects',
        element: <SideProjects />
      },
      {
        path: '/resume/certifications',
        element: <Certifications />
      },
      {
        path: '/resume/skills',
        element: <SkillsAndTools />
      }
    ]
  },
  {
    path: '/404',
    element: <NotFound />
  },
  {
    path: '*',
    loader: () => redirect('/404'),
  }
]);
