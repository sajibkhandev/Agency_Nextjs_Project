import React from 'react'
import { Metrophobic } from 'next/font/google'
import Image from 'next/image';
const metrophobic = Metrophobic({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
  })

export default function ButtonTwo({text,className,icon,iconDesign}) {
  console.log(iconDesign);
  
  return (
    <button className={`bg-secondary py-2 px-4 rounded-[20px] text-primary text-sm font-bold flex items-center gap-x-3 ${className} ${metrophobic.className}`}>
      <Image src={icon} width={iconDesign?iconDesign:12}/>

      {text}</button>
  )
}
