import React, { useState, useEffect } from "react";
import { FaCat, FaEthereum } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { RiRobot2Line } from "react-icons/ri";

const Circles = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.2) % 360);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const circleRadii = [90, 70, 50, 30, 15]; // vh values divided by 2
  //   const circleColors = ["#ff6b6b", "#48dbfb", "#1dd1a1", "#feca57"];
  const svgsIcons = [FaCat, FaEthereum, FaPerson, GiTeacher, RiRobot2Line];

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
      {circleRadii.map((radius, i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[1.5px] border-dashed border-zinc-700 rounded-full"
          style={{ width: `${radius * 2}vh`, height: `${radius * 2}vh` }}
        ></div>
      ))}

      {circleRadii.map((radius, i) => {
        // Calculate position on the circular path
        const angle = (rotation + i * 90) % 360;
        const radians = (angle * Math.PI) / 180;
        const x = Math.cos(radians) * radius;
        const y = Math.sin(radians) * radius;
        const Temp = svgsIcons[i];

        return (
          <div
            key={`orb-${i}`}
            className="absolute top-1/2 left-1/2 flex items-center justify-center"
            style={{
              transform: `translate(calc(-50% + ${x}vh), calc(-50% + ${y}vh))`,
              transition: "transform 0.05s linear",
            }}
          >
            <div className="border rounded-md bg-transparent backdrop-blur-[1px] border-zinc-700 text-xl p-3">
              <Temp />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Circles;
