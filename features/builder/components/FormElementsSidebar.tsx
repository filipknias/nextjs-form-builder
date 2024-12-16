import { formElements } from "@/features/builder/data/form-elements";
import FormElementTile from "./FormElementTile";
import Link from "next/link";
import { FileText } from "lucide-react";
import { DragOverlay, useDndContext, useDraggable } from "@dnd-kit/core";

export default function FormElementsSidebar() {
    const layoutSectionElements = formElements.filter(({ section }) => section === "layout");
    const formSectionElements = formElements.filter(({ section }) => section === "form");
    const { active } = useDndContext();
    const draggingElement = active ? formElements.find(({ type }) => type === active.id) : undefined;
    
    return (
        <>
            <div className="hidden lg:block bg-gray-900 py-5 px-8 h-full overflow-hidden">
                <Link href="/">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <span className="bg-blue-500 w-10 h-10 rounded-full text-white flex items-center justify-center">
                            <FileText className="h-5" />
                        </span>
                        <h1 className="text-white font-bold text-2xl">Form Builder</h1>
                    </div>
                </Link>
                <div className="pb-2 mb-8 border-b border-gray-700">
                    <p className="text-sm text-gray-100 font-medium">Drag and drop elements</p>
                </div>
                <p className="text-sm text-gray-100 mb-4 font-medium">Layout elements</p>
                <div className="grid grid-cols-2 gap-4 mb-12">
                    {layoutSectionElements.map((element) => (
                        <FormElementTile key={element.type} formElement={element} />
                    ))}
                </div>
                <p className="text-sm text-gray-100 mb-4 font-medium">Form elements</p>
                <div className="grid grid-cols-2 gap-4">
                    {formSectionElements.map((element) => (
                        <FormElementTile key={element.type} formElement={element} />
                    ))}
                </div>
            </div>
            {draggingElement && (
                <DragOverlay>
                    <FormElementTile formElement={draggingElement} />
                </DragOverlay>
            )}
        </>
    )
}
