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
  title:          string;
  name:           string;
  aboutMe:        string[];
  contact:        Contact;
  languages:      Language[];
  certifications: Certification[];
  sideProjects:   SideProject[];
  experience:     Experience[];
  education:      Education[];
  skills:         string[];
  tools:          Tool[];
}

export interface Certification {
  place:          string;
  year:           string;
  title:          string;
  duration:       string;
  link?:          string;
  instructor:     string;
  showCompressed: boolean;
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

export interface Education {
  title:          string;
  company:        string;
  place:          string;
  startDate:      string;
  showCompressed: boolean;
  endDate?:       string;
}

export interface Experience {
  title:          string;
  startDate:      string;
  endDate:        string;
  stack:          string[];
  description:    string[];
  company:        string;
  showCompressed: boolean;
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
