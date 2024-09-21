import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 w-full flex-col  max-sm:w-full '>
        <img src={imgURL} alt={name} className='w-[280px] h-[280px]  md:gap-5'/>
        <div className='mt-8 justify-start gap-2.5 flex'>
            <img src={star} alt='rating' width={24} height={24}/>
            <p className='font-montserrat  text-xl leading-normal text-slate-gray'>(4.5)</p>

        </div>
        <h3 className=' mt-2 font-palanquin font-semibold leading-normal  text-2xl'>{name}</h3>
        <p className='mt-2 font-semibold font-montserrat text-coral-red text-2lx leading-normal'>{price}</p>
      
    </div>
  )
}

export default PopularProductCard
