"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

interface HeaderWrapperProps {
  children: React.ReactNode;
}

export default function HeaderWrapper({ children }: HeaderWrapperProps) {
  const pathname = usePathname();
  const isLanding = pathname === "/";
  const isDocsPage = pathname.startsWith('/docs');
  const isAuthPage = false;
  
  return (
    <>
      <Header 
        hideAtTopOnLanding={isLanding} 
        isAuthPage={isAuthPage}
      />
      <main className={isDocsPage ? "pt-0" : "pt-16"}>{children}</main>
    </>
  );
} 