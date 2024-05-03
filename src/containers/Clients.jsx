import React from 'react'
import Client from '../components/Client'
import { feedback } from '../constants'
import styles from '../style' 


const Clients = () => {
  return (
    <div className={`${styles.paddingY} relative z-[5]`} id='clients'>
      <div className='flex sm:flex-row flex-col items-center mb-4 sm:mt-10 mt-20'>
        <h1 className='font-poppins sm:text-[48px] text-[32px] max-w-[560px] font-semibold sm:mb-2 mb-8'>What people are saying about us</h1>
        <p className='font-poppins text-md text-dimWhite'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className='flex justify-between items-start feedback-container flex-wrap'>
        {feedback.map((item, index)=>(
          <Client image={item.img} content={item.content} name={item.name} title={item.title} />
        ))}
      </div>
      <div className="absolute z-[0] w-[10%] h-[5%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[10%] h-[10%] bottom-40 rounded-full white__gradient" />
      <div className="absolute z-[0] w-[100%] h-[40%] right-20 bottom-20 blue__gradient" />

    </div>
  )
}

export default Clients