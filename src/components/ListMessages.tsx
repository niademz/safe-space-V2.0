"use client"
import { Imessage, useMessage } from '@/lib/store/messages'
import React, { useEffect } from 'react'
import Message from './Message'
import { supabaseClient } from '../../utils/supabase/client'
import { toast } from 'sonner'

export default function ListMessages() {
    const {messages, addMessage, optimisticIds} = useMessage((state)=>state);
    
    const supabase  = supabaseClient()
  useEffect(()=>{
    const channel = supabase
      .channel('chat-room')
      .on(
        'postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'messages' },
        async (payload) => {
          if(!optimisticIds.includes(payload.new.id)) {
            console.log('opid 1', optimisticIds)
            console.log('payload', payload.new)
            const {error,data} = await supabase
              .from("profiles")
              .select("*")
              .eq("id",payload.new.send_by)
              .single();
            if(error){
              toast.error(error.message);
            }else{
              const newMessage = {
                ...payload.new,
                profiles: data,
              }
              console.log('opid 2', optimisticIds)
              addMessage(newMessage as unknown as Imessage)
              console.log('opid 3', optimisticIds)
            }
          }
        }

      )
        .subscribe()
    return () => {
      channel.unsubscribe()
    }
  }, [addMessage, messages, optimisticIds, supabase])
  
  return (
    <div className="flex-1 flex flex-col p-5 h-full overflow-y-auto">
            <div className="flex-1"></div>
            <div className="space-y-7">
              {messages.map(
                (value,index) => {
                return ( 
                 <Message key={index} message={value}/>
              )
              })}
              
            </div>

           </div>
  )
}
