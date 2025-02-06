
import React from 'react'
import { LoaderCircle } from 'lucide-react';
import { TbLoader3 } from "react-icons/tb";
export const Loader = ({info}:{info:{height:string,size:number}}) => {
    const {height, size} = info;
    // console.log("loader", height, size)
  return (
    <div className={`flex justify-center items-center ${height} `}>
        <TbLoader3 className='animate-spin' size={size} />
    </div>
  )
}



export const MiniLoader = () => {
  return (
    <div className='flex justify-center items-center'>
        <LoaderCircle className='animate-spin text-white' size={20}/>
    </div>
  )
}
