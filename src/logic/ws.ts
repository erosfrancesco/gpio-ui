import { create } from 'zustand'

//
interface WSMessageStoreState {
    pool: string[];
}
interface WSMessageStore extends WSMessageStoreState {
    save: (newMessage :string) => void;
    reset: () => void;
}
//

const initialState :WSMessageStoreState = {
    pool: []
};

export const useWSMessages = create<WSMessageStore>((set) => ({
    ...initialState,
    save: (newMessage) => set((state) => {
        const pool = [...state.pool, newMessage];
        return { pool };
    }),
    reset: () => set({ pool: [] }),
}));