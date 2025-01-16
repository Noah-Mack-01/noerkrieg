import React from "react";

export default function Layout({children, params}: { children: React.ReactNode, params: Promise<{query: string}>}) {
  return (<><span>{params.then((params)=>params.query)}</span>{children}</>);
}