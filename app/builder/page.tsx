"use client";

import BuilderArea from "@/features/builder/components/BuilderArea";
import FormElementProperties from "@/features/builder/components/FormElementProperties";
import FormElementsSidebar from "@/features/builder/components/FormElementsSidebar";
import Toolbar from "@/features/builder/components/Toolbar";
import DndKitProvider from "@/features/builder/components/providers/DndKitProvider";
import FormContextProvider from "@/features/builder/components/providers/FormProvider";
import { useBuilderStore } from "@/features/builder/hooks/useBuilderStore";
import { SlidersVertical } from 'lucide-react';

export default function Builder() {
    const { activeElementId, formElements } = useBuilderStore();
    const activeElement = formElements.find((element) => element.id === activeElementId);

    return (
        <FormContextProvider>
            <DndKitProvider>
                <div className="flex h-full">
                    <FormElementsSidebar />
                    <div className="flex-1">
                        <div className="flex flex-col h-full">
                            <Toolbar />
                            <div className="px-4 py-6 h-full">
                                <BuilderArea />
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block bg-gray-900 h-full w-80">
                        {activeElement ? (
                            <FormElementProperties formElement={activeElement} />
                        ) : (
                            <div className="py-5 px-12 text-white relative h-full">
                                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-12">
                                    <div className="bg-blue-500 w-12 h-12 flex items-center justify-center mx-auto rounded-full mb-4">
                                        <SlidersVertical />
                                    </div>
                                    <p className="text-white text-center text-sm">Select any element on the canvas to activate its settings menu.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </DndKitProvider>
        </FormContextProvider>
    )
}
