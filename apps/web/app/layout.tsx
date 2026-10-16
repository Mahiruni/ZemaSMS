import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./style.css";
export const metadata: Metadata = {title:"ZemaSMS — Every Message Matters",description:"Reliable messaging infrastructure for a connected Ethiopia."};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body>{children}</body></html>}
