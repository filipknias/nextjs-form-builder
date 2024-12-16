import { useDraggable } from "@dnd-kit/core";
import { FormElement } from "../types/builder-types";
import { CSS } from "@dnd-kit/utilities";

type Props = {
    children: React.ReactNode;
    formElement: FormElement;
}

export default function ElementDraggableWrapper({ children, formElement }: Props) {
    const { attributes, listeners, setNodeRef, transform, active, isDragging } = useDraggable({ 
        id: formElement.id,
        data: formElement,
    });

    return (
        <div 
            ref={setNodeRef} 
            className={`${active?.id === formElement.id ? "z-50" : ""} ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{ transform: CSS.Translate.toString(transform) }} 
            {...listeners} 
            {...attributes}
        >
            {children}
        </div>
    )
}
