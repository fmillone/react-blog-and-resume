import ReactMarkdown from "react-markdown";
import {components} from "./Markdown.components";

interface MarkdownParams {
  children: string;
}

export function Markdown({ children }: MarkdownParams) {
  return (
    <ReactMarkdown
      children={children}
      components={components}
    />
  );
}

export default Markdown;
