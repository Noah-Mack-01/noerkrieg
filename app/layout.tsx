import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontRoboto } from "@/config/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx(fontRoboto.variable)}>
        <Providers>
          <div>
            <main className="flex ">
              {children}
            </main>
            <footer/>
          </div>
        </Providers>
      </body>
    </html>
  );
}

