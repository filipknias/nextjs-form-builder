import Toolbar from "./components/Toolbar";
import { Button } from "@/components/ui/button";
import { SquarePlus, SlidersVertical, ArrowUpToLine, ArrowLeft, CloudDownload } from 'lucide-react';
import Link from "next/link";

export default function Builder() {
  return (
    <div className="flex h-full">
        <Toolbar />
        <div className="flex-1">
            <div className="flex flex-col h-full">
                <div className="bg-gray-900 w-full px-8 py-6">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <Link href="/dashboard">
                            <Button className="bg-blue-500 hover:bg-blue-600 px-6 py-4 font-semibold rounded-2xl">
                                <ArrowLeft />
                                Dashboard
                            </Button>
                        </Link>
                        <div className="flex flex-wrap gap-6">
                            <Link href="/preview" className="flex items-center gap-2 hover:underline text-white text-sm">
                                <SquarePlus />
                                <span className="font-semibold">Preview in new tab</span>
                            </Link>
                            <Button className="bg-blue-500 hover:bg-blue-600 px-6 py-4 font-semibold rounded-2xl">
                                <CloudDownload />
                                Save
                            </Button>
                            <Button variant="gradient" className="px-6 py-4 font-semibold rounded-2xl">
                                <ArrowUpToLine />
                                Publish
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-6 h-full">
                    <div className="bg-gray-900 rounded-lg p-4 flex-1 max-w-2xl mx-auto h-full relative">
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-12">
                            <h2 className="text-gray-400 text-center font-bold text-3xl select-none">Drop here</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="hidden lg:block bg-gray-900 h-full py-5 px-12 w-80 text-white relative">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-12">
                <div className="bg-blue-500 w-12 h-12 flex items-center justify-center mx-auto rounded-full mb-4">
                    <SlidersVertical />
                </div>
                <p className="text-white text-center text-sm">Select any element on the canvas to activate its settings menu.</p>
            </div>
        </div>
    </div>
  )
}
