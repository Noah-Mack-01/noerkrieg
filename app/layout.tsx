import "@/styles/globals.css";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontRoboto } from "@/config/fonts";
import Navbar from "@/components/navbar";
import { NavigationConfig } from "@/config/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <script src="https://kit.fontawesome.com/3e207bb8db.js" crossOrigin="anonymous"></script>
      </head>
      <body className={clsx(fontRoboto.variable)}>
        <Providers>
          <main className="flex flex-col justify-start items-start">
            <Navbar {...NavigationConfig}></Navbar>
            {children}
          </main>
          <footer/>
        </Providers>
      </body>
    </html>
  );
}

