import { DragEndEvent, useDndContext, useDndMonitor, useDroppable } from "@dnd-kit/core";
import { useBuilderStore } from "../hooks/useBuilderStore";
import { Trash2 } from 'lucide-react';
import { DroppableIds } from "../types/dnd-types";
import { NewFormElement } from "../types/builder-types";

type Props = {
    children: React.ReactNode;
    id: string;
}

export default function FormElementOverlay({ children, id }: Props) {
    const { 
        formElements, 
        deleteFormElement, 
        setActiveElementId, 
        addFormElement,
        moveElements 
    } = useBuilderStore();
    const topHalfId = `${id}-top-half`;
    const bottomHalfId = `${id}-bottom-half`;

    const topDroppableHalf = useDroppable({
        id: topHalfId,
    });
    const bottomDroppableHalf = useDroppable({
        id: bottomHalfId,
    });
    const dndContext = useDndContext();

    useDndMonitor({
        onDragEnd: (event: DragEndEvent) => {
            const droppableElementId = event.over?.id;
            const activeElementId = event.active.id.toString();
            const draggingElement = formElements.find((element) => element.id === activeElementId);
            const overlayElement = formElements.find((element) => element.id === id);

            switch (droppableElementId) {
                case DroppableIds.BUILDER_AREA: {
                    if (!overlayElement) return;
                    const newElement = event.active.data.current as NewFormElement;
                    if (topDroppableHalf.isOver) {
                        addFormElement(newElement, overlayElement.indexPosition);
                    } else if (bottomDroppableHalf.isOver) {
                        addFormElement(newElement, overlayElement.indexPosition + 1);
                    } else if (draggingElement) {
                        moveElements(formElements.length, draggingElement.id);
                    }
                    break;
                }
                case topHalfId: {
                    if (!overlayElement) return;
                    if (draggingElement && draggingElement.indexPosition !== overlayElement.indexPosition - 1) {
                        moveElements(overlayElement.indexPosition, activeElementId);
                    } else if (!draggingElement) {
                        const newElement = event.active.data.current as NewFormElement;
                        addFormElement(newElement, overlayElement.indexPosition);  
                    }
                    break;
                }
                case bottomHalfId: {
                    if (!overlayElement) return;
                    if (draggingElement && draggingElement.indexPosition !== overlayElement.indexPosition + 1) {
                        moveElements(overlayElement.indexPosition, activeElementId);
                    } else if (!draggingElement) {
                        const newElement = event.active.data.current as NewFormElement;
                        addFormElement(newElement, overlayElement.indexPosition + 1);
                    }
                    break;
                }
            }
            setActiveElementId(null);
        },
    });

    return (
        <div className="relative group cursor-pointer" onClick={() => setActiveElementId(id)}>
            <div className="absolute top-0 h-1/2 w-full rounded-xl" ref={topDroppableHalf.setNodeRef}>
                {topDroppableHalf.isOver && dndContext.active?.id !== id && (
                    <div className="h-2 bg-white rounded-t-xl"></div>
                )}
            </div>
            <div className="absolute bottom-0 h-1/2 w-full rounded-xl flex flex-col justify-end" ref={bottomDroppableHalf.setNodeRef}>
                {bottomDroppableHalf.isOver && dndContext.active?.id !== id && (
                    <div className="h-2 bg-white rounded-b-xl"></div>
                )}
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md hidden group-hover:flex items-center gap-4 justify-end z-50" data-component-id={id}>
                <button 
                    className="bg-red-500 text-white flex items-center justify-center w-16 h-full text-xl hover:bg-red-600 transition duration-200 rounded-r-md"
                    onClick={() => deleteFormElement(id)}
                >
                    <Trash2 />
                </button>
            </div>
            {children}
        </div>
    )
}
