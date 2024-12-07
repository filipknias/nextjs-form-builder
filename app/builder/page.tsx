"use client";

import ActiveFormElement from "@/features/builder/components/ActiveFormElement";
import BuilderArea from "@/features/builder/components/BuilderArea";
import FormElementsSidebar from "@/features/builder/components/FormElementsSidebar";
import Toolbar from "@/features/builder/components/Toolbar";
import DndKitProvider from "@/features/builder/components/providers/DndKitProvider";
import FormContextProvider from "@/features/builder/components/providers/FormProvider";

export default function Builder() {
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
                <ActiveFormElement />
            </div>
        </DndKitProvider>
    </FormContextProvider>
  )
}
