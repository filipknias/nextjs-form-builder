import { ElementAttributes, FormElementType } from "@/features/builder/types/builder-types";
import TitleField from "@/features/builder/components/form-elements/TitleField";
import TextField from "@/features/builder/components/form-elements/TextField";
import SubtitleField from "@/features/builder/components/form-elements/SubtitleField";
import ParagraphField from "@/features/builder/components/form-elements/ParagraphField";
import SeparatorField from "@/features/builder/components/form-elements/SeparatorField";
import SpacerField from "@/features/builder/components/form-elements/SpacerField";
import NumberField from "@/features/builder/components/form-elements/NumberField";
import TextareaField from "@/features/builder/components/form-elements/TextareaField";
import DateField from "@/features/builder/components/form-elements/DateField";
import SelectField from "@/features/builder/components/form-elements/SelectField";
import CheckboxField from "@/features/builder/components/form-elements/CheckboxField";

interface Props {
    type: FormElementType;
    attributes?: ElementAttributes;
}

const defaults = {
    title: "Title field",
    subtitle: "Subtitle field",
    text: 'Text here',
    height: 20,
    label: "Text field",
    placeholder: "Value here...",
    helperText: "Helper text",
    required: false,
};

export default function ElementComponent ({ type, attributes }: Props) {
    const getComponentProp = <T,>(name: string, type: string): T => {
        const isAttributeProp = !!(attributes && attributes[name] && typeof attributes[name] === type);
        return isAttributeProp ? (attributes[name] as T) : (defaults[name as keyof typeof defaults] as T);
    };

    switch (type) {
        case "title-field": 
            return (
                <TitleField title={getComponentProp('title', 'string')} />
            )
        case "text-field": 
            return (
                <TextField 
                    label={getComponentProp('label', 'string')}
                    placeholder={getComponentProp('placeholder', 'string')} 
                    helperText={getComponentProp('helperText', 'string')}
                    required={getComponentProp('required', 'boolean')}
                />
            )
        case "subtitle-field": 
            return (
                <SubtitleField subtitle={getComponentProp<string>('subtitle', 'string')}/>
            )
        case "paragraph-field": 
            return (
                <ParagraphField text={getComponentProp<string>('text', 'string')}/>
            )
        case "separator-field": 
            return (
                <SeparatorField />
            )
        case "spacer-field": 
            return (
                <SpacerField height={getComponentProp<number>('height', 'number')} />
            )
        case "number-field": 
            return (
                <NumberField 
                    label={getComponentProp<string>('label', 'string')}
                    placeholder={getComponentProp<string>('placeholder', 'string')} 
                    helperText={getComponentProp<string>('helperText', 'string')}
                    required={getComponentProp<boolean>('required', 'boolean')}
                />
            )
        case "textarea-field": 
            return (
                <TextareaField 
                    label={getComponentProp<string>('label', 'string')}
                    placeholder={getComponentProp<string>('placeholder', 'string')} 
                    helperText={getComponentProp<string>('helperText', 'string')}
                    required={getComponentProp<boolean>('required', 'boolean')}
                    rows={getComponentProp<number>('rows', 'number')}
                />
            )
        case "date-field": 
            return (
                <DateField 
                    label={getComponentProp<string>('label', 'string')}
                    helperText={getComponentProp<string>('helperText', 'string')}
                />
            )
        case "select-field": 
            return (
                <SelectField 
                    label={getComponentProp<string>('label', 'string')}
                    placeholder={getComponentProp<string>('placeholder', 'string')}
                    helperText={getComponentProp<string>('helperText', 'string')}
                />
            )
        case "checkbox-field": 
            return (
                <CheckboxField 
                    label={getComponentProp<string>('label', 'string')}
                    helperText={getComponentProp<string>('helperText', 'string')}
                />
            )
    }
}