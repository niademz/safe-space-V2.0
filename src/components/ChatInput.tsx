"use client";
import React, { useState } from 'react'
import { Input } from './ui/input'
import { supabaseClient } from '../../utils/supabase/client';
import { toast } from 'sonner';
import{ v4 as uuidv4 } from "uuid";
import { useUser } from '@/lib/store/user';
import { Imessage, useMessage } from '@/lib/store/messages';

export default function ChatInput() {
    const user = useUser((state)=>state.user);
    const addMessage = useMessage((state)=>state.addMessage);
    const setOptimisticIds = useMessage((state) => state.setOptimisticIds);
    const supabase = supabaseClient();
    const [loading, setLoading] = useState(true)
    const handleSendMessage = async (text:string) =>{
        if (!user) {
            setLoading(false)
            return
          }
      
          try {
            setLoading(true)
      
            const { data } = await supabase
              .from('profiles')
              .select(`full_name, username, website, avatar_url`)
              .eq('id', user.id)
              .single()

              if (text.trim()) {
                const newMessage = {
                    created_at: new Date().toISOString(),
                    id: uuidv4(),
                    text,
                    send_by: user?.id,
                    is_edit: false,
                    
                    profiles:{
                        id: user?.id,
                        avatar_url: data?.avatar_url,
                        created_at: new Date().toISOString(),
                        full_name: user?.user_metadata.full_name,
                        updated_at: user?.updated_at,
                        username: data?.username, 
                        website: user?.user_metadata.website,
                    },
    
                };
               // addMessage(newMessage as Imessage);
                setOptimisticIds(newMessage.id);
                console.log('newid', setOptimisticIds)

                const { error } = await supabase.from("messages").insert({text})
                if(error) {
                    toast.error(error.message);
                }
            } else {
                toast.error("Message cannot be empty")
            }
            } finally {
                setLoading(false)
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
