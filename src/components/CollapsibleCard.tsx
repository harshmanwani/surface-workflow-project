"use client";

import { useState } from "react";

interface CollapsibleCardProps {
  title: string;
  children: React.ReactNode;
  description: string;
}

export default function CollapsibleCard({
  title,
  children,
  description,
}: CollapsibleCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg bg-white shadow-sm">
      <div
        className="flex justify-between items-center p-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <span className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </div>
      {isOpen && <div className="p-6 border-t">{children}</div>}
    </div>
  );
}
