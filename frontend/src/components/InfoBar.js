import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";

export default function InfoBar({ onToggleTodos }) {
  let x = "mt-[22px]";
  console.log(`mt-${x}`);
  return (
    <div
      className={`flex  items-center ${x} space-x-4  py-3 px-4 rounded-md bg-white bg-opacity-50 backdrop-blur-lg drop-shadow-lg"`}
    >
      <FiMenu size={28} />
      <p className="flex-1">To do today</p>

      <BiChevronDown cursor="pointer" size={26} onClick={onToggleTodos} />
    </div>
  );
}
