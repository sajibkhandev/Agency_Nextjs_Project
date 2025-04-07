import Container from '@/components/Container'
import Image from 'next/image'
import React from 'react'
import TeamsImage from '../public/teamBanner.png'
import ButtonTwo from '@/components/ButtonTwo'
import SubHeading from '@/components/SubHeading'
import Flex from '@/components/Flex'
import CommonHeading from '@/components/CommonHeading'

export default function Teams() {
  return (
    <section className='pt-[120px] pb-[22px]'>
        <Container>
            <Flex>
                <Flex className='flex-col gap-y-6 items-start'>
                    <ButtonTwo text='For Engineering Teams'/>
                    <SubHeading text='Data-driven pipelines in minutes'/>
                    <CommonHeading className='w-[500px]' text='Maintenance-free data pipelines with quick set-up and straight-forward deployments that are powered by a modern & scalable platform.'/>
                </Flex>
                <div>
                    <Image src={TeamsImage}/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}
