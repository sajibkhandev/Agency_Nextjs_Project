import Container from '@/components/Container'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Profile from '../public/profile.png'
import Tonkean from '../public/Tonkean.png'
import BigSpring from '../public/BigSpring.png'
import Clearbit from '../public/Clearbit.png'
import Mine from '../public/Mine.png'
import Shake from '../public/Shake.png'
import React from 'react'
import Flex from '@/components/Flex'
const poppins = Poppins({
    weight: ['400','500','600','700'],
    subsets: ['latin'],
    display: 'swap',
  })


export default function About() {
  return (
    <section className={`bg-[url(../public/about.png)] bg-no-repeat bg-center bg-cover`}>
        <Container>
           <div className='py-[300px]'>
            <h6 className={`w-[964px] mx-auto text-2xl text-third font-meduim ${poppins.className} text-center `}>"What I love about Qubly is the easy way we can collaborate even if there is a lot of people involved in the process"</h6>
            <div className='w-[80px] h-[80px] rounded-full mx-auto my-8'>
              <Image src={Profile}/>
            </div>
            <h4 className={`w-[160px] mx-auto text-base text-block ${poppins.className} font-bold`}>Guillaume Cabane CTO @ BigSpring</h4>
            <Flex className='justify-between pt-14'>
              <Image src={Tonkean}/>
              <Image src={BigSpring}/>
              <Image src={Clearbit}/>
              <Image src={Mine}/>
              <Image src={Shake}/>
            </Flex>
           </div>
        </Container>


    </section>
  )
}
