"use client";

import { WorkoutsContext } from "../../context/WorkoutsContext";
import React, { useContext } from "react";
import toast from "react-hot-toast";

const AddToPlanButton = ({ workout }) => {
  const { myPlan = [], setPlan } = useContext(WorkoutsContext) || {};

  // add to plan funtion
  const handleAddToPlan = () => {
    // console.log('add to button', workout )

    myPlan.filter((item) => item.id === workout.id).length > 0
      ? toast("Already locked into your plan!", {
          icon: "⚠️",
          style: {
            background: "#1E1E1E",
            color: "#EF4444",
            border: "1px solid #EF4444",
          },
        })
      : (
       setPlan?.([...myPlan, workout]),
        toast.success("Successfully added to plan! 💪", {
          style: {
            background: '#1E1E1E',
            color: '#F59E0B',
            border: '1px solid #F59E0B',
            fontWeight: '600',
          },
          iconTheme: {
            primary: '#F59E0B',
            secondary: '#1E1E1E',
          },
        })
      )
  };

  return (
    <div>
      <button
        className="flex items-center gap-2 bg-[#C2F800] hover:bg-[#b0e000] text-black font-bold text-sm px-6 py-3 rounded-xl transition-all"
        onClick={() => handleAddToPlan()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
        Add to today&apos;s plan
      </button>
    </div>
  );
};

export default AddToPlanButton;