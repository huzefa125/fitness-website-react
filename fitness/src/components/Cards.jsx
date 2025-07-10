import React, { useContext } from "react";
import { FaDumbbell } from "react-icons/fa";
import { ClassContext } from "../context/context";

function Cards() {
  const { classes } = useContext(ClassContext);

  return (
    <div className="w-full">
      <div className="mt-20 ml-10">
        <h1 className="text-6xl m-2">Our Classes</h1>
        <p className="text-xx  mt-4 ml-4 font-medium">
          We Offer Varity of classhelp to achive your fitness goal
        </p>
      </div>

      
      <div className="mt-10 ml-10 flex items-center ">
       {classes.map((item)=>(
         <div className="w-100 h-40 bg-zinc-300 gap-40 flex flex-nowrap"> 

          <div className="flex items-center mb-20 ">

            <div>
              <FaDumbbell key={item.id} size={60} color="" className="mt-8 m-4" />
            </div>

            <div className="ml-3 items-center justify-center">
              <h1 className="text-3xl mb-2 font-medium mt-10 text-nowrap">
                {item.title}
              </h1>
              <p className="font-light">
                {item.description}
                </p>{" "}
            </div>

          </div>
        </div>
       ))}
      </div>
    </div>
  );
}

export default Cards;
