import { SlidersVertical } from "lucide-react";

export default function ActiveFormElement() {
    return (
        <div className="hidden lg:block bg-gray-900 h-full py-5 px-12 w-80 text-white relative">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-12">
                <div className="bg-blue-500 w-12 h-12 flex items-center justify-center mx-auto rounded-full mb-4">
                    <SlidersVertical />
                </div>
                <p className="text-white text-center text-sm">Select any element on the canvas to activate its settings menu.</p>
            </div>
        </div>
    )
}
