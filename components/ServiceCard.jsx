import React from 'react'
import CommonHeading from './CommonHeading'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Flex from './Flex'
const poppins = Poppins({
    weight: ['400','500','600','700'],
    subsets: ['latin'],
    display: 'swap',
  })

export default function ServiceCard({src,title,text,alt}) {
  return (
    <Flex className='w-[320px] items-center text-center flex-col gap-y-4'>
        <Image src={src} alt={alt}/>
        <h3 className={`text-base text-third font-bold ${poppins.className}`}>{title}</h3>
        <CommonHeading text={text}/>

    </Flex>
  )
}
