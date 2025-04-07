import { Poppins } from 'next/font/google'
import React from 'react'
const poppins = Poppins({
    weight: ['400','500','600','700'],
    subsets: ['latin'],
    display: 'swap',
  })


export default function SubHeading({text,className}) {
  return (
    <h2 className={`text-[32px] text-third font-bold ${poppins.className} ${className}`}>{text}</h2>
  )
}
