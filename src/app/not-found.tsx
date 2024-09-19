import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <p className="text-sm text-gray-500 mt-1">
        You've hit a wall. Turn around!
      </p>
      <Link href="/" className="mt-4 px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
        Go Home
      </Link>
    </div>
  );
}
