"use client";

import { WorkoutsContext } from "../context/WorkoutsContext";
import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

const MyPlan = () => {
  const {
    myPlan = [],
    setPlan,
    saved = [],
    setSaved,
  } = useContext(WorkoutsContext) || {};

  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const activeTab = tab === "saved" ? "saved" : "plan";

  const [doneWorkouts, setDoneWorkouts] = useState([]);

  // Default sorting is Duration
  const [sortBy, setSortBy] = useState("duration");

  const currentList = activeTab === "plan" ? myPlan : saved;

  const totalMinutes = currentList.reduce(
    (acc, curr) => acc + (Number(curr.duration) || 0),
    0
  );

  const totalCalories = currentList.reduce(
    (acc, curr) => acc + (Number(curr.caloriesBurned) || 0),
    0
  );

  // Sort from highest to lowest
  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "calories") {
      return (
        (Number(b.caloriesBurned) || 0) -
        (Number(a.caloriesBurned) || 0)
      );
    }

    if (sortBy === "rating") {
      return (Number(b.rating) || 0) - (Number(a.rating) || 0);
    }

    // Default: Duration
    return (Number(b.duration) || 0) - (Number(a.duration) || 0);
  });

  const handleRemoveFromPlan = (id) => {
    if (activeTab === "plan") {
      const updatedPlan = myPlan.filter((item) => item.id !== id);
      setPlan?.(updatedPlan);
      setDoneWorkouts(doneWorkouts.filter((doneId) => doneId !== id));

      toast.error("Workout removed from your plan", {
        duration: 2500,
        style: {
          background: "#1A1A1A",
          color: "#F3F4F6",
          border: "1px solid #EF4444",
          borderRadius: "12px",
          padding: "12px 16px",
        },
      });
    } else {
      const updatedSaved = saved.filter((item) => item.id !== id);
      setSaved?.(updatedSaved);

      toast.error("Workout removed from saved", {
        duration: 2500,
        style: {
          background: "#1A1A1A",
          color: "#F3F4F6",
          border: "1px solid #EF4444",
          borderRadius: "12px",
          padding: "12px 16px",
        },
      });
    }
  };

  const handleToggleDone = (id) => {
    if (doneWorkouts.includes(id)) {
      setDoneWorkouts(doneWorkouts.filter((doneId) => doneId !== id));

      toast("Workout marked as not done", {
        duration: 2000,
        style: {
          background: "#1A1A1A",
          color: "#D1D5DB",
          border: "1px solid #374151",
          borderRadius: "12px",
          padding: "12px 16px",
        },
      });
    } else {
      setDoneWorkouts([...doneWorkouts, id]);

      toast.success("Workout marked as done", {
        duration: 2500,
        style: {
          background: "#1A1A1A",
          color: "#C2F800",
          border: "1px solid #C2F800",
          borderRadius: "12px",
          padding: "12px 16px",
        },
      });
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
          <h3 className="text-4xl font-extrabold text-white">
            {totalMinutes}
          </h3>
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

          {/* Today's Plan */}
          <Link
            href="/my-plan?tab=plan"
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === "plan"
                ? "bg-[#2A2A2A] text-white shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan?tab=saved"
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === "saved"
                ? "bg-[#2A2A2A] text-white shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </Link>

        </div>

        {/* Sort */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Sort By</span>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#1A1A1A] border border-[#2A2A2A] px-4 py-2 rounded-xl text-white font-medium cursor-pointer outline-none"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>

      </div>

      {/* Conditional Rendering based on activeTab */}
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

                        <span>
                          ⏱️ {item.duration} min
                        </span>

                        <span>
                          🔥 {item.caloriesBurned} kcal
                        </span>

                        <span>
                          ⭐ {item.rating}
                        </span>

                      </div>

                    </div>
                  </div>

                  {/* Right: Action Buttons */}
                  <div className="flex items-center gap-3 w-full md:w-auto justify-end">

                    <Link
                      href={`../IndividualCardDetails/${item.id}`}
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
              {activeTab === "plan"
                ? "Nothing Here Yet"
                : "No Saved Workouts"}
            </h2>

            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              {activeTab === "plan"
                ? "Browse the library and add a lift to get today moving."
                : "Browse workouts and save your favorites for later."}
            </p>

            <Link
              href="/workouts"
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