import React from 'react';
import WorkoutCard from './WorkoutCard';
const WorkoutAllPromise=async () => {
        const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    return response.json();
}
const WorkoutAll = async () => {
const workouts = await WorkoutAllPromise();

    return (
      
        <div className="bg-[#0C0D10] py-8 px-[2.19%] grid grid-cols-3 gap-6">
          {workouts.map((workout) =><WorkoutCard key={workout.id} workout={workout}/>)} 
        </div>
    );
};

export default WorkoutAll;