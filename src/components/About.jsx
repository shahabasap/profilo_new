import React from 'react'
import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import { motion } from "motion/react";

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>me</span> </h1>
        <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/2 lg:p-8'>
          <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{x:-100,opacity:0}}
          transition={{duration:'0.5'}}
           className='flex items-center justify-center'>
            <img src={aboutImg} alt="about image" /></motion.div></div>
            <div className='w-full lg:w-1/2 lg:p-8'>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{x:100,opacity:0}}
            transition={{duration:'0.5'}}
            className='flex justify-center lg:justify-start'>
              <p className='my-2 max-w-2xl  py-6'>{ABOUT_TEXT}</p>
            </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About
