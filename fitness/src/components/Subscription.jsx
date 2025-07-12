import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

function Subscrition() {
    // const [exercises, setExercises] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(()=>{
    //   const fetchExercises = async () => {
    //     try {
    //       const response = await axios.get(
    //         'https://api.api-ninjas.com/v1/exercises?muscle=biceps',
    //         {
    //            headers: {
    //              'X-Api-Key': 'TbigC7vqoyRPlhB9pT9eVg==B5nA13Qp0TTO2z8T' 
    //          }
    //         }
    //       );
    //       setExercises(response.data[100]);
    //       setLoading(false);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    //   fetchExercises();
    // },[])

      const [exercises,setExercises] = useState([]);
      const [loading,setLoading] = useState();

      useEffect(()=>{
        const fetchExercises = async () => {
          try {
            const response = await axios.get(
              'https://api.api-ninjas.com/v1/exercises?muscle=biceps',
              {
                 headers: {
                  'X-Api-Key': 'TbigC7vqoyRPlhB9pT9eVg==B5nA13Qp0TTO2z8T' 
              }
              }
            );
            setExercises(response.data);
            
          } catch (error) {
            console.log(error);
            setLoading(true)
          }
        }
        fetchExercises()
      },[])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-gray-800">💪 Biceps Exercise Plans</h1>
        <p className="text-gray-600 mt-2">Fetched from API Ninjas</p>
      </div>

      {loading ? (
        <p className="text-center mt-10">Loading exercises...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10 px-4">
          {exercises.map((exercise, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-5 hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold text-gray-800 capitalize">{exercise.name}</h2>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Type:</strong> {exercise.type}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Equipment:</strong> {exercise.equipment}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Difficulty:</strong> {exercise.difficulty}
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>Instructions:</strong> {exercise.instructions}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Subscrition;
