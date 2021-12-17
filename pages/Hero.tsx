import React from 'react'
import Image from 'next/image'
import heroImage from '../public/images/homepage/hero-bg-mobile.jpg'

const Hero = () => {
    return (
        <div className='relative z-1 h-full text-white text-center m-auto'>
            <Image className='z-0 w-full' src={heroImage} alt='hero background' />
            <div 
            className='absolute flex flex-col justify-between items-center bg-black 
                top-[14.50rem] w-full h-[22.75rem] px-[24px]'>
                <h2 className='text-4xl'>dine</h2>
                <h1 className='text-4xl'>Exquisite dining since 1989</h1>
                <p className='text-sm leading-6'> Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                <button className='text-sm h-[4rem] w-[15.32rem] leading-6 border'>BOOK A TABLE</button>
            </div>
        </div>
    )
}

export default Hero