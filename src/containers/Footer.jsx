import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
  <>
    <section className={` ${styles.marginY}  ${styles.paddingX} flex sm:flex-row flex-col`}>
      <div className='flex-[0.75] max-w-[300px] '>
        <img src={logo} alt="logo" width={180} height={72} />
        <p className='font-poppins text-[18px]leading-[32px] text-dimWhite max-w-[300px] mt-6 mb-6'>A new way to make the payments easy, reliable and secure.</p>
      </div>
      <div className='flex flex-[0.75] justify-between w-full flex-wrap sm:flex-row flex-col'>
        {footerLinks.map((items, index)=>(
          <div className='mb-6 sm:px-4 px-0'>
            <h2 className='font-poppins font-semibold text-gradient text-lg'>{items.title}</h2>
            <ul>
              {items.links.map((item, index)=>(
                <li className='text-dimWhite text-sm my-[4px] cursor-pointer'>{item.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    <div className={`${styles.paddingX} border-t-[2px] border-slate-700 flex sm:flex-row flex-col sm:space-y-0 space-y-4 justify-between py-4`}>
      <p className='font-poppins text-gradient font-semibold'>2021 HooBank. All Rights Reserved.</p>
      <div className='flex justify-between sm:space-x-10 space-x-0'>
        {socialMedia.map((item)=>(
          <a href={item.link}>
            <img src={item.icon} alt="icon" className='cursor-pointer ' />
          </a>
        ))}
      </div>
    </div>
  </>
  )
}

export default Footer