import ChatHeader from '@/components/ChatHeader'
import InitUser from '@/lib/store/InitUser'
import React from 'react'
import { supabaseServer } from '../../../utils/supabase/server'
import ChatInput from '@/components/ChatInput'
import ListMessages from '@/components/ListMessages'
import ChatMessages from '@/components/ChatMessages'
import ChatAbout from '@/components/ChatAbout'

export default async function page() {
const supabase = supabaseServer()
const { data } = await supabase.auth.getSession();

  return (
    <>
    <div className="max-w-3xl mx-auto md:py-10 h-screen">
        <div className="h-full border rounded-md flex flex-col">
        <ChatHeader/>
        {data.session?.user ? (
						<>
							<div className="flex-1 flex flex-col p-5 h-full overflow-y-auto">
                <ChatMessages/>
              </div>
							<ChatInput />
						</>
					) : (
						<ChatAbout />
					)}
           
        </div>
        
    </div>
    <InitUser user={data.session?.user}/>
    </>
    
  )
}
