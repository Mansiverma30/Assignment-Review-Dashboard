import { useState } from "react";
import PopUp from "./PopUp";

const CreateAssignment = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  return (
    <div className="flex flex-col items-stretch justify-start rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] bg-[#101922] p-6 lg:p-8">
      <div className="flex flex-col items-start gap-2 mb-6">
        <p className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
          Create New Assignment
        </p>
        <p className="text-gray-400 text-base font-normal leading-normal">
          Fill in the details below to add a new assignment to the system.
        </p>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          <label className="flex flex-col flex-1">
            <p className="text-gray-300 text-sm font-medium leading-normal pb-2">
              Title
            </p>
            <input
              type="text"
              className="form-input w-full rounded-lg border border-gray-600 bg-gray-800 px-4 text-gray-200 placeholder:text-[#6c757d] focus:border-[#aec6cf] focus:ring-2 focus:ring-[#aec6cf]/50 h-13 outline-none"
              placeholder="e.g., History of Ancient Rome Essay"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label className="flex flex-col flex-1 md:col-span-2">
            <p className="text-gray-300 text-sm font-medium leading-normal pb-2">
              Description
            </p>
            <textarea
              className="form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-gray-200 bg-gray-800 focus:outline-0 focus:ring-2 focus:ring-[#aec6cf]/50 border border-gray-600 focus:border-[#aec6cf] min-h-28 placeholder:text-[#6c757d] p-4 text-base font-normal leading-normal"
              placeholder="Enter a detailed description, including requirements and guidelines for the assignment."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </label>
          <label className="flex flex-col flex-1">
            <p className="text-gray-300 text-sm font-medium leading-normal pb-2">
              Drive Link
            </p>
            <div className="flex w-full flex-1 items-stretch rounded-lg">
              <div className="text-[#6c757d] flex border border-gray-600 bg-gray-900 items-center justify-center px-3.5 rounded-l-lg border-r-0">
                <span className="material-symbols-outlined text-lg">link</span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-gray-200 bg-gray-800 focus:outline-0 focus:ring-2 focus:ring-[#aec6cf]/50 border border-gray-600 focus:border-[#aec6cf] h-12 placeholder:text-[#6c757d] p-4 rounded-r-lg rounded-l-none text-base font-normal leading-normal"
                placeholder="https://docs.google.com/document/..."
                value={link}
                onChange={(e) => setLink(e.target.value)}
                type="url"
              />
            </div>
          </label>
          <div className="flex justify-end mt-6">
            <button
              className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-[#137fec] text-white text-base font-bold leading-normal tracking-wide hover:bg-opacity-80 transition-colors"
              onClick={() => {
                setOpen(true);
              }}
            >
              <span className="truncate">Create Assignment</span>
            </button>
          </div>
        </div>
      </form>

      <PopUp isOpen={open} onClose={() => setOpen(false)} maxWidth="max-w-lg">
        <span className="material-symbols-outlined text-6xl text-[#50E3C2] mb-4">
          celebration
        </span>
        <h3 className="text-white text-xl font-bold">New Assignment Added</h3>
        <p className="text-gray-400 mt-2">
          You can see this assignment in you dashboard
        </p>
      </PopUp>
    </div>
  );
};

export default CreateAssignment;
