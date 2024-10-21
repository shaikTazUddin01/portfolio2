'use client'

import { useEffect, useState } from "react"

const Debounce=<T>( value:T,delay=500)=>{
 const [debounceValue,setDebounceValue]=useState<T>(value)

 useEffect(()=>{
    const timer=setTimeout(()=>{
        setDebounceValue(value)
    },delay)

    return()=>{
        clearTimeout(timer)
    }
 },[value,delay])

 return debounceValue
}

export default Debounce