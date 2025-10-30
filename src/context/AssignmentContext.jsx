import { createContext, useContext, useEffect, useState } from "react";

const AssignmentContext = createContext();

export const AssignmentProvider = ({ children }) => {
  const [assignments, setAssignments] = useState(() => {
    try {
      const raw = localStorage.getItem("assignments_v1");
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return [
      {
        id: Date.now() - 1000000,
        title: "Calculus Problem Set",
        desc: "Complete exercises 1-15...",
        drive: "https://docs.google.com/",
        submissions: { Mansi: false, Aarav: false, Riya: false, Karan: false },
      },
    ];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const r = localStorage.getItem("currentUser_v1");
      if (r) return JSON.parse(r);
    } catch (e) {}
    return { name: "Mansi", role: "student" };
  });

  useEffect(() => {
    localStorage.setItem("assignments_v1", JSON.stringify(assignments));
  }, [assignments]);

  useEffect(() => {
    localStorage.setItem("currentUser_v1", JSON.stringify(currentUser));
  }, [currentUser]);

  const addAssignment = ({ title, desc, drive, students = [] }) => {
    const id = Date.now();
    const submissions = {};
    const studentList =
      students.length > 0
        ? students
        : Object.keys(
            assignments.reduce((acc, a) => {
              Object.keys(a.submissions || {}).forEach((s) => (acc[s] = true));
              return acc;
            }, {})
          );

    const finalStudents = studentList.length ? studentList : [currentUser.name];
    finalStudents.forEach((s) => (submissions[s] = false));

    const newAssignment = { id, title, desc, drive, submissions };
    setAssignments((prev) => [newAssignment, ...prev]);
    return newAssignment;
  };

  const submitAssignment = ({ assignmentId, studentName, fileMeta = null }) => {
    setAssignments((prev) =>
      prev.map((a) => {
        if (a.id !== assignmentId) return a;
        return {
          ...a,
          submissions: {
            ...a.submissions,
            [studentName]: true,
          },

          submissionsLog: [
            ...(a.submissionsLog || []),
            {
              student: studentName,
              at: new Date().toISOString(),
              file: fileMeta,
            },
          ],
        };
      })
    );
  };

  const getProgress = (assignment) => {
    const subs = assignment.submissions || {};
    const total = Object.keys(subs).length || 0;
    const done = Object.values(subs).filter(Boolean).length;
    const percent = total === 0 ? 0 : Math.round((done / total) * 100);
    return { total, done, percent };
  };

  const getAssignmentsForUser = (userName) => {
    return assignments.map((a) => ({
      ...a,
      myStatus: a.submissions?.[userName] ? "Submitted" : "Not Submitted",
      progressInfo: getProgress(a),
    }));
  };

  return (
    <AssignmentContext.Provider
      value={{
        assignments,
        addAssignment,
        submitAssignment,
        getProgress,
        getAssignmentsForUser,
        currentUser,
        setCurrentUser,
        setAssignments,
      }}
    >
      {children}
    </AssignmentContext.Provider>
  );
};

export const useAssignment = () => useContext(AssignmentContext);
