const data = [
  {
    title: "Calculus Problem Set",
    progress: 75,
    submission: "15/20",
    drive: "https://docs.google.com/",
  },
  {
    title: "Physics Lab Report",
    progress: 60,
    submission: "12/20",
    drive: "https://drive.google.com/",
  },
  {
    title: "History Essay: The Roman Empire",
    progress: 95,
    submission: "19/20",
    drive: "https://docs.google.com/",
  },
  {
    title: "Computer Science Project",
    progress: 45,
    submission: "9/20",
    drive: "https://drive.google.com/",
  },
  {
    title: "English Literature Review",
    progress: 100,
    submission: "20/20",
    drive: "https://docs.google.com/",
  },
];

const ExistingAssignment = () => {
  return (
    <>
      {data.map((e, i) => (
        <div
          key={i}
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

          <div className="w-full mt-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-400">
                Submission Progress
              </span>
              <span className="text-sm font-bold text-white">
                {e.progress}%
              </span>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
              <div
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  e.progress === 100 ? "bg-[#50E3C2]" : "bg-[#137fec]"
                }`}
                style={{ width: `${e.progress}%` }}
              ></div>
            </div>

            <p className="text-xs text-gray-500 mt-1.5 text-right">
              {e.submission} Submissions
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExistingAssignment;
