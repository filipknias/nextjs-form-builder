"use client";

import { DragEndEvent, useDndMonitor, useDroppable } from "@dnd-kit/core";
import { DroppableIds } from "../types/dnd-types";
import { NewFormElement } from "../types/builder-types";
import { useBuilderStore } from "../hooks/useBuilderStore";
import FormElementRenderer from "./FormElementRenderer";
import ElementDraggableWrapper from "./ElementDraggableWrapper";
import FormElementOverlay from "./FormElementOverlay";
import { useFormContext } from "react-hook-form";

export default function BuilderArea() {
    const { setNodeRef, isOver } = useDroppable({
        id: DroppableIds.BUILDER_AREA,
    });
    const { formElements, addFormElement } = useBuilderStore();

    const { watch, setValue } = useFormContext();
    const formValues = watch();
    
    useDndMonitor({
        onDragEnd: (event: DragEndEvent) => {
            if (!isOver) return;
            const element = event.active.data.current as NewFormElement;
            const isElementInState = formElements.find((element) => element.id === event.active.id);
            if (!isElementInState) {
                const newElement = addFormElement(element);
                if (newElement.attributes) {
                    Object.entries(newElement.attributes).forEach(([key, value]) => {
                       setValue(`${newElement.id}.${key}`, value); 
                    });
                }
            }
        },
    });
        
    return (
        <div className="bg-gray-900 rounded-lg p-4 flex-1 max-w-2xl mx-auto h-full relative" ref={setNodeRef}>
            {formElements.length === 0 && (
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
                    <h2 className="text-gray-400 text-center font-bold text-3xl select-none">Drop here</h2>
                </div>
            )}
            <div className="flex flex-col gap-4 overflow-hidden max-h-full">
                {formElements.map((element) => (
                    <ElementDraggableWrapper formElement={element} key={element.id}>
                        <FormElementOverlay id={element.id}>
                            <FormElementRenderer 
                                type={element.type} 
                                attributes={formValues[element.id]} 
                            />
                        </FormElementOverlay>
                    </ElementDraggableWrapper>
                ))}
                {isOver && (
                    <div className="rounded-md bg-gray-700 w-full h-36"></div>
                )}
            </div>
        </div>
    )
}
