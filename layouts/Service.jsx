import ButtonTwo from '@/components/ButtonTwo'
import Container from '@/components/Container'
import React from 'react'
import Icon from '../public/serviceButtonIcon.png'
import SubHeading from '@/components/SubHeading'
import CommonHeading from '@/components/CommonHeading'
import Flex from '@/components/Flex'
import ServiceCard from '@/components/ServiceCard'
import ImageCartOne from '../public/serviceCardOne.png'
import ImageCartTwo from '../public/serviceCardTwo.png'
import ImageCartThree from '../public/serviceCartThree.png'

export default function Service() {
  return (
    <section className='py-[120px]'>
        <Container>
            <Flex className='flex-col items-center gap-y-6'>
            <ButtonTwo  icon={Icon} iconDesign='20' text='Why Qubly'/>
            <SubHeading text='Get actionable insights from Big Data in 3 steps'/>
            <CommonHeading className='w-[672px] text-center' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'/>
            </Flex>
            <Flex className='justify-between pt-6'>
              <ServiceCard src={ImageCartOne} alt="card" title="Valuable business insights" text="Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights."/>
              <ServiceCard src={ImageCartThree} alt="card" title="Powerful Algorithms" text="With the help of powerful algorithms, quality rules & techniques, obtain simplified & enriched data."/>
              <ServiceCard src={ImageCartTwo} alt="card" title="Data in real-time" text="Collect data in real-time from multiple channels and move it into a data lake, in its original format."/>
            </Flex>
        </Container>
    </section>
  )
}
