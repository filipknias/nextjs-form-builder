import { Card, CardDescription, CardTitle } from "@/components/ui/card";

type Props = {
    title: string;
}

export default function TitleField({ title }: Props) {
  return (
    <Card className="px-4 py-8">
        <CardDescription className="mb-1 text-sm text-gray-500 font-medium">Title field</CardDescription>
        <CardTitle className="font-semibold text-lg text-white">{title}</CardTitle>
    </Card>
  )
}