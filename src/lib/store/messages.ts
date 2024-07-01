import { User } from '@supabase/supabase-js';
import { create } from 'zustand';


export type Imessage = {
    created_at: string;
    id: string;
    is_edit: boolean;
    send_by: string;
    text: string;
    profiles: {
        avatar_url: string | null;
        full_name: string | null;
        id: string;
        updated_at: string | null;
        username: string | null;
        website: string | null;
    } | null;
}



interface MessageState {
  messages: Imessage[];
  optimisticIds:String[],
  setOptimisticIds: (id: string) => void;
  addMessage: (message: Imessage) => void;
}

export const useMessage = create<MessageState>()((set) => ({
  messages: [],
  optimisticIds: [],
  setOptimisticIds: (id: string) =>
		set((state) => ({ optimisticIds: [...state.optimisticIds, id] })),
  addMessage: (newMessages)=>
    set((state)=>({
      messages:[...state.messages, newMessages],
     })),
}));