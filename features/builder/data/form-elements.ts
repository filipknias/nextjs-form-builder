import { SidebarFormElement } from "@/features/builder/types/builder-types";
import { Heading1, Heading2, Pilcrow, Minus, SeparatorHorizontal, Type, Binary, SquarePilcrow, Calendar, List, SquareCheck } from "lucide-react";

export const formElements: SidebarFormElement[] = [
    {
        label: 'Title field',
        icon: Heading1,
        type: 'title-field',
        section: 'layout',
        attributes: {
            title: 'Title field',
        }
    },
    {
        label: 'Subtitle field',
        icon: Heading2,
        type: 'subtitle-field',
        section: 'layout',
        attributes: {
            subtitle: 'Subtitle field',
        }
    },
    {
        label: 'Paragraph field',
        icon: Pilcrow,
        type: 'paragraph-field',
        section: 'layout',
        attributes: {
            text: 'Text here',
        }
    },
    {
        label: 'Separator field',
        icon: Minus,
        type: 'separator-field',
        section: 'layout',
    },
    {
        label: 'Spacer field',
        icon: SeparatorHorizontal,
        type: 'spacer-field',
        section: 'layout',
        attributes: {
            height: 20,
        }
    },
    {
        label: 'Text field',
        icon: Type,
        type: 'text-field',
        section: 'form',
        attributes: {
            label: 'Text field',
            placeholder: 'Value here...',
            helperText: 'Helper text',
            required: false,
        },
    },
    {
        label: 'Number field',
        icon: Binary,
        type: 'number-field',
        section: 'form',
        attributes: {
            label: 'Number field',
            placeholder: '0',
            helperText: 'Helper text',
            required: false,
        },
    },
    {
        label: 'Textarea field',
        icon: SquarePilcrow,
        type: 'textarea-field',
        section: 'form',
        attributes: {
            label: 'Text area',
            placeholder: 'Value here...',
            helperText: 'Helper text',
            rows: 3,
            required: false,
        },
    },
    {
        label: 'Date field',
        icon: Calendar,
        type: 'date-field',
        section: 'form',
        attributes: {
            label: 'Date field',
            helperText: 'Helper text',
            required: false,
        },
    },
    {
        label: 'Select field',
        icon: List,
        type: 'select-field',
        section: 'form',
        attributes: {
            label: 'Select field',
            placeholder: 'Value here...',
            helperText: 'Helper text',
            options: [],
            required: false,
        },
    },
    {
        label: 'Checkbox field',
        icon: SquareCheck,
        type: 'checkbox-field',
        section: 'form',
        attributes: {
            label: 'Checkbox field',
            helperText: 'Helper text',
            required: false,
        },
    },
];