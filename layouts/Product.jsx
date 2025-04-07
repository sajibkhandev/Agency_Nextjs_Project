import Container from '@/components/Container'
import Flex from '@/components/Flex'
import Image from 'next/image'
import React from 'react'
import Banner from '../public/productBanner.png'
import ButtonTwo from '@/components/ButtonTwo'
import SubHeading from '@/components/SubHeading'
import CommonHeading from '@/components/CommonHeading'

export default function Product() {
  return (
   <section>
    <Container>
        <Flex className='items-center justify-between'>
            <div>
              <Image src={Banner} width={500}/>
            </div>
              <Flex className='flex-col gap-y-6 items-start '>
              <ButtonTwo text="For Product Teams"/>
              <SubHeading text="Launch with the best stack"/>
              <CommonHeading className='w-[474px]' text='A centralized platform that integrates zillions of data sources using Big Data ELT (Extract, Load & Transform) that leaves no data behind'/>
              </Flex>
           
        </Flex>
    </Container>
   </section>
  )
}
