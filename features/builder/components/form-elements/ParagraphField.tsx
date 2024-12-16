import { Card, CardDescription, CardTitle } from "@/components/ui/card";

type Props = {
    text: string;
}

export default function ParagraphField({ text }: Props) {
  return (
    <Card className="px-4 py-8">
        <CardDescription className="text-sm text-gray-500 font-medium mb-2">Paragraph field</CardDescription>
        <CardTitle className="font-semibold text-base text-white">{text}</CardTitle>
    </Card>
  )
}