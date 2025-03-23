import React from 'react'
import { Metrophobic } from 'next/font/google'
const metrophobic = Metrophobic({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
  })


export default function Button({className,text}) {
  return (
    <button className={`bg-transparent py-3 px-6 rounded-[23px] text-sm text-primary bold-semibold ${metrophobic.className} border border-primary hover:bg-primary hover:text-white duration-300 ${className}`}>{text}</button>
  )
}
