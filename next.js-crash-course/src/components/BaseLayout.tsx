import React, { ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <a href="/" className="text-white mx-2">
          Home
        </a>
        <a href="/people" className="text-white mx-2">
          People
        </a>
      </nav>
      <div className="p-4">{children}</div>
    </div>
  );
}
