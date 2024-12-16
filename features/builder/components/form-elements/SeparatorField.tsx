import { Card, CardDescription } from "@/components/ui/card";

export default function SeparatorField() {
    return (
        <Card className="px-4 py-8">
            <CardDescription className="text-sm text-gray-500 font-medium mb-3">Separator field</CardDescription>
            <hr />
        </Card>
    )
}