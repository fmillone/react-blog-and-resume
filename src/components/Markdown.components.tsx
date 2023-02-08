import type { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import dart from 'react-syntax-highlighter/dist/esm/languages/hljs/dart';
import style from "react-syntax-highlighter/dist/esm/styles/hljs/docco";
import styles from './Markdown.module.css';

SyntaxHighlighter.registerLanguage('dart', dart);


const components: Partial<SpecialComponents> = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        children={String(children)}
        // @ts-ignore
        style={style}
        language={match[1]}
        PreTag="div"
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
  h1: ({children}) => <h1 className={styles.h1}>{children}</h1>,
  h2: ({children}) => <h2 className={styles.h2}>{children}</h2>,
  h3: ({children}) => <h3 className={styles.h3}>{children}</h3>,
  ul: ({children}) => <ul className={styles.ul}>{children}</ul>,
  li: ({children}) => <li className={styles.li}>{children}</li>,
}

const {
  h1, h2, h3, ul, li, code,
} = components;

export {
  components,
  h1, h2, h3, ul, li, code,
}
