"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

interface HeaderWrapperProps {
  children: React.ReactNode;
}

export default function HeaderWrapper({ children }: HeaderWrapperProps) {
  const pathname = usePathname();
  const isLanding = pathname === "/";
  const isAuthPage = pathname === "/signin" || pathname === "/signup";
  
  return (
    <>
      <Header 
        hideAtTopOnLanding={isLanding} 
        isAuthPage={isAuthPage}
      />
      <main className="pt-16">{children}</main>
    </>
  );
} 