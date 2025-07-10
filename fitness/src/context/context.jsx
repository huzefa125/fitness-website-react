
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
    // you can add Yoga, Cardio, HIIT here too
  ]);

  return (
    <ClassContext.Provider value={{ classes }}>
      {children}
    </ClassContext.Provider>
  );
};
