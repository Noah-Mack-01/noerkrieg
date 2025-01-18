import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontRoboto } from "@/config/fonts";
import Navbar from "@/components/navbar";
import { NavigationConfig } from "@/config/navigation";

export default function RootLayout({
  children,
  updates
}: {
  children: React.ReactNode;
  updates: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <script src="https://kit.fontawesome.com/3e207bb8db.js" crossOrigin="anonymous"></script>
      </head>
      <body className={clsx(fontRoboto.variable)}>
        <Providers>
          <main className="flex flex-col justify-start align-center">
            <Navbar {...NavigationConfig}></Navbar>
          </main>
          <footer/>
        </Providers>
      </body>
    </html>
  );
}

