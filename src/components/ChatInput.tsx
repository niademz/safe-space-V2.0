"use client";
import React from 'react'
import { Input } from './ui/input'
import { supabaseClient } from '../../utils/supabase/client';
import { toast } from 'sonner';
import{ v4 as uuidv4 } from "uuid";
import { useUser } from '@/lib/store/user';
import { Imessage, useMessage } from '@/lib/store/messages';

export default function ChatInput() {
    const user = useUser((state)=>state.user);
    const addMessage = useMessage((state)=>state.addMessage);
    const supabase = supabaseClient();
    const handleSendMessage = async (text:string) =>{
        const newMessage = {
            created_at: new Date().toISOString(),
            id: uuidv4(),
            text,
            send_by: user?.id,
            is_edit: false,
            
            profiles:{
                id: user?.id,
                avatar_url: user?.user_metadata.avatar_url,
                created_at: new Date().toISOString(),
                full_name: user?.user_metadata.full_name,
                updated_at: user?.user_metadata.updated_at,
                username: user?.user_metadata.username, 
                website: user?.user_metadata.website,
            },

        };

        addMessage(newMessage as Imessage);

        const { error } = await supabase.from("messages").insert({text})
        if(error) {
            toast.error(error.message);
        }
    }
  return (
    <div className="p-5">
            <Input placeholder="send-message" className="bg-gray-300" onKeyDown={(e)=>{
                if(e.key === "Enter") {
                    handleSendMessage(e.currentTarget.value);
                    e.currentTarget.value =""
                }
            }}/>
           </div>
  )
}
