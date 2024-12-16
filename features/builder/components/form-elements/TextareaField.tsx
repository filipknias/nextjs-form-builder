import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

type Props = {
    label: string;
    placeholder: string;
    helperText: string;
    rows: number;
    required: boolean;
}

export default function TextareaField({ label, placeholder, helperText, required, rows }: Props) {
  return (
    <Card className="px-4 py-8">
        <CardTitle className="font-semibold text-base mb-2 text-white">{label}</CardTitle>
        <Textarea className="w-full mb-2" placeholder={placeholder} required={required} rows={rows} />
        <CardDescription className="text-sm text-gray-500 font-medium">{helperText}</CardDescription>
    </Card>
  )
}