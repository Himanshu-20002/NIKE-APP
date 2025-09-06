import React from 'react'
import {services} from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
 <section className='flex   gap-9 flex-wrap max-container justify-center'>
  {services.map((item)=>(<ServiceCard key={item.label}{...item}/>))}
  </section>
  )
}

export default Services
