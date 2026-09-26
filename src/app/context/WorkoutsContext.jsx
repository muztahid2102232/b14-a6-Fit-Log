'use client'

import React, { createContext, useState } from "react";



export const WorkoutsContext = createContext(undefined);

const WorkoutsProvider = ({ children }) => {
  const [myPlan, setMyPlan] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedPlan = localStorage.getItem('myWorkoutPlan');
      return savedPlan ? JSON.parse(savedPlan) : [];
    }
    return [];
  });

  const [saved, setSavedWorkouts] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedWorkouts = localStorage.getItem('savedWorkouts');
      return savedWorkouts ? JSON.parse(savedWorkouts) : [];
    }
    return [];
  });

  const setPlan = (action) => {
    setMyPlan((prevPlan) => {
      const updatedPlan = typeof action === 'function' ? action(prevPlan) : action;
      if (typeof window !== 'undefined') {
        localStorage.setItem('myWorkoutPlan', JSON.stringify(updatedPlan));
      }
      return updatedPlan;
    });
  };

  const setSaved = (action) => {
    setSavedWorkouts((prevSaved) => {
      const updatedSaved = typeof action === 'function' ? action(prevSaved) : action;
      
      // ডুপ্লিকেট এড়াতে এবং একাধিক আইটেম নিশ্চিত করতে ইউনিক আইডি ফিল্টার করা যেতে পারে
      // তবে এখানে সরাসরি আপডেট অ্যারে সেভ করা হচ্ছে
      if (typeof window !== 'undefined') {
        localStorage.setItem('savedWorkouts', JSON.stringify(updatedSaved));
      }
      return updatedSaved;
    });
  };

  const sharedData = {
    myPlan, 
    setPlan,
    saved, 
    setSaved
  }

  return <WorkoutsContext.Provider value={sharedData}>{children}</WorkoutsContext.Provider>;
};

export default WorkoutsProvider;