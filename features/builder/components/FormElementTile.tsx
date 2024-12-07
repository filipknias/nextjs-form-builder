import { Card } from "@/components/ui/card";
import { SidebarFormElement } from "../types/builder-types";
import { useDraggable } from "@dnd-kit/core";
import { useBuilderStore } from "../hooks/useBuilderStore";
import { CSS } from "@dnd-kit/utilities";

export default function FormElementTile({ formElement }: { formElement: SidebarFormElement }) {
    const { icon: Icon, label, type, attributes } = formElement;
    const { formElements } = useBuilderStore();

    const { 
        setNodeRef, 
        attributes: draggableAttributes, 
        listeners, 
        transform, 
        isDragging, 
    } = useDraggable({
        id: formElement.type,
        data: {
            type, 
            attributes, 
            indexPosition: formElements.length,
        },
    });

    const styles = {
        transform: CSS.Translate.toString(transform),
        zIndex: '50'
    };

    return (
        <div
            ref={setNodeRef}
            style={styles}
            {...draggableAttributes}
            {...listeners}
        >
            <Card className={`h-32 w-32 flex flex-col gap-2 items-center justify-center hover:border-gray-400 ${isDragging ? "cursor-grab" : "cursor-grabbing"}`}>
                <div className="flex justify-center mb-2 text-3xl text-white">
                    <Icon />
                </div>
                <p className="text-white text-sm font-medium text-center">{label}</p>
            </Card>
        </div>
    )
}
