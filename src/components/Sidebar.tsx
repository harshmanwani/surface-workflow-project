"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { gettingStartedIcon, myWorkspaceIcon, chevronDownIcon, overviewIcon, funnelIcon, leadsIcon, segmentsIcon, workflowsIcon, integrationsIcon, settingsIcon } from "./Icons";

const menuItems = [
  { name: "Getting started", href: "/", icon: gettingStartedIcon() },
  { name: "Overview", href: "/overview", icon: overviewIcon() },
  { name: "Funnels", href: "/funnels", icon: funnelIcon() },
  { name: "Leads", href: "/leads", icon: leadsIcon() },
  { name: "Segments", href: "/segments", icon: segmentsIcon() },
  { name: "Workflows", href: "/workflows", icon: workflowsIcon() },
  { name: "Integrations", href: "/integrations", icon: integrationsIcon() },
  { name: "Settings", href: "/settings", icon: settingsIcon() },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar fixed left-0 top-0 w-64 h-screen overflow-y-auto flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold">
          surface <span className="px-2 p-1 text-white bg-blue-600 rounded-md">labs</span>
        </h1>
      </div>
      <div className="px-3 py-4 border-b border-gray-200">
        <button className="w-full flex items-center justify-between text-sm text-gray-700 hover:bg-gray-100 rounded-md px-3 py-2">
          <div className="flex items-center">
            <span className="mr-2">{myWorkspaceIcon()}</span>
            My workspace
          </div>
          <span>{chevronDownIcon()}</span>
        </button>
      </div>
      <nav className="flex-grow overflow-y-auto">
        <ul className="space-y-1 p-3">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center rounded-md px-3 py-2 text-xs ${pathname === item.href
                  ? "bg-[#3E4149] text-white sidebar-item-selected"
                  : "hover:bg-gray-100 text-[#383F50]"
                  }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-pink-200 flex items-center justify-center text-pink-600 font-bold text-lg">
            CH
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">Chris Hood</p>
            <p className="text-xs text-gray-500">hello@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
