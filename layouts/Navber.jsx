import React from 'react'
import Container from '@/components/Container'
import Flex from '@/components/Flex'
import Image from 'next/image'
import Logo from '../public/logo.png'
import List from '@/components/List'
import Button from '@/components/Button'
export default function Navber() {
  return (
    <nav className='py-5'>
        <Container>
            <Flex className='justify-between'>
                <div>
                <Image
                    src={Logo}
                    alt="Picture of the author"
                    />
                </div>
                <Flex className='items-center '>
                    <ul className='flex gap-x-10'>
                       <List text="About"/>
                       <List text="Pricing"/>
                       <List text="Contact Us"/>
                       <List text="Login"/>
                       
                    </ul>
                        <Button text='Start free trial' className='ml-10'/>
                </Flex>
            </Flex>
        </Container>
    </nav>
  )
}
