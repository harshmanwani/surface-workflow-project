import "../styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Sidebar from "../components/Sidebar";

export const metadata: Metadata = {
  title: "Surface Labs Dashboard",
  description: "Analytics and tracking for your website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-white">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 ml-64 min-h-screen overflow-y-auto">
            <div className="p-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
