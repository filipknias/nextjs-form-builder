import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpToLine, CloudDownload, SquarePlus } from "lucide-react";
import Link from "next/link";

export default function Toolbar() {
  return (
    <div className="bg-gray-900 w-full px-8 py-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
            <Link href="/dashboard">
                <Button variant="primary">
                    <ArrowLeft /> Dashboard
                </Button>
            </Link>
            <div className="flex flex-wrap gap-6">
                <Link href="/preview" className="flex items-center gap-2 hover:underline text-white text-sm">
                    <SquarePlus />
                    <span className="font-semibold">Preview in new tab</span>
                </Link>
                <Button variant="primary">
                    <CloudDownload /> Save
                </Button>
                <Button variant="gradient">
                    <ArrowUpToLine /> Publish
                </Button>
            </div>
        </div>
    </div>
  )
}
