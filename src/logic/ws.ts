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

// TODO: - On WS Connected
export const useWSMessages = create<WSMessageStore>((set) => ({
    ...initialState,
    save: (newMessage) => set((state) => {
        const pool = [newMessage, ...state.pool];
        return { pool };
    }),
    reset: () => set({ pool: [] }),
}));