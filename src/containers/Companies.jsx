import React from 'react'
import styles from '../style'
import { companies } from '../constants'

const Companies = () => {
  return (
    <div className={`${styles.marginY} ${styles.paddingY} flex items-center flex-wrap justify-center` }>
      {companies.map((item, index)=>(
        <div className='flex items-center justify-center'>
          <div className='p-4 h-full w-full'>
            <img src={item.logo} alt="logo" width={200} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Companies