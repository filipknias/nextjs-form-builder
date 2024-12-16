import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Props = {
    label: string;
    placeholder: string;
    helperText: string;
    required: boolean;
}

export default function TextField({ label, placeholder, helperText, required }: Props) {
  return (
    <Card className="px-4 py-8">
        <CardTitle className="font-semibold text-base mb-2 text-white">{label}</CardTitle>
        <Input className="w-full mb-2" placeholder={placeholder} required={required} />
        <CardDescription className="text-sm text-gray-500 font-medium">{helperText}</CardDescription>
    </Card>
  )
}