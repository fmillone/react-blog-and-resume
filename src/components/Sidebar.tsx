import { memo } from "react";

export const Sidebar = memo(({ children }: any) => {
  return (
    <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
      {children}
    </aside>
  )
});
