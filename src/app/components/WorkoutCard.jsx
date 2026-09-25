import Image from "next/image";

const WorkoutCard = ({ workout }) => {
  return (
    <div className=" max-w-sm overflow-hidden rounded-2xl border border-gray-800 bg-[#15181D] text-white shadow-lg">
      {/* Workout Image */}
      <div className="relative h-45 w-full">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Categories */}
        <div className="flex gap-2">
          {workout.muscleGroups.map((muscle) => {
            return (
              <span
                key={muscle}
                className="rounded-full bg-lime-400 px-3 py-1 text-[11px] font-bold uppercase text-black"
              >
                {" "}
                {muscle}{" "}
              </span>
            );
          })}
        </div>

        {/* Title */}
        <h2 className="mt-4 text-lg font-bold uppercase tracking-wide">
          {workout.name}
        </h2>

        {/* Subtitle */}
        <p className="mt-1 text-sm text-gray-500">{workout.equipment}</p>

        {/* Divider */}
        <div className="my-4 border-t border-gray-800"></div>

        {/* Workout Information */}
        <div className="flex items-center gap-4 text-xs text-gray-400">
          {/* Time */}
          <div className="flex items-center gap-1.5">
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
            </svg>

            <span>{workout.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.5 2.5c.3 4.2-2.8 5.5-2.8 8.1 0 1.3.8 2.4 2 2.9-.2-2 1.1-3.4 2.4-4.7.9 1.5 1.9 3.3 1.9 5.5 0 3.1-2.3 5.2-5.3 5.2-3.2 0-5.7-2.4-5.7-5.8 0-3.5 2.3-6.1 4.5-8.3-.2 2.5.4 3.6 1.1 4.4.4-2.3 1.7-4.4 1.9-7.3Z" />
            </svg>

            <span>{workout.caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
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
            </svg>

            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
