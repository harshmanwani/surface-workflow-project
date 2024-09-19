"use client";

import { useState } from "react";

interface CollapsibleCardProps {
  title: string;
  children: React.ReactNode;
  description: string;
  completed: boolean;
}

export default function CollapsibleCard({
  title,
  children,
  description,
  completed,
}: CollapsibleCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg bg-white shadow-sm border border-gray-200">
      <div
        className="flex justify-between items-center p-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-4">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${completed ? 'bg-blue-500' : 'border-2 border-gray-300'}`}>
            {completed && <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          </div>
        </div>
        <span className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>
      {isOpen && (
        <div className="p-6 border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
}
