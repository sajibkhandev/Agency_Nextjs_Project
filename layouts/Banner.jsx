import Container from '@/components/Container'
import Flex from '@/components/Flex'
import Image from 'next/image'
import React from 'react'
import BannerImage from '../public/banner.png'
import ButtonTwo from '@/components/ButtonTwo'
import { Poppins } from 'next/font/google'
import Button from '@/components/Button'
const poppins = Poppins({
    weight: ['400','500','600','700'],
    subsets: ['latin'],
    display: 'swap',
  })



export default function Banner() {
  return (
    <section className={`bg-[url(../public/mainbanner.png)] bg-no-repeat bg-center bg-cover`}>
        <Container>
            <Flex className='py-[168px]'>
                <div className='w-1/2'>
                <ButtonTwo text="v3.1 released. Learn more"/>
                <h1 className={`w-[485px] leading-[56px] text-5xl text-black font-bold py-6 ${poppins.className}`}>Your data with real-time analytics</h1>
                <p className={`w-[490px] text-base text-[#00000080] font-normal ${poppins.className}`}>Harness the potential of Big Data Analytics & Cloud Services and become a data-driven organization with Needle tail</p>

                <div className='py-6 flex gap-x-4'>
                  <Button text='Start free trial'/>
                  <Button text='Learn more'/>
                </div>
                
                </div>
                <div className='w-1/2'>
                <Image src={BannerImage} alt='Banner Image'/>
                </div>

            </Flex>
        </Container>
    </section>
  )
}
