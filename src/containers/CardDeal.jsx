import React from 'react'
import styles from '../style'
import { card } from '../assets'
import Button from '../components/Button'

const CardDeal = () => {
  return (
    <div className={`${styles.paddingY} ${styles.marginY} flex sm:flex-row flex-col items-center justify-center`} id='product'>
      <div className='flex-[0.75] sm:mt-0 mt-20'>
        <h1 className='font-poppins font-semibold sm:text-[42px] text-[35px] mb-6'>Find a better card deal in few easy steps.</h1>
        <p className='font-poppins text-sm text-dimWhite'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <Button/>
      </div>
      <div className='flex-1 sm:ml-4'>
        <img src={card} alt="card" />
      </div>
    </div>
  )
}

export default CardDeal