import { Card, CardDescription } from "@/components/ui/card";
import { UnfoldVertical } from 'lucide-react';

type Props = {
    height: number;
}

export default function SpacerField({ height }: Props) {
    return (
        <Card className="px-4 py-8">
            <CardDescription className="text-sm text-gray-500 font-medium mb-2">Spacer field: {height}px</CardDescription>
            <UnfoldVertical className="mx-auto text-3xl text-white" />
        </Card>
    )
}