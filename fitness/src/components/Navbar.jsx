import React from 'react'
import logo from '../assets/Flux_Dev_A_modern_and_dynamic_logo_for_a_fitness_website_The_d_3.jpg'
import { Link } from 'react-router-dom';

function Navbar() {
return (
    <div>
        <div className=' p-7'>
            <nav className='w-full h-20 items-center flex  rounded-2xl bg-white' >
                <div className='flex items-center'>
                    <img className='w-18 m-20' src={logo} alt="Logo" />
                    <div className='flex space-x-8 ml-60 font-[sans-serif]'>
                        <Link to='/' className='hover:text-amber-600 font-bold'>Home</Link>
                        <Link to='/plan' className='hover:text-amber-600 font-bold'>Plan</Link>
                        <Link to='/subscription' className='hover:text-amber-600 font-bold'>Subscription</Link>
                        <Link to='/about' className='hover:text-amber-600 font-bold'>About us</Link>
                        <Link to='/contact' className='hover:text-amber-600 font-bold'>Contact</Link>
                    </div>
                    <div className='button ml-70'>
                        <button  className=' rounded-md p-2 text-white' style={{ backgroundColor: '#22333b' }}>Get Started</button>
                    </div>
                </div>
            </nav>
        </div>
    </div>
)
}

export default Navbar
