import React, { ReactNode } from "react";
import Link from "next/link";

interface BaseLayoutProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <Link href="/" className="text-white mx-2">
          Home
        </Link>
        <Link href="/people" className="text-white mx-2">
          People
        </Link>
      </nav>
      <div className="p-4">{children}</div>
    </div>
  );
}
