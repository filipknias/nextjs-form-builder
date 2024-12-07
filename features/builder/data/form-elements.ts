import { SidebarFormElement } from "@/features/builder/types/builder-types";
import { Heading1, Heading2 } from "lucide-react";

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
            title: 'Subtitle field',
        }
    },
    {
        label: 'Paragraph field',
        icon: Heading1,
        type: 'paragraph-field',
        section: 'layout',
        attributes: {
            text: 'Text here',
        }
    },
    {
        label: 'Separator field',
        icon: Heading1,
        type: 'separator-field',
        section: 'layout',
    },
    {
        label: 'Spacer field',
        icon: Heading1,
        type: 'spacer-field',
        section: 'layout',
        attributes: {
            height: 20,
        }
    },
    {
        label: 'Text field',
        icon: Heading1,
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
        icon: Heading1,
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
        icon: Heading1,
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
        icon: Heading1,
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
        icon: Heading1,
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
        icon: Heading1,
        type: 'checkbox-field',
        section: 'form',
        attributes: {
            label: 'Checkbox field',
            helperText: 'Helper text',
            required: false,
        },
    },
];