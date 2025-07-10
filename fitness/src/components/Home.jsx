import React from 'react'
import Navbar from './Navbar'
import Poster from './Poster'
import Cards from './Cards'
import { ClassProvider } from '../context/context'


function Home() {
  return (
    <ClassProvider>
    <div className='h-full w-full'>
      
      <Navbar />
     <Poster></Poster>
     <Cards></Cards>
    </div>
      </ClassProvider>
  )
}

export default Home
