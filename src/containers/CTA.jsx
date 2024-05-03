import React from 'react'
import styles from '../style'
import Button from '../components/Button'

const CTA = () => {
  return (
    <div className={`${styles.marginY} ${styles.paddingY} bg-black-gradient rounded-2xl flex items-center justify-between sm:flex-row flex-col`}>
      <div className='px-6 flex-[1.25]'>
        <h1 className='font-poppins sm:text-[46px] text-[36px] font-semibold'>Let’s try our service now!</h1>
        <p className='font-poppins text-sm text-dimWhite'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className='flex-1 flex items-center justify-center'>
        <Button/>
      </div>
    </div>
  )
}

export default CTA