import { Card } from "@/components/ui/card";
import { SidebarFormElement } from "../types/builder-types";

export default function FormElementTile({ formElement }: { formElement: SidebarFormElement }) {
    const { icon: Icon, label, type, attributes } = formElement;

    return (
        <Card className="h-32 w-32 flex flex-col gap-2 items-center justify-center hover:border-gray-400">
            <div className="flex justify-center mb-2 text-3xl text-white">
                <Icon />
            </div>
            <p className="text-white text-sm font-medium text-center">{label}</p>
        </Card>
    )
}
