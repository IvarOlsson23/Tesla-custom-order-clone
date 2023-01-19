import React from "react";
import { useState } from "react";
const cars = [
  {
    id: 1,
    model: "Model s",
    submodel1: {
      name: "Model Y",
      price: "539 990 Kr",
      range: "430",
      topspeed: "217",
      acceleration: "6.9",
    },
    submodel2: {
      name: "Model Y Long range",
      price: "629 990 Kr",
      range: "533",
      topspeed: "217",
      acceleration: "5.0",
    },
    submodel3: {
      name: "Model Y Performance",
      price: "729 990 Kr",
      range: "514",
      topspeed: "250",
      acceleration: "3,7",
    },
  },
];

const Sidebar = (props) => {
  const [activeSubmodel, setActiveSubmodel] = useState(cars[0].submodel1);
  const [active, setActive] = useState();

  const handleClick = (color) => {
    setActive(color);
    props.onColorChange(color);
  };
  return (
    <div className=" text-gray-700 h-full z-40 mx-10 my-10">
      {/***************************
       * **** CAR MODEL BUTTONS ***
       * *****************************/}
      <div className=" w-80  flex flex-col">
        <div className=" tracking-tighter my-5">
          <h2 className="font-semibold align-middle justify-center flex text-4xl">
            Model S
          </h2>
          <p className="align-middle justify-center flex text-sm">
            Uppskattad leveranstid: jan - feb 2023
          </p>
        </div>
        <div className=" flex justify-evenly my-10">
          <div className=" text-center w-1/3">
            <div className="font-semibold tracking-tighter text-sm my-3">
              <span className=" text-2xl leading-8">
                {activeSubmodel.range}
              </span>
              Km
            </div>
            <p className=" text-xs">Räckvidd, WLTP-Uppskattning</p>
          </div>
          <div className="text-center  w-1/3">
            <div className="font-semibold tracking-tighter text-sm my-3">
              <span className=" text-2xl leading-8">
                {activeSubmodel.topspeed}
              </span>
              Km/h
            </div>
            <p className=" text-xs">Topphastighet</p>
          </div>
          <div className="text-center w-1/3">
            <div className="font-semibold tracking-tighter text-sm my-3">
              <span className="text-2xl leading-8">
                {activeSubmodel.acceleration}
              </span>
              s
            </div>
            <p className=" text-xs">0-100 km/h</p>
          </div>
        </div>
        <p className="font-semibold text-sm">Bakhjulsdrift</p>
        <button
          className={`border-solid border border-gray-400 flex justify-between h-14 rounded my-5 ${
            activeSubmodel === cars[0].submodel1
              ? "border-4 border-blue-600"
              : ""
          }`}
          onClick={() => setActiveSubmodel(cars[0].submodel1)}
        >
          <p className=" text-sm mx-4 m-auto">{cars[0].submodel1.name}</p>
          <p className="text-sm mx-4 m-auto">{cars[0].submodel1.price}</p>
        </button>
        <p className="font-semibold text-sm">Bakhjulsdrift</p>
        <button
          className={`border-solid border border-gray-400 flex justify-between h-14 rounded my-5 ${
            activeSubmodel === cars[0].submodel2
              ? "border-4 border-blue-600"
              : ""
          }`}
          onClick={() => setActiveSubmodel(cars[0].submodel2)}
        >
          <p className=" text-sm mx-4 m-auto">{cars[0].submodel2.name}</p>
          <p className=" text-sm mx-4 m-auto">{cars[0].submodel2.price}</p>
        </button>
        <button
          className={`border-solid border border-gray-400 flex justify-between h-14 rounded ${
            activeSubmodel === cars[0].submodel3
              ? "border-4 border-blue-600"
              : ""
          }`}
          onClick={() => setActiveSubmodel(cars[0].submodel3)}
        >
          <p className=" text-sm mx-4 m-auto">{cars[0].submodel3.name}</p>
          <p className=" text-sm mx-4 m-auto">{cars[0].submodel3.price}</p>
        </button>
      </div>
      {/***************************
       * **** PAINT PICKER BUTTONS ***
       * *****************************/}
      {/******* Button 1 *******/}
      <div className="  flex justify-between h-20 my-40  ">
        <div
          className={` w-14 h-14 rounded-full flex justify-center align-middle ma  ${
            active === "white" ? "border-4 border-blue-600" : ""
          }`}
        >
          <img
            className="h-10 w-10 m-1
          "
            src={require("../assets/Whiteicon.png")}
            onClick={() => handleClick("white")}
            alt="white-paint-icon"
          />
        </div>
        {/******* Button 2 *******/}
        <div
          className={` w-14 h-14 rounded-full flex justify-center align-middle ma  ${
            active === "black" ? "border-4 border-blue-600" : ""
          }`}
        >
          <img
            className="h-10 w-10 m-1
          "
            src={require("../assets/black-paint-icon.png")}
            onClick={() => handleClick("black")}
            alt="black-paint-icon"
          />
        </div>
        {/******* Button 3 *******/}
        <div
          className={` w-14 h-14 rounded-full flex justify-center align-middle ma  ${
            active === "grey" ? "border-4 border-blue-600" : ""
          }`}
        >
          <img
            className="h-10 w-10 m-1
          "
            src={require("../assets/grey-paint-icon.png")}
            onClick={() => handleClick("grey")}
            alt="grey-paint-icon"
          />
        </div>
        {/******* Button 4 *******/}
        <div
          className={` w-14 h-14 rounded-full flex justify-center align-middle ma  ${
            active === "blue" ? "border-4 border-blue-600" : ""
          }`}
        >
          <img
            className="h-10 w-10 m-1
          "
            src={require("../assets/blue-paint-icon.png")}
            onClick={() => handleClick("blue")}
            alt="blue-paint-icon"
          />
        </div>
        {/******* Button 5 *******/}
        <div
          className={` w-14 h-14 rounded-full flex justify-center align-middle ma  ${
            active === "red" ? "border-4 border-blue-600" : ""
          }`}
        >
          <img
            className="h-10 w-10 m-1
          "
            src={require("../assets/red-paint-icon.png")}
            onClick={() => handleClick("red")}
            alt="red-paint-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
