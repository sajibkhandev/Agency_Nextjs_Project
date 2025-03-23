import React from 'react'
import { Metrophobic } from 'next/font/google'
const metrophobic = Metrophobic({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
  })

export default function ButtonTwo({text,className}) {
  return (
    <button className={`bg-secondary py-2 px-4 rounded-[20px] text-primary text-sm font-bold ${className} ${metrophobic.className}`}>{text}</button>
  )
}
