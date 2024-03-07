import { WSMessageStore, WSMessageStoreState } from 'interfaces/ws';
import { create } from 'zustand'

const initialState :WSMessageStoreState = {
    pool: []
};

export const useWSMessages = create<WSMessageStore>((set) => ({
    ...initialState,
    save: (newMessage) => set((state) => {
        const pool = [newMessage, ...state.pool];
        return { pool };
    }),
    reset: () => set(initialState),
}));