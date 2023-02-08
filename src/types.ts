// Articles
export interface ArticlesData {
  presentation: Presentation;
  articles:     Article[];
}

export interface Article {
  title:       string;
  publishDate: string;
  tags:        string[];
  publisher:   string;
  path:        string;
  preview:     string;
}

export interface Presentation {
  title: string;
  text:  string;
}

// Data
export interface Data {
  name:           string;
  title:          string;
  aboutMe:        string[];
  contact:        Contact;
  languages:      Language[];
  certifications: Certification[];
  sideProjects:   SideProject[];
  experience:     Certification[];
  education:      Certification[];
  skills:         string[];
  tools:          Tool[];
}

export interface Certification {
  company:        string;
  startDate:      string;
  title:          string;
  endDate:        string;
  place?:         string;
  showCompressed: boolean;
  showInPdf?:     boolean;
  stack?:         string[];
  description?:   string[];
}

export interface Contact {
  email:    string;
  github:   string;
  linkedin: string;
  websites: Website[];
  twitter:  string;
  devto:    string;
  mastodon: string;
}

export interface Website {
  url:             string;
  iconFromAssets?: string;
  cssIcon?:        string;
}

export interface Language {
  name:  string;
  flag:  string[];
  level: string;
}

export interface SideProject {
  title:          string;
  subtitle:       string;
  description:    string[];
  stack:          string[];
  link?:          string;
  showCompressed: boolean;
}

export interface Tool {
  name:        string;
  description: string[];
}
