import { create } from 'zustand';
import { FormElement, NewFormElement, ActiveElementId } from '../types/builder-types';
import { nanoid } from 'nanoid';

type BuilderStore = {
    formElements: FormElement[];
    addFormElement: (formElement: NewFormElement, index?: number) => void;
    deleteFormElement: (id: string) => void;
    activeElementId: ActiveElementId;
    setActiveElementId: (value: string|null) => void;
    moveElements: (index: number, id: string) => void;
}

export const useBuilderStore = create<BuilderStore>((set) => ({
    formElements: [],
    activeElementId: null,

    addFormElement: (formElement: NewFormElement, index?: number) => {
        const id = nanoid();
        if (index === undefined) {
            return set(({ formElements }) => ({ 
                formElements: [...formElements, { ...formElement, id }] 
            }));
        }

        set(({ formElements }) => {
            const newElements = [...formElements];
            newElements.splice(index, 0, { ...formElement, id });
            return { 
                formElements: newElements.map((element, index) => ({ ...element, indexPosition: index })) 
            };
        });
    },

    deleteFormElement: (id: string) => {
        set(({ formElements }) => {
            const newElements = formElements.filter((element) => element.id !== id);
            return { 
                formElements: newElements.map((element, index) => ({ ...element, indexPosition: index })) 
            };
        });
    },

    moveElements: (index: number, id: string) => {
        set(({ formElements }) => {
            const newElements = [...formElements];
            const replaceElement = newElements.find((element) => element.id === id);
            if (!replaceElement) return { formElements: newElements };
            const filteredElements = newElements.filter((elements) => elements.id !== id);
            filteredElements.splice(index, 0, replaceElement);
            return { formElements: filteredElements.map((element, index) => ({ ...element, indexPosition: index })) };
        });
    },

    setActiveElementId: (value: string|null) => {
        set(() => ({ activeElementId: value }));
    },
}));