import React, { useContext } from "react";
import { FaDumbbell } from "react-icons/fa";
import { ClassContext } from "../context/context";

function Cards() {
  const { classes } = useContext(ClassContext);

  return (
    <div className="w-full">
      <div className="mt-20 ml-10">
        <h1 className="text-6xl m-2">Our Classes</h1>
        <p className="text-xl mt-4 ml-4 font-medium">
          We offer a variety of classes to help achieve your fitness goals
        </p>
      </div>

      <div className="mt-10 ml-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pr-10">
        {classes.map((item) => (
          <div
            key={item.id}
            className="bg-zinc-100 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            <div className="flex items-start">
              <div className="mr-4 mt-1 text-blue-500">
                {item.icon || <FaDumbbell size={40} />} {/* Fallback icon */}
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
