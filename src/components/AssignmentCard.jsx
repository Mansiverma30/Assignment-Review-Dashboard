import { useState } from "react";
import PopUp from "./PopUp";
import SubmitAssignment from "./SubmitAssignmet";
import { useAssignment } from "../context/AssignmentContext";

const AssignmentCard = () => {
  const { getAssignmentsForUser } = useAssignment();
  const { currentUser } = useAssignment();
  const data = getAssignmentsForUser(currentUser.name); // dynamic
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {data.map((e, i) => (
        <div
          key={e.id}
          className={`flex flex-col justify-start rounded-xl bg-[#101922]/70 p-6 shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-all duration-300 ${
            e.myStatus === "Submitted"
              ? "opacity-60 cursor-not-allowed"
              : "hover:scale-[1.02] hover:shadow-[0_6px_16px_rgba(19,127,236,0.25)]"
          }`}
        >
          <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] line-clamp-2">
            {e.title}
          </h3>
          <p className="text-gray-400 text-sm font-normal leading-normal mt-2 line-clamp-3">
            {e.desc}
          </p>
          <a
            className="flex items-center gap-2 text-[#137fec] hover:underline text-sm font-medium mt-3"
            href={e.drive || "#"}
            target="_blank"
            rel="noreferrer"
          >
            <span className="material-symbols-outlined text-base">link</span>
            <span>View on Google Drive</span>
          </a>

          {e.myStatus === "Submitted" ? (
            <div className="flex w-full sm:w-auto sm:ml-auto items-center justify-center rounded-lg h-10 px-4 bg-[#50E3C2]/20 text-sm font-bold leading-normal tracking-[0.015em] text-[#50E3C2] mt-4">
              <span className="material-symbols-outlined text-lg mr-2">
                check_circle
              </span>
              <span className="truncate">Submitted</span>
            </div>
          ) : (
            <button
              className="flex w-full sm:w-auto sm:ml-auto min-w-[120px] items-center justify-center rounded-lg h-10 px-4 bg-[#137fec] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#0e63bd] transition-colors mt-4"
              onClick={() => setOpenIndex(i)}
            >
              <span className="truncate">Submit Assignment</span>
            </button>
          )}

          <PopUp
            isOpen={openIndex === i}
            onClose={() => setOpenIndex(null)}
            maxWidth="max-w-lg"
          >
            <SubmitAssignment
              assignmentId={e.id}
              onDone={() => setOpenIndex(null)}
            />
          </PopUp>
        </div>
      ))}
    </>
  );
};

export default AssignmentCard;
