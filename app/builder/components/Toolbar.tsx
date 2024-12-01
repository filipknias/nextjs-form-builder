import { Button } from "@/components/ui/button";
import { Fullscreen, SaveAll, ArrowUpToLine, Ellipsis } from 'lucide-react';

export default function Toolbar() {
  return (
    <div className="bg-gray-900 py-4">
        <div className="px-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                    <p className="text-gray-400 font-semibold">
                        Form:
                        <span className="text-white font-bold ml-1">Testing form</span>
                    </p>
                    <Button variant="outline" size="icon">
                        <Ellipsis />
                    </Button>
                </div>
                <div className="flex flex-wrap gap-4">
                    <Button variant="outline">
                        <Fullscreen className="mr-1" /> Preview
                    </Button>
                    <Button variant="outline">
                        <SaveAll className="mr-1" /> Save
                    </Button>
                    <Button variant="gradient">
                        <ArrowUpToLine className="mr-1" /> Publish
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}
