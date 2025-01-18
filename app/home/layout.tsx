import { ReactNode } from "react";

export default function HomeLayout({updates, children}: {children: ReactNode, updates: ReactNode}) {
  return (
    <div className="w-full flex flex-col justify-start pt-3 pl-3 space-y-5">
      {updates}
      {children}
    </div>
  );
}