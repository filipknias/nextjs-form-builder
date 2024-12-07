import { DragEndEvent, useDndMonitor, useDroppable } from "@dnd-kit/core";
import { DroppableIds } from "../types/dnd-types";
import { NewFormElement } from "../types/builder-types";
import { useBuilderStore } from "../hooks/useBuilderStore";

export default function BuilderArea() {
    const { setNodeRef, isOver } = useDroppable({
        id: DroppableIds.BUILDER_AREA,
    });
    const { formElements, addFormElement } = useBuilderStore();

    useDndMonitor({
        onDragEnd: (event: DragEndEvent) => {
            if (!isOver) return;
            const element = event.active.data.current as NewFormElement;
            const isElementInState = formElements.find((element) => element.id === event.active.id);
            if (!isElementInState) {
                addFormElement(element);
            }
        },
    });
        
    return (
        <div className="bg-gray-900 rounded-lg p-4 flex-1 max-w-2xl mx-auto h-full relative" ref={setNodeRef}>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-12">
                <h2 className="text-gray-400 text-center font-bold text-3xl select-none">Drop here</h2>
            </div>
        </div>
    )
}
