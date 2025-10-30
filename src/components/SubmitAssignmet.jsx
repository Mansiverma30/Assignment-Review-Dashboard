import { useState } from "react";
import Modal from "./PopUp"; // or reuse PopUp
import { useAssignment } from "../context/AssignmentContext";

const SubmitAssignment = ({ assignmentId, onDone }) => {
  const { submitAssignment, currentUser } = useAssignment();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file && !title) {
      return alert("Please add a file or title before submitting.");
    }
    setConfirmOpen(true);
  };

  const confirmSubmit = () => {
    // optionally collect file meta
    const fileMeta = file
      ? { name: file.name, size: file.size, type: file.type }
      : null;
    submitAssignment({
      assignmentId,
      studentName: currentUser.name,
      fileMeta,
    });
    setConfirmOpen(false);
    setSuccess(true);
    // reset
    setFile(null);
    setTitle("");
    setDesc("");
    // notify parent (close popup)
    if (onDone) onDone();
  };

  return (
    <div className="w-full">
      <h3 className="text-white text-lg font-bold mb-4">Submit Assignment</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Optional: short note / title"
          className="w-full bg-[#0d131b] border border-gray-700 rounded-lg p-2 text-white outline-none"
        />
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Optional description"
          className="w-full bg-[#0d131b] border border-gray-700 rounded-lg p-2 text-white outline-none h-24"
        />
        <input
          type="file"
          accept=".pdf,.docx,.zip,.png,.jpg"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#137fec] file:text-white hover:file:bg-[#137fec]/90"
        />
        <div className="flex justify-end gap-3 mt-2">
          <button
            type="button"
            onClick={() => {
              if (onDone) onDone();
            }}
            className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-[#137fec] text-white"
          >
            Submit
          </button>
        </div>
      </form>

      {/* confirmation modal */}
      <Modal
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        maxWidth="max-w-sm"
      >
        <p className="text-gray-300 mb-4">
          Are you sure you want to submit? This will mark the assignment as
          submitted.
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={() => setConfirmOpen(false)}
            className="px-4 py-2 rounded-lg bg-gray-700 text-gray-200"
          >
            Go back
          </button>
          <button
            onClick={confirmSubmit}
            className="px-4 py-2 rounded-lg bg-[#137fec] text-white"
          >
            Confirm
          </button>
        </div>
      </Modal>

      {/* success modal */}
      <Modal
        isOpen={success}
        onClose={() => setSuccess(false)}
        maxWidth="max-w-sm"
      >
        <p className="text-gray-300 mb-4">Submitted successfully ✅</p>
        <button
          onClick={() => setSuccess(false)}
          className="w-full bg-[#137fec] py-2 rounded-lg text-white"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default SubmitAssignment;
