import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { FormItem, FormField, FormControl } from "@/components/ui/form";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { useForm } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { PopoverContent } from "@radix-ui/react-popover";
import { Calendar } from "@/components/ui/calendar";

type Props = {
    label: string;
    helperText: string;
}

export default function DateField({ label, helperText }: Props) {
    const form = useForm();

    return (
        <Card className="px-4 py-8">
            <CardTitle className="font-semibold text-base mb-2 text-white">{label}</CardTitle>
            <FormField
                control={form.control}
                name={`date-field-${label}`}
                render={({ field }) => (
                    <FormItem className="flex flex-col mb-2">
                        <Popover>
                            <PopoverTrigger className="bg-gray-800 border border-gray-700" asChild>
                            <FormControl>
                                <Button>
                                    Pick a date
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                            </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                    date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                            />
                            </PopoverContent>
                        </Popover>
                    </FormItem>
                )}
            />
            <CardDescription className="text-sm text-gray-500 font-medium">{helperText}</CardDescription>
        </Card>
    )
}