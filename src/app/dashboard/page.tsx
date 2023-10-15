import Navbar from '@/components/Navbar'
import Transformation from '@/components/Transformation'
import React from 'react'

const page = () => {
  return (
    <section className='min-h-screen h-screen flex flex-col md:flex-row'>
      <Navbar />
      <Transformation/>
   </section>
  )
}

export default page