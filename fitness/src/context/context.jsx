
import React, { createContext, useState } from "react";

export const ClassContext = createContext();

export const ClassProvider = ({ children }) => {
  const [classes, setClasses] = useState([
    {
      id: 1,
      title: "Strength Training",
      description: "Build muscle and increase your strength with our weight training classes.",
      icon: "", // or import an SVG or icon component
    },
    {
        id:2,
        title : "Yoga",
        description:"Doing yoga is benficial for health and give peace state of mind and after.",
        icon:"",
    },
    {
        id:3,
        title:"Cardio",
        description :"Doing Cardio is best for muscle excercide and after cardio body colld be more flexible.",
        icon:"",
    },
    {
        id:4,
        title:"HIIT",
        description :"Doing Cardio is best for muscle excercide and after cardio body colld be more flexible.",
        icon:"",
    },
    {
        id:5,
        title:"Live classes",
        description:"In Live Classes you will provided i to do yoga and after taht you will get certificate for it",
        icon:"",
    },
    {
        id:"6",
        title:"Nutrition guide",
        description:"In this you will provideed your nutititional value and what to eat and how much to eat and very affordable price"
    }
    // you can add Yoga, Cardio, HIIT here too
  ]);

  return (
    <ClassContext.Provider value={{ classes }}>
      {children}
    </ClassContext.Provider>
  );
};



