import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import { router } from './routes';
import data from "./data/data.json";
import articles from "./data/articles.json";
import { ArticleContext, DataProvider } from './data.context';
import { reportWebVitals } from './reportWebVitals';
import { sendToVercelVitals } from './vercelVitals';
import './index.css'

const isProd = import.meta.env.PROD;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ArticleContext.Provider value={articles}>
      <DataProvider value={data} >
        <RouterProvider router={router} />
      </DataProvider>
    </ArticleContext.Provider>
    <Analytics mode={isProd ? 'production' : 'development'} />
  </React.StrictMode>,
)

reportWebVitals(isProd ? sendToVercelVitals : console.log);
