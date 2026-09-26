"use client";

import { WorkoutsContext } from "../context/WorkoutsContext";
import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MyPlan = () => {
  // Context theke myPlan, setPlan, saved ebong setSaved data niye asa
  const {
    myPlan = [],
    setPlan,
    saved = [],
    setSaved,
  } = useContext(WorkoutsContext) || {};

  // Kon tab-ti select kora ache (plan ba saved) ta track korar state
  const [activeTab, setActiveTab] = useState("plan");

  // Sort by state (Duration, Calories ba Rating)
  const [sortBy, setSortBy] = useState("Duration");

  // Kon kon workout-gulo "Done" kora hoyeche setar ID track korar jonno state
  const [doneWorkouts, setDoneWorkouts] = useState([]);

  // Kon list-ti dekhabe ta nirdharon kora (activeTab er upor vitti kore)
  const currentList = activeTab === "plan" ? myPlan : saved;

  // Boro theke choto (Descending) sorting logic
  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "Duration") {
      return (Number(b.duration) || 0) - (Number(a.duration) || 0);
    } else if (sortBy === "Calories") {
      return (Number(b.caloriesBurned) || 0) - (Number(a.caloriesBurned) || 0);
    } else if (sortBy === "Rating") {
      return (Number(b.rating) || 0) - (Number(a.rating) || 0);
    }
    return 0;
  });

  // Dynamic calculation (sortedList er upor vitti kore ba currentList er upor)
  const totalMinutes = currentList.reduce(
    (acc, curr) => acc + (Number(curr.duration) || 0),
    0,
  );
  const totalCalories = currentList.reduce(
    (acc, curr) => acc + (Number(curr.caloriesBurned) || 0),
    0,
  );

  // Plan ba saved list theke item remove korar function
  const handleRemoveFromPlan = (id) => {
    if (activeTab === "plan") {
      const updatedPlan = myPlan.filter((item) => item.id !== id);
      setPlan?.(updatedPlan);
      setDoneWorkouts(doneWorkouts.filter((doneId) => doneId !== id));
    } else {
      const updatedSaved = saved.filter((item) => item.id !== id);
      setSaved?.(updatedSaved);
    }
  };

  // Mark as Done toggle korar function
  const handleToggleDone = (id) => {
    if (doneWorkouts.includes(id)) {
      setDoneWorkouts(doneWorkouts.filter((doneId) => doneId !== id));
    } else {
      setDoneWorkouts([...doneWorkouts, id]);
    }
  };

  return (
    <main className="min-h-screen bg-[#0C0D10] text-white px-6 md:px-16 py-10 font-sans">
      {/* Header Section */}
      <div className="mb-8 container mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide uppercase mb-2">
          {activeTab === "plan" ? "My Plan" : "Saved Workouts"}
        </h1>
        <p className="text-gray-400 text-sm md:text-base">
          {activeTab === "plan"
            ? "Cap of five lifts for today. Finish them, then load more."
            : "Your bookmarked workouts for later."}
        </p>
      </div>

      {/* Metrics Summary Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 container mx-auto">
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
          <p className="text-gray-400 text-sm mb-1">Exercises</p>
          <h3 className="text-4xl font-extrabold text-[#C2F800]">
            {currentList.length}
          </h3>
        </div>
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
          <p className="text-gray-400 text-sm mb-1">Minutes</p>
          <h3 className="text-4xl font-extrabold text-white">{totalMinutes}</h3>
        </div>
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6">
          <p className="text-gray-400 text-sm mb-1">Calories</p>
          <h3 className="text-4xl font-extrabold text-white">
            {totalCalories}
          </h3>
        </div>
      </div>

      {/* Tabs & Sort Controls Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 container mx-auto">
        <div className="flex bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-1">
          <button
            onClick={() => setActiveTab("plan")}
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              activeTab === "plan"
                ? "bg-[#2A2A2A] text-white shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              activeTab === "saved"
                ? "bg-[#2A2A2A] text-white shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sorting Dropdown Control */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Sort By</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#1A1A1A] border border-[#2A2A2A] px-4 py-2 rounded-xl text-white outline-none cursor-pointer font-medium"
          >
            <option value="Duration">Duration</option>
            <option value="Calories">Calories</option>
            <option value="Rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Conditional Rendering based on sortedList */}
      <div className="container mx-auto">
        {sortedList.length > 0 ? (
          <div className="space-y-4">
            {sortedList.map((item) => {
              const isDone = doneWorkouts.includes(item.id);

              return (
                <div
                  key={item.id}
                  className="bg-[#16181E] border border-gray-800 rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                >
                  {/* Left: Image & Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-24 h-16 rounded-xl overflow-hidden shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-bold uppercase tracking-wider">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 text-xs mb-2">
                        {item.equipment || "Bodyweight"}
                      </p>
                      <div className="flex flex-wrap gap-4 text-xs text-gray-300">
                        <span>⏱️ {item.duration} min</span>
                        <span>🔥 {item.caloriesBurned} kcal</span>
                        <span>⭐ {item.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Action Buttons */}
                  <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                    <Link
                      href={`/workouts/${item.id}`}
                      className="border border-gray-700 text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-gray-800 transition-colors"
                    >
                      View Details
                    </Link>

                    {activeTab === "plan" && (
                      <button
                        onClick={() => handleToggleDone(item.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer ${
                          isDone
                            ? "bg-gray-800 text-[#C2F800] border border-[#C2F800]/50"
                            : "bg-[#C2F800] text-black hover:bg-[#b0df00]"
                        }`}
                      >
                        {isDone && <span>✓</span>}
                        {isDone ? "Done" : "Mark as Done"}
                      </button>
                    )}

                    <button
                      onClick={() => handleRemoveFromPlan(item.id)}
                      className="text-gray-400 hover:text-red-500 p-2 transition-colors cursor-pointer"
                      title="Remove"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="border border-dashed border-[#2A2A2A] rounded-2xl p-16 flex flex-col items-center justify-center text-center bg-[#161616]/50">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider mb-2 text-white">
              {activeTab === "plan" ? "Nothing Here Yet" : "No Saved Workouts"}
            </h2>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              {activeTab === "plan"
                ? "Browse the library and add a lift to get today moving."
                : "Browse workouts and save your favorites for later."}
            </p>
            <Link
              href={`/workouts`}
              className="bg-[#C2F800] text-black font-bold px-6 py-3 rounded-xl hover:bg-[#b0df00] transition-colors"
            >
              Go to workouts
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlan;
