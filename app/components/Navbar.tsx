import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-gray-900 p-4 border-b border-gray-700">
        <Link href="/" className="inline-block">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-600 to-indigo-900">Form Builder</h1>
        </Link>
    </div>
  )
}
