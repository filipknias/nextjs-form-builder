import { FileText } from 'lucide-react';
import Link from "next/link";

export default function Toolbar() {
  return (
    <div className="hidden lg:block bg-gray-900 py-5 px-12 h-full">
        <Link href="/">
            <div className="flex items-center justify-center gap-3 mb-4">
                <span className="bg-blue-500 w-10 h-10 rounded-full text-white flex items-center justify-center">
                    <FileText className="h-5" />
                </span>
                <h1 className="text-white font-bold text-2xl">Form Builder</h1>
            </div>
        </Link>
    </div>
  )
}
