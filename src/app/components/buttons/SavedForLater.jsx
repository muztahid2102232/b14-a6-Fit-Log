"use client";

import { WorkoutsContext } from "../../context/WorkoutsContext";
import React, { useContext } from "react";
import { Bookmark } from "lucide-react";
import toast from "react-hot-toast";

const SavedForLater = ({ workout }) => {
  const { saved = [], setSaved } = useContext(WorkoutsContext) || {};

  const handleSaveForLater = () => {
    const isAlreadySaved = saved.some((item) => item.id === workout.id);

    if (isAlreadySaved) {
      toast.error("This is already saved!", {
        style: {
          background: "#1A1A1A",
          color: "#C2F800",
          border: "1px solid #C2F800",
          borderRadius: "12px",
          padding: "12px 16px",
        },
      });
      return;
    }

    setSaved?.([...saved, workout]);
    
    toast("This is added to saved", {
      icon: "✔",
      style: {
        background: "#1A1A1A",
        color: "#C2F800",
        border: "1px solid #C2F800",
        borderRadius: "12px",
        padding: "12px 16px",
      },
    });
  };

  return (
    <div>
      <button
        onClick={handleSaveForLater}
        className="flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-3 text-[14px] font-medium text-gray-300 transition hover:bg-gray-800 cursor-pointer"
      >
        <Bookmark size={15} />
        Save for later
      </button>
    </div>
  );
};

export default SavedForLater;