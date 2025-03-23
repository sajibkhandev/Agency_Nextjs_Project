import React from 'react'
import { Metrophobic } from 'next/font/google'
const metrophobic = Metrophobic({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
  })


export default function List({text,className}) {
  return (
     <li className={`text-sm text-black font-semibold ${metrophobic.className} ${className}`}>{text}</li>
  )
}
