import { Card, CardDescription, CardTitle } from "@/components/ui/card";

type Props = {
    subtitle: string;
}

export default function SubtitleField({ subtitle }: Props) {
    return (
        <Card className="px-4 py-8">
            <CardDescription className="text-sm text-gray-500 font-medium mb-2">Subtitle field</CardDescription>
            <CardTitle className="font-semibold text-lg text-white">{subtitle}</CardTitle>
        </Card>
    )
}