import React, { Suspense } from 'react'
import ListMessages from './ListMessages'
import { supabaseServer } from '../../utils/supabase/server'
import InitMessages from '@/lib/store/InitMessages'

export default async function ChatMessages() {
    const supabase = supabaseServer();

    const {data} = await supabase.from("messages").select("*,profiles(*)")

  //  console.log(data);

  return (
    <Suspense fallback={"loading..."}>
        <ListMessages/>
        <InitMessages messages={data || []}/>
    </Suspense>
  )
}
