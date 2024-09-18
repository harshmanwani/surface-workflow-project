"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Getting started", href: "/", icon: "->" },
  { name: "Overview", href: "/overview", icon: "->" },
  { name: "Funnels", href: "/funnels", icon: "->" },
  { name: "Leads", href: "/leads", icon: "->" },
  { name: "Segments", href: "/segments", icon: "->" },
  { name: "Workflows", href: "/workflows", icon: "->" },
  { name: "Integrations", href: "/integrations", icon: "->" },
  { name: "Settings", href: "/settings", icon: "->" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white p-6">
      <div className="mb-8">
        <h1 className="text-xl font-bold">surface labs</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center rounded-md px-3 py-2 text-sm ${
                  pathname === item.href
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto pt-6">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gray-300"></div>
          <div className="ml-3">
            <p className="text-sm font-medium">Chris Hood</p>
            <p className="text-xs text-gray-500">hello@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
