import { Imessage } from '@/lib/store/messages'
import React from 'react'
import Image from 'next/image'

export default function Message({message}:{message: Imessage}) {
  return (
    <div className="flex gap-2">
        <div>
            <Image 
                src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatars/${message.profiles?.avatar_url}`}
                alt={message.profiles?.username!}
                width={50}
                height={50}
                className="avatar image rounded-full overflow-hidden"
                />
        </div>  
        <div className="flex-1">
             <div className="flex items-center gap-1">
                <h1 className="font-bold">{message.profiles?.username}</h1>
                <h1 className="text-sm text-gray-400">{new Date(message.created_at).toDateString()}</h1>
            </div>
            <p className="text-gray-300">{message.text} </p>
        </div>
        </div>
  )
}