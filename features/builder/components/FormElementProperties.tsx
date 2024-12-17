import { useForm, useFormContext } from "react-hook-form";
import { useBuilderStore } from "../hooks/useBuilderStore";
import { useEffect, useRef } from "react";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { X, Plus } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { ElementAttributeValue, FormElement } from "../types/builder-types";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Switch } from "@/components/ui/switch";

type Props = {
    formElement: FormElement;
}

export default function FormElementProperties({ formElement }: Props) {
    const { setActiveElementId } = useBuilderStore();
    const { register, setValue, getValues, formState } = useFormContext();
    const sidebarRef = useRef<HTMLDivElement|null>(null);
    
    const { attributes, id } = formElement;

    useEffect(() => {
        const clickOutsideFn = (e: MouseEvent) => {
            const targetDataId = (e.target as HTMLElement).getAttribute("data-component-id");
            if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node) && !targetDataId) {
                setActiveElementId(null);
            }
        };
        
        document.addEventListener("mousedown", (e) => clickOutsideFn(e));
        return () => document.removeEventListener("mousedown", clickOutsideFn);
    }, []);

    const addSelectOption = () => {
        const prevOptions: string[] = getValues(`${id}.options`);
        const defaultValue = "New option";
        setValue(`${id}.options`, [...prevOptions, defaultValue]);
    };

    const deleteSelectOption = (index: number) => {
        const prevOptions: string[] = getValues(`${id}.options`);
        const newOptions = prevOptions.filter((_, optionIdx) => optionIdx !== index);
        setValue(`${id}.options`, newOptions);
    };

    const updateSelectValue = (value: string, index: number) => {
        const prevOptions: string[] = getValues(`${id}.options`);
        const newOptions = prevOptions.map((option, optionIdx) => optionIdx === index ? value : option);
        setValue(`${id}.options`, newOptions);
    };

    const getKeyByValue = <T,>(object: Record<string, T>, value: T): string|null => {
        for (const key in object) {
          if (object[key] === value) {
            return key;
          }
        }
        return null;
    }

    const getRequiredValue = () => {
        return getValues(`${id}.required`);
    };

    const handleRequiredChange = () => {
        const required = getValues(`${id}.required`);
        setValue(`${id}.required`, !required);
    };
    
    return (
        <div className="py-8 px-5 h-full" ref={sidebarRef}>
            <div className="flex items-center justify-between border-b border-slate-700 pb-2 mb-6">
                <CardDescription>Element properties</CardDescription>
                <X 
                    className="text-xl text-slate-400 cursor-pointer hover:text-slate-300 transition duration-200" 
                    onClick={() => setActiveElementId(null)}
                />
            </div>
            <div className="flex flex-col gap-6 overflow-y-auto px-2">
                {attributes && attributes.title && (
                    <div>
                        <CardTitle className="text-base text-white mb-2">Title</CardTitle>
                        <Input
                            className="w-full mb-2" 
                            {...register(`${id}.${getKeyByValue<ElementAttributeValue>(attributes, attributes.title)}`, {
                                required: "Field is required"
                            })}
                        />
                        <CardDescription className="text-lg text-red-500">
                            
                        </CardDescription>
                    </div>
                )}
                {attributes && attributes.subtitle && (
                    <div>
                        <CardTitle className="text-base text-white mb-2">Subtitle</CardTitle>
                        <Input
                            className="w-full mb-2" 
                            {...register(`${id}.${getKeyByValue<ElementAttributeValue>(attributes, attributes.subtitle)}`)}
                        />
                    </div>
                )}
                {attributes && attributes.label && (
                    <div>
                        <CardTitle className="text-base text-white mb-2">Label</CardTitle>
                        <Input 
                            className="w-full mb-2" 
                            {...register(`${id}.${getKeyByValue<ElementAttributeValue>(attributes, attributes.label)}`)}
                        />
                        <CardDescription className="text-xs leading-5">
                            The label of the field.
                            <br />
                            It will be displayed above the field
                        </CardDescription>
                    </div>
                )}
                {attributes && attributes.placeholder && (
                    <div>
                        <CardTitle className="text-base text-white mb-2">Placeholder</CardTitle>
                        <Input 
                            className="w-full mb-2" 
                            {...register(`${id}.${getKeyByValue<ElementAttributeValue>(attributes, attributes.placeholder)}`)}
                        />
                        <CardDescription className="text-xs">The placeholder of the field.</CardDescription>
                    </div>
                )}
                {attributes && attributes.helperText && (
                    <div>
                        <CardTitle className="text-base text-white mb-2">Helper text</CardTitle>
                        <Input 
                            className="w-full mb-2" 
                            {...register(`${id}.${getKeyByValue<ElementAttributeValue>(attributes, attributes.helperText)}`)} 
                        />
                        <CardDescription className="text-xs leading-5">
                            The helper text of the field.
                            <br />
                            It will be displayed below the field.
                        </CardDescription>
                    </div>
                )}
                {attributes && attributes.text && (
                    <div>
                        <CardTitle className="text-base text-white mb-2">Text</CardTitle>
                        <Textarea 
                            className="w-full mb-2 text-white" 
                            {...register(`${id}.${getKeyByValue<ElementAttributeValue>(attributes, attributes.text)}`)} 
                        />
                    </div>
                )}
                {attributes && attributes.height && (
                    <div>
                        <CardTitle className="text-base text-white mb-2">Height (px)</CardTitle>
                        <Input 
                            type="number"
                            className="w-full mb-2"
                            {...register(`${id}.${getKeyByValue<ElementAttributeValue>(attributes, attributes.height)}`, { valueAsNumber: true })}
                        />
                    </div>
                )}
                {attributes && attributes.rows && (
                    <div>
                        <CardTitle className="text-base text-white mb-2">Rows</CardTitle>
                        <Input 
                            type="number"
                            className="w-full mb-2"
                            {...register(`${id}.${getKeyByValue<ElementAttributeValue>(attributes, attributes.rows)}`, { valueAsNumber: true })}
                        />
                    </div>
                )}
                {attributes && attributes.options && (
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <CardTitle className="text-base text-white">Options</CardTitle>
                            <Button variant="outline" onClick={addSelectOption}>Add</Button>
                        </div>
                        <div className="flex flex-col gap-2">
                            {getValues(`${id}.options`).map((optionValue: string, index: number) => (
                                <div className="flex items-center gap-4" key={index}>
                                    <Input 
                                        value={optionValue} 
                                        onChange={(e) => updateSelectValue(e.target.value, index)} 
                                    />
                                    <X className="text-3xl cursor-pointer text-white" onClick={() => deleteSelectOption(index)} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {attributes && Object.prototype.hasOwnProperty.call(attributes, "required") && (
                    <div className="border border-slate-800 rounded-md p-4">
                        <Label htmlFor="required">
                            <CardTitle className="text-base text-white mb-2">Required</CardTitle>
                        </Label>
                        <div className="flex justify-between">
                            <CardDescription className="text-xs leading-5">
                                The helper text of the field.
                                <br />
                                It will be displayed below the field.
                            </CardDescription>
                            <Switch 
                                id="required"
                                checked={getRequiredValue()}
                                onCheckedChange={handleRequiredChange}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}