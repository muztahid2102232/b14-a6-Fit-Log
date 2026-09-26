"use client";

import { WorkoutsContext } from "../../context/WorkoutsContext";
import React, { useContext } from "react";
import { Bookmark } from "lucide-react";
import toast from "react-hot-toast";

const SavedForLater = ({ workout }) => {
  // কন্টেক্সট থেকে saved এবং setSaved নিয়ে আসা
  const { saved = [], setSaved } = useContext(WorkoutsContext) || {};

  const handleSaveForLater = () => {
    // সহজ চেক: আইডি দিয়ে দেখা এটি আগে থেকেই সেভ করা আছে কি না
    const isAlreadySaved = saved.some((item) => item.id === workout.id);

    if (isAlreadySaved) {
      toast("This is already saved!", { icon: "ℹ️" });
      return;
    }

    // আগের লিস্টের সাথে নতুন ওয়ার্কআউটটি যুক্ত করা
    setSaved?.([...saved, workout]);
    
    toast("This is added to save later", {
      icon: "📌",
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