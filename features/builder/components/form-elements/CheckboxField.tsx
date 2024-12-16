import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

type Props = {
    label: string;
    helperText: string;
}

export default function CheckboxField({ label, helperText }: Props) {
    return (
        <Card className="flex gap-3 px-4 py-8">
            <Checkbox className="mt-1 border-gray-700" />
            <div>
                <CardTitle className="font-semibold text-base mb-1 text-white">{label}</CardTitle>
                <CardDescription className="text-sm text-gray-500 font-medium">{helperText}</CardDescription>
            </div>
        </Card>
    )
}