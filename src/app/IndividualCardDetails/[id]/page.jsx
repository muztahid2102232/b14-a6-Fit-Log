import AddToPlanButton from "../../components/buttons/AddToPlanButton";
import SavedForLater from "../../components/buttons/SavedForLater";
import Image from "next/image";


const getWorkoutDetails = async (id) => {
  try {
    const response = await fetch(
      ` https://api.api-store.workers.dev/api/fitlog/${id}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Failed to load workouts. Please try again later.");
  }
};

export default async function IndividualCardDetails({ params }) {
  const { id } = await params;
  const workout = await getWorkoutDetails(id);

  return (
    <main className="min-h-screen bg-[#0d1015] px-5 py-8 text-white md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-10">
        {/*LEFT: IMAGE*/}
        <div className="overflow-hidden rounded-xl">
          <Image
            src={workout.image}
            alt={workout.name}
            width={700}
            height={700}
            className="h-full min-h-100 w-full object-cover"
          />
        </div>

        {/* ================= RIGHT: DETAILS ================= */}
        <div className="flex flex-col">
          {/* Title */}
          <h1 className="text-3xl font-extrabold font-oswald uppercase tracking-tight md:text-4xl">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400 font-inter">
            {workout.description}
          </p>

          {/* Muscle Tags */}
          <div className="mt-4 flex gap-2">
            {workout.muscleGroups.map((muscle) => {
              return (
                <span
                  key={muscle}
                  className=" font-inter rounded-full bg-lime-400 px-3 py-1 text-[11px] font-bold uppercase text-black"
                >
                  {" "}
                  {muscle}{" "}
                </span>
              );
            })}
          </div>

          {/* ================= INFORMATION BOX ================= */}
          <div className="mt-5 overflow-hidden rounded-xl border border-gray-800 bg-[#151a22] font-inter">
            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Equipment
              </span>

              <span className="text-xs text-gray-200">{workout.equipment}</span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Difficulty
              </span>

              <span className="text-xs text-gray-200">
                {workout.difficulty}
              </span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Sets
              </span>

              <span className="text-xs text-gray-200">{workout.sets}</span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Reps
              </span>

              <span className="text-xs text-gray-200">{workout.reps}</span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Duration
              </span>

              <span className="text-xs text-gray-200">
                {workout.duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Calories
              </span>

              <span className="text-xs text-gray-200">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-4 py-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Rating
              </span>

              <span className="text-xs text-gray-200">{workout.rating}</span>
            </div>
          </div>

          {/* ================= INSTRUCTIONS ================= */}
          <div className="mt-6">
            <h2 className="text-sm font-bold uppercase tracking-wide font-inter">
              Instructions
            </h2>
            <div>
              <ol className="mt-4 space-y-3">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-[14px] leading-5 text-gray-400"
                  >
                    <span className="text-gray-500">{index + 1}.</span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-7 flex flex-wrap gap-3">
          <AddToPlanButton workout={workout} />
          <SavedForLater workout={workout} />
          </div>
        </div>
      </div>
    </main>
  );
}
