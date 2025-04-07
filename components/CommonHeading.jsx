import { Poppins } from 'next/font/google'
import React from 'react'
const poppins = Poppins({
    weight: ['400','500','600','700'],
    subsets: ['latin'],
    display: 'swap',
  })

export default function CommonHeading({text,className}) {
  return (
    <p className={`text-base text-four font-medium ${poppins.className} ${className}`}>{text}</p>
  )
}
