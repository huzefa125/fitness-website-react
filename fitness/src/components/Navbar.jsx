import React from 'react'
import logo from '../assets/Flux_Dev_A_highenergy_modern_fitness_poster_with_a_bold_and_cl_1.jpg'
import { Link } from 'react-router-dom';

function Navbar() {
return (
    <div>
        <div className=' p-7'>
            <nav className='w-full h-10 items-center flex  rounded-2xl flex-col' style={{backgroundColor:"fafaf7"}}>
                <div className='flex items-center ml-15 '>
                    <h1 className='font-bold text-4xl'>Fitness</h1>
                    <div className='flex space-x-8 ml-60 font-semibold font-[sans-serif]'>
                        <Link to='/' className=' '>Home</Link>
                        <Link to='/plan' className=' '>Plan</Link>
                        <Link to='/subscription' className=' '>Subscription</Link>
                        <Link to='/about' className=''>About us</Link>
                        <Link to='/contact' className=''>Contact</Link>
                    </div>
                    <div className='button ml-75'>
                        <button  className=' rounded-xl p-2 h-10 w-30  text-white bg-blue-600 font-medium font-[sans]' style={{backgroundColor:"#282a28"}} >Sign in</button>
                    </div>
                </div>
            </nav>
        </div>
    </div>
)
}

export default Navbar
