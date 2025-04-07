import React from 'react'
import { Metrophobic } from 'next/font/google'
import { IoIosArrowDown } from "react-icons/io";

const metrophobic = Metrophobic({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
  })


export default function List({text,className,type}) {
 
  return (
     <li className={`text-sm text-black font-semibold cursor-pointer
 ${metrophobic.className} ${className}`}>{text} {type &&  <IoIosArrowDown className='inline-block ml-1'/>}
</li>
  )
}
