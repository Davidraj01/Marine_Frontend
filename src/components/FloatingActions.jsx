import React from "react";
import { Link } from "react-router-dom";
import { MdQuiz } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";
import { HiUsers } from "react-icons/hi2";

export default function FloatingActions() {
  const actions = [
    {
      to: "/donate",
      label: "Contribute Now",
      icon: <BiDonateHeart />,
      color: "bg-[#f43f5e]",
    },
    {
      to: "/marine-quiz",
      label: "Marine Quiz",
      icon: <MdQuiz />,
      color: "bg-[#14b8a6]",
    },

    {
      to: "/careers#volunteer",
      label: "Volunteer",
      icon: <HiUsers />,
      color: "bg-[#2563eb]",
    },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col items-end z-50">
      {actions.map((item, index) => (
        <Link
          key={index}
          to={item.to}
          className={`flex items-center justify-center h-12 w-12 md:w-auto ${item.color} text-white mb-[2px] rounded-l-lg shadow-lg transition-transform hover:-translate-x-1`}
        >
          {/* Text: Visible on Laptop/Desktop (md:), hidden on Mobile */}
          <span className="hidden md:block px-6 whitespace-nowrap font-bold text-sm tracking-wide">
            {item.label}
          </span>

          {/* Icon: Hidden on Laptop/Desktop (md:), visible on Mobile */}
          <div className="flex md:hidden h-full w-full items-center justify-center text-2xl">
            {item.icon}
          </div>
        </Link>
      ))}
    </div>
  );
}
