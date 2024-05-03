import React from 'react'
import {google,apple, bill} from '../assets'
import styles from '../style'

const Billing = () => {
  return (
    <div className={`${styles.paddingY} ${styles.marginY} flex sm:flex-row flex-col-reverse items-start justify-start `} >
      <div className='sm:my-0 my-10 flex flex-1 relative z-[5]' id='features'>
        <img src={bill} alt="bill" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[70%] h-[100%] bottom-40 rounded-full white__gradient" />
        <div className="absolute z-[0] w-[100%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className='space-y-6 flex flex-col items-start flex-[0.75]'>
        <h1 className='font-poppins font-semibold sm:text-[40px] text-[34px] mt-20'>Easily control your billing & invoicing.</h1>
        <p className='font-poppins text-sm text-dimWhite'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className='flex space-x-6 items-end justify-start'>
          <div>
            <img src={google} alt="google" />
          </div>
          <div>
            <img src={apple} alt="apple" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billing
