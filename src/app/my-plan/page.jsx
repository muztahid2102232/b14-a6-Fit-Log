"use client";

import { WorkoutsContext } from "../context/WorkoutsContext";
import React, { Suspense, useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

const MyPlanContent = () => {
  const {
    myPlan = [],
    setPlan,
    saved = [],
    setSaved,
    isLoading,
  } = useContext(WorkoutsContext) || {};

  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const activeTab = tab === "saved" ? "saved" : "plan";

  const [doneWorkouts, setDoneWorkouts] = useState([]);

  // Default sorting is Duration
  const [sortBy, setSortBy] = useState("duration");

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#0C0D10]">
        <span className="loading loading-spinner loading-sm text-[#C2F800]"></span>
      </div>
    );
  }

  const currentList = activeTab === "plan" ? myPlan : saved;

  const totalMinutes = currentList.reduce(
    (acc, curr) => acc + (Number(curr.duration) || 0),
    0,
  );

  const totalCalories = currentList.reduce(
    (acc, curr) => acc + (Number(curr.caloriesBurned) || 0),
    0,
  );

  // Sort from highest to lowest
  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "calories") {
      return (Number(b.caloriesBurned) || 0) - (Number(a.caloriesBurned) || 0);
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

      toast.error("Workout is removed from today's plan", {
        duration: 2500,
        style: {
          background: "#1A1A1A",
          color: "#C2F800",
          border: "1px solid #C2F800",
          borderRadius: "12px",
          padding: "12px 16px",
        },
      });
    } else {
      const updatedSaved = saved.filter((item) => item.id !== id);
      setSaved?.(updatedSaved);

      toast.error("Workout is removed from saved", {
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

  const handleToggleDone = (id) => {
    if (doneWorkouts.includes(id)) {
      setDoneWorkouts(doneWorkouts.filter((doneId) => doneId !== id));

      toast.error("Workout is marked as not done", {
        duration: 2000,
        style: {
          background: "#1A1A1A",
          color: "#C2F800",
          border: "1px solid #C2F800",
          borderRadius: "12px",
          padding: "12px 16px",
        },
      });
    } else {
      setDoneWorkouts([...doneWorkouts, id]);

      toast.success("Workout is marked as done", {
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
    <main className="min-h-screen bg-[#0C0D10] px-4 py-10 font-sans text-white sm:px-6 md:px-16">
      {/* Header Section */}
      <div className="container mx-auto mb-8">
        <h1 className="mb-2 text-3xl font-extrabold uppercase tracking-wide md:text-4xl">
          {activeTab === "plan" ? "My Plan" : "My Plan"}
        </h1>

        <p className="text-sm text-gray-400 md:text-base">
          {activeTab === "plan"
            ? "Cap of five lifts for today. Finish them, then load more."
            : "Cap of five lifts for today. Finish them, then load more."}
        </p>
      </div>

      {/* Metrics Summary Row */}
      <div className="container mx-auto mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
        <div className="rounded-2xl border border-[#2A2A2A] bg-[#1A1A1A] p-5 sm:p-6">
          <p className="mb-1 text-sm text-gray-400">Exercises</p>
          <h3 className="text-4xl font-extrabold text-[#C2F800]">
            {currentList.length}
          </h3>
        </div>

        <div className="rounded-2xl border border-[#2A2A2A] bg-[#1A1A1A] p-5 sm:p-6">
          <p className="mb-1 text-sm text-gray-400">Minutes</p>
          <h3 className="text-4xl font-extrabold text-white">{totalMinutes}</h3>
        </div>

        <div className="rounded-2xl border border-[#2A2A2A] bg-[#1A1A1A] p-5 sm:p-6">
          <p className="mb-1 text-sm text-gray-400">Calories</p>
          <h3 className="text-4xl font-extrabold text-white">
            {totalCalories}
          </h3>
        </div>
      </div>

      {/* Tabs & Sort Controls Row */}
      <div className="container mx-auto mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] p-1">
          {/* Today's Plan */}
          <Link
            href="/my-plan?tab=plan"
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all sm:px-6 ${
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
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all sm:px-6 ${
              activeTab === "saved"
                ? "bg-[#2A2A2A] text-white shadow-sm"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </Link>
        </div>

        {/* Sort */}
        <div className="flex w-full items-center justify-between gap-2 text-sm text-gray-400 sm:w-auto sm:justify-end">
          <span>Sort By</span>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="cursor-pointer rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] px-3 py-2 font-medium text-white outline-none sm:px-4"
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
                  className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-gray-800 bg-[#16181E] p-4 sm:p-5 md:flex-row md:items-center"
                >
                  {/* Left: Image & Info */}
                  <div className="flex w-full items-center gap-3 sm:gap-4 md:w-auto">
                    <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl sm:w-24">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate font-bold uppercase tracking-wider text-white sm:text-base">
                        {item.name}
                      </h3>

                      <p className="mb-2 text-xs text-gray-400">
                        {item.equipment || "Bodyweight"}
                      </p>

                      <div className="flex flex-wrap gap-2 text-xs text-gray-300 sm:gap-4">
                        <span className="flex">
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <circle cx="12" cy="12" r="9" />
                            <path strokeLinecap="round" d="M12 7v5l3 2" />
                          </svg>{" "}
                          {item.duration} min
                        </span>

                        <span className="flex">
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.5 2.5c.3 4.2-2.8 5.5-2.8 8.1 0 1.3.8 2.4 2 2.9-.2-2 1.1-3.4 2.4-4.7.9 1.5 1.9 3.3 1.9 5.5 0 3.1-2.3 5.2-5.3 5.2-3.2 0-5.7-2.4-5.7-5.8 0-3.5 2.3-6.1 4.5-8.3-.2 2.5.4 3.6 1.1 4.4.4-2.3 1.7-4.4 1.9-7.3Z" />
                          </svg>
                          {item.caloriesBurned} kcal
                        </span>

                        <span className="flex">
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z"
                            />
                          </svg>{" "}
                          {item.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Action Buttons */}
                  <div className="flex w-full items-center justify-end gap-2 sm:gap-3 md:w-auto">
                    <Link
                      href={`../IndividualCardDetails/${item.id}`}
                      className="rounded-xl border border-gray-700 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-gray-800 sm:px-4"
                    >
                      View Details
                    </Link>

                    {activeTab === "plan" && (
                      <button
                        onClick={() => handleToggleDone(item.id)}
                        className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-colors sm:px-4 ${
                          isDone
                            ? "border border-[#C2F800]/50 bg-gray-800 text-[#C2F800]"
                            : "bg-[#C2F800] text-black hover:bg-[#b0df00]"
                        }`}
                      >
                        {isDone && <span>✓</span>}

                        {isDone ? "Done" : "Mark as Done"}
                      </button>
                    )}

                    <button
                      onClick={() => handleRemoveFromPlan(item.id)}
                      className="cursor-pointer p-2 text-gray-400 transition-colors hover:text-red-500"
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
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#2A2A2A] bg-[#161616]/50 p-10 text-center sm:p-16">
            <h2 className="mb-2 text-xl font-bold uppercase tracking-wider text-white md:text-2xl">
              {activeTab === "plan" ? "Nothing Here Yet" : "Nothing Here Yet"}
            </h2>

            <p className="mb-6 max-w-sm text-sm text-gray-400">
              {activeTab === "plan"
                ? "Browse the library and add a lift to get today moving."
                : "Browse the library and add a lift to get today moving."
                }
            </p>

            <Link
              href="/"
              className="rounded-xl bg-[#C2F800] px-6 py-3 font-bold text-black transition-colors hover:bg-[#b0df00]"
            >
              Go to workouts
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default function MyPlan() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center bg-[#0C0D10]">
          <span className="loading loading-spinner loading-sm text-[#C2F800]"></span>
        </div>
      }
    >
      <MyPlanContent />
    </Suspense>
  );
}
