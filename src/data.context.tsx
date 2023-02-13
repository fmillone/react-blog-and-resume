import React from "react";
import data from "./data/data.json";
import articles from "./data/articles.json";
import type { ArticlesData, Data } from "./types";


export const DataContext = React.createContext<Data>(data);
export const DataProvider = DataContext.Provider;
export const ArticleContext = React.createContext<ArticlesData>(articles);
