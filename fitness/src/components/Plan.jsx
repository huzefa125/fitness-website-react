import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

function Plan() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get(
          'https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest',
          {
            headers: {
              'X-RapidAPI-Key': 'YOUR_API_KEY_HERE',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            },
          }
        );
        setExercises(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchExercises(); // ✅ Don't forget to call the function
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Chest Exercises</h1>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            <strong>{exercise.name}</strong> - Equipment: {exercise.equipment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Plan;
