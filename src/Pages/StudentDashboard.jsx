import Navbar from "../components/Navbar";
import AssignmentCard from "../components/AssignmentCard";
import { useAssignment } from "../context/AssignmentContext";

const StudentDashboard = () => {
  const { currentUser, getAssignmentsForUser } = useAssignment();
  const userAssignments = getAssignmentsForUser(currentUser.name);

  const totalAssignments = userAssignments.length;
  const submitted = userAssignments.filter(
    (a) => a.myStatus === "Submitted"
  ).length;
  const percent =
    totalAssignments === 0
      ? 0
      : Math.round((submitted / totalAssignments) * 100);

  return (
    <div className="font-serif bg-[#101922] text-gray-200">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <Navbar role="Student" name="Mansi" />
          <main className="flex-1 px-4 sm:px-8 lg:px-16 py-8">
            <div className="mx-auto max-w-5xl">
              <section className="mb-10">
                <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-4">
                  Your Progress
                </h2>
                <div className="bg-[#101922]/70 p-6 rounded-xl shadow-sm">
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-6 justify-between items-center">
                      <p className="text-white text-base font-medium leading-normal">
                        Assignments Submitted
                      </p>
                      <p className="text-gray-400 text-sm font-normal leading-normal">
                        {submitted} of {totalAssignments} completed
                      </p>
                    </div>

                    <div className="rounded-full bg-gray-700 h-3">
                      <div
                        className="h-3 rounded-full bg-[#137fec] transition-all duration-300"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-4">
                  Assignments
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <AssignmentCard />
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
