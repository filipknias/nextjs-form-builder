import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";

type Props = {
    label: string;
    placeholder: string;
    helperText: string;
}

export default function SelectField({ label, placeholder, helperText }: Props) {
    return (
        <Card className="px-4 py-8">
            <CardTitle className="font-semibold text-base mb-2 text-white">{label}</CardTitle>
            <Select>
                <SelectTrigger className="mb-1 border-gray-700 text-white">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
            </Select>
            <CardDescription className="text-sm text-gray-500 font-medium">{helperText}</CardDescription>
        </Card>
    )
}