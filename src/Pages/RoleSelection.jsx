import { useNavigate } from "react-router";

const RoleSelection = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#101922] group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 flex flex-1 justify-center py-5 items-center">
          <div className="layout-content-container flex flex-col max-w-[480px] flex-1">
            <div className="flex flex-col items-center justify-center bg-[#101922]/50 p-8 sm:p-12 rounded-xl shadow-sm border border-white/5">
              {/* <div className="w-full gap-1 overflow-hidden bg-transparent @[480px]:gap-2 aspect-square rounded-lg flex max-w-40 mb-6">
                <div
                  className="w-full bg-center bg-no-repeat bg-contain aspect-auto rounded-none flex-1"
                  data-alt="Stylized blue abstract shapes representing organization and tasks"
                ></div>
              </div> */}{" "}
              {/* Add image later */}
              <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
                Assignment Dashboard
              </h1>
              <p className="text-slate-400 text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
                Select your role to continue.
              </p>
              <div className="flex w-full flex-col items-stretch px-4 py-3 gap-3">
                <button
                  className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#137fec] text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform duration-200 hover:scale-105 active:scale-100 gap-2"
                  onClick={() => {
                    navigate("/admin");
                  }}
                >
                  <span className="material-symbols-outlined">
                    shield_person
                  </span>
                  <span className="truncate">Continue as Admin</span>
                </button>
                <button
                  className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-white/10 text-[#111418] dark:text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform duration-200 hover:scale-105 active:scale-100 gap-2"
                  onClick={() => {
                    navigate("/student");
                  }}
                >
                  <span className="material-symbols-outlined">school</span>
                  <span className="truncate">Continue as Student</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
