import Image from 'next/image';
import React from 'react'
import logo from "public/Sigflow.svg"
const Navbar = () => {
    return (
      <nav className="bg-[#fafafa66] w-[30%]">
        <div>
          <Image src={logo} alt="" />
        </div>
        <main>
          <div className='bg-[#f2f2f2] '>
            <h3>Sigflow</h3>
            <Image src={} alt=''/>
                </div>
                <div>
                    
                </div>
        </main>
      </nav>
    );
}

export default Navbar