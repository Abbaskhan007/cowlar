import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { RxDragHandleDots2 } from "react-icons/rx";
import { MdDelete } from "react-icons/md";

export default function TodoItem({ item, onDelete, onSelect }) {
  const { title, completed } = item;
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex items-center px-4 py-4 space-x-5 border-b-2 last:border-none">
      {completed ? (
        <div
          onClick={() => onSelect(item._id, !item.completed)}
          className="bg-red-200 border-red-400 border-2 rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
        >
          <BsCheckLg color="#fff" size={14} style={{ strokeWidth: "1px" }} />
        </div>
      ) : (
        <div
          onClick={() => onSelect(item._id, !item.completed)}
          className="rounded-full w-[25px] h-[25px] border-red-400 border-2 cursor-pointer"
        />
      )}
      <p className="flex-1 text-[18px] font-normal">{title}</p>
      <div className="relative">
        <RxDragHandleDots2
          onClick={() => setShowMenu(prev => !prev)}
          cursor="pointer"
          size={22}
        />
        {showMenu && (
          <div
            onClick={() => onDelete(item._id)}
            className="bg-white hover:bg-gray-100 flex items-center z-30 absolute px-4 py-2 rounded-md space-x-4 border-2 border-gray-300 shadow-lg -right-[130px]"
          >
            <MdDelete size={24} color="#f87171" />
            <span className="text-lg font-medium text-red-400 ">Delete</span>
          </div>
        )}
      </div>
      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
          className="absolute z-10 inset-0 bg-transparent"
        />
      )}
    </div>
  );
}
