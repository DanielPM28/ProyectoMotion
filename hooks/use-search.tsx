import {create} from "zustand";

type SearchStore = {
    isOpen: boolean;
    OnOpen: () => void;
    onClose: () => void;
    toogle: () => void;
};

export const useSearch = create<SearchStore>((set, get)=>({
    isOpen: false,
    OnOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
    toogle: () => set({isOpen: !get().isOpen}),
}));

