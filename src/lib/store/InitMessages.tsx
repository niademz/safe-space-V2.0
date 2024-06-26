"use client"
import React, { useEffect, useRef } from 'react'
import { useMessage, Imessage } from './messages';

export default function InitMessages({ messages }:{ messages: Imessage[]}) {
    const initState = useRef(false)
  
    useEffect(()=>{
        if(!initState.current){
            useMessage.setState({messages})
        }

        initState.current = true;
        //eslint-disable-next-line

    },[messages])
  
  
    return <></>;
  
}
