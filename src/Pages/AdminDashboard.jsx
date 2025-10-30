import CreateAssignment from "../components/CreateAssignment";
import ExistingAssignment from "../components/ExistingAssignment";
import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  return (
    <div className="font-serif bg-[#101922] text-gray-200">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <Navbar role="Admin" name="Admin" />
          <main className="flex flex-1 justify-center py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
            <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1 gap-8 lg:gap-12">
              <CreateAssignment />
              <div>
                <h2 className="text-xl font-bold text-white mb-6">
                  Existing Assignments
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ExistingAssignment />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
