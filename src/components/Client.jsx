import React from 'react'
import { quotes } from '../assets' 

const Client = ({image, name, title, content}) => {
  return (
    <div className='py-6 px-8 rounded-xl sm:feature-card bg-black-gradient max-w-[270px] min-h-[395px] max-h-[395px] flex flex-col justify-between overflow-hidden sm:my-4 my-4 '>
      <div className=''>
        <img src={quotes} alt="quotes" width={30} className='mb-10'/>
        <h3 className='font-poppins text-[18px] align-text-top max-h-56 overflow-hidden'>
          {content}
        </h3>
      </div>
      <div className='flex  items-center space-x-4'>
        <div>
          <img src={image} width={50} alt="image" />
        </div>
        <div className='flex flex-col items-start'>
          <h4 className='font-poppins'>{name}</h4>
          <p className='font-poppins text-sm text-dimWhite'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Client