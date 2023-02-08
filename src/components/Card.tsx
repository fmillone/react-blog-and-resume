import { memo } from "react";

type ArrayORPlain<T> = T | T[];

interface Props {
  children?: ArrayORPlain< JSX.Element | string | never>;
  title?: string;
}
export const Card = memo(({children, title}: Props) => {
    return (
      <div className="w-full bg-white shadow flex flex-col my-4 p-6">
        {title && <p className="text-xl font-semibold pb-5">{title}</p>}
        {children}
      </div>
    );
  });
