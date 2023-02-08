import React from "react";
import data from "./data/data.json";
import articles from "./data/articles.json";


export const DataContext = React.createContext(data);
export const DataProvider = DataContext.Provider;
export const ArticleContext = React.createContext(articles);
