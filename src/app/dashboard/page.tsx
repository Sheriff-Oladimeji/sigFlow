import Navbar from '@/components/Navbar'
import Transformation from '@/components/Transformation'
import React from 'react'

const page = () => {
  return (
    <section className='flex'>
      <Navbar />
      <Transformation/>
    </section>
  )
}

export default page