import React from 'react'

function Carding() {
  return (
    <div className=''>
      <div className='flex'>
            <div className='images ml-10 mt-10'>
                <img className='h-75 w-80 rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8rfEi47AvoXxLEC7dYBwXwyRk2HAz8cMq3A&s" alt="" />
            </div>
            <div className='ml-10 mt-10 w-full h-75  mr-10 rounded-md flex'>
                <div className='text-black flex'>
                  <div className=' w-100'>
                        <h1 className="p-4 text-3xl"> About Gym and Fitness</h1>
                        <p className='m-3 text-md '>Fitness is not just about looking good — it’s about feeling strong, staying healthy, and building a better lifestyle. A gym is a dedicated space where individuals can work on their physical health using professional equipment, guided workouts, and structured plans.</p>
                  </div>
                  <div className='p-4  ml-10'>
                    <h1 className='text-3xl'>Why Fitness Metter</h1>
                    <ol>
                      <ul>
                        <li className='mt-6 text-md'>Improves mental health by reducing stress and anxiety</li>
                        <li>Boosts energy levels and improves sleep quality</li>
                        <li>Prevents lifestyle diseases like diabetes, hypertension, and obesity</li>
                        <li>Helps in weight management and fat loss</li>
                      </ul>
                    </ol>
                  </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Carding
