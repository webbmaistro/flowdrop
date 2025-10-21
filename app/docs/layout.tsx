import React from "react";
import Sidebar from "./Sidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 px-4 py-8 md:px-12 md:py-12 overflow-y-auto">
        {children}
      </main>
    </div>
  );
} 