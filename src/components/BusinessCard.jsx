import React from 'react'


const BusinessCard = ({image,title, text}) => {
  return (
    <div className=' rounded-2xl p-4 flex items-start cursor-pointer feature-card bg-black-gradient transition-all'>
      <div>
        <button className='bg-primary p-4 rounded-full object-cover mt-1 ' type="button">
          <img src={image} alt="star" className=' h-[50%] min-w-4' />
        </button>
      </div>
      <div className='ml-6 flex flex-col items-start'>
        <h4 className='font-poppins font-semibold'>{title}</h4>
        <p className='font-poppins text-sm text-dimWhite'>{text}</p>
      </div>
    </div>
  )
}

export default BusinessCard