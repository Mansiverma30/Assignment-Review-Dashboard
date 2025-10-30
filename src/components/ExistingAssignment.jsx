import { useAssignment } from "../context/AssignmentContext";

const ExistingAssignment = () => {
  const { assignments, getProgress } = useAssignment();

  if (!assignments.length) {
    return (
      <div className="sm:col-span-2 lg:col-span-3 flex flex-col items-center justify-center text-center p-10 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl mt-4">
        <div className="text-5xl text-gray-400 dark:text-gray-500 mb-4">
          <span className="material-symbols-outlined text-5xl">add_task</span>
        </div>
        <h3 className="text-lg font-bold text-white">No Assignments Yet</h3>
        <p className="text-text-secondary dark:text-gray-400 mt-1 max-w-sm">
          It looks like you haven't created any assignments. Use the form above
          to add your first one and get started!
        </p>
      </div>
    );
  }

  return (
    <>
      {assignments.map((e) => {
        const { total, done, percent } = getProgress(e);
        return (
          <div
            key={e.id}
            className="flex flex-col gap-4 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] bg-[#101922]/80 p-5 hover:shadow-[0_6px_18px_rgba(19,127,236,0.25)] transition-all duration-300"
          >
            <h3 className="font-bold text-lg text-white tracking-[-0.015em]">
              {e.title}
            </h3>

            <a
              className="flex items-center gap-2 text-[#137fec] hover:underline text-sm truncate"
              href={e.drive}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-base">link</span>
              <span>{e.drive}</span>
            </a>

            {/* Progress bar */}
            <div className="w-full mt-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-400">
                  Submission Progress
                </span>
                <span className="text-sm font-bold text-white">{percent}%</span>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                <div
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    percent === 100 ? "bg-[#50E3C2]" : "bg-[#137fec]"
                  }`}
                  style={{ width: `${percent}%` }}
                ></div>
              </div>

              <p className="text-xs text-gray-500 mt-1.5 text-right">
                {done}/{total} Submissions
              </p>
            </div>

            {/* Student submission list */}
            <div className="mt-4">
              <h4 className="text-gray-300 font-semibold text-sm mb-2">
                Student Submissions
              </h4>
              <ul className="space-y-2">
                {Object.entries(e.submissions).map(([student, submitted]) => (
                  <li
                    key={student}
                    className="flex justify-between items-center border-b border-gray-700 pb-1 text-sm"
                  >
                    <span className="text-gray-300">{student}</span>
                    <span
                      className={`font-medium ${
                        submitted ? "text-[#50E3C2]" : "text-red-400"
                      }`}
                    >
                      {submitted ? "Submitted" : "Pending"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ExistingAssignment;
