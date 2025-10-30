import { useState } from "react";
import PopUp from "./PopUp";

const SubmitAssignment = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file || !title) return alert("Please fill all required fields.");
    setConfirmOpen(true);
  };

  const confirmSubmit = () => {
    setConfirmOpen(false);
    setSuccess(true);
    // Later you can add your API call or Context update here
    setTitle("");
    setDesc("");
    setFile(null);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-[#101922] p-6 rounded-xl shadow-lg">
      <h2 className="text-white text-lg font-bold mb-4">
        Submit Your Assignment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Math Homework 1"
            className="w-full bg-[#0d131b] border border-gray-700 rounded-lg p-2.5 text-white focus:border-[#137fec] outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Description
          </label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Write something about your submission..."
            className="w-full bg-[#0d131b] border border-gray-700 rounded-lg p-2.5 text-white focus:border-[#137fec] outline-none resize-none h-24"
          />
        </div>

        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Upload File <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            accept=".pdf,.docx,.zip,.png,.jpg"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="block w-full text-sm text-gray-400 
              file:mr-4 file:py-2 file:px-4 
              file:rounded-lg file:border-0 
              file:text-sm file:font-semibold 
              file:bg-[#137fec] file:text-white 
              hover:file:bg-[#137fec]/90 cursor-pointer"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#137fec] hover:bg-[#137fec]/90 text-white font-semibold py-2.5 rounded-lg transition-colors"
        >
          Submit Assignment
        </button>
      </form>

      {/* Confirmation Modal */}
      <PopUp
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title="Confirm Submission"
        maxWidth="max-w-sm"
      >
        <h1 className="text-gray-300 text-xl">Confirm Submission</h1>
        <p className="text-gray-300 mb-4">
          Are you sure you want to submit{" "}
          <span className="text-white font-medium">
            {title || "this assignment"}
          </span>
          ? You won’t be able to edit it after submission.
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={() => setConfirmOpen(false)}
            className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={confirmSubmit}
            className="px-4 py-2 rounded-lg bg-[#137fec] hover:bg-[#137fec]/90 text-white text-sm font-semibold"
          >
            Confirm
          </button>
        </div>
      </PopUp>

      {/* Success Modal */}
      <PopUp
        isOpen={success}
        onClose={() => setSuccess(false)}
        maxWidth="max-w-sm"
      >
        <h1 className="text-gray-300 text-xl">Submitted Successfully 🎉</h1>
        <p className="text-gray-300 mb-4 text-sm">
          Your assignment{" "}
          <span className="text-white font-medium">{title}</span> has been
          submitted successfully.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="w-full bg-[#137fec] hover:bg-[#137fec]/90 text-white font-semibold py-2 rounded-lg"
        >
          Close
        </button>
      </PopUp>
    </div>
  );
};

export default SubmitAssignment;
