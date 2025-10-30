const Navbar = ({ role, name }) => {
  return (
    <nav className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-700 bg-[#101922]/50 backdrop-blur-sm sticky top-0 z-10 px-4 md:px-8 lg:px-16">
      <div className="flex items-center gap-4 text-white">
        <span className="material-symbols-outlined text-[#137fec] text-3xl">
          school
        </span>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
          {role} Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4 py-3">
        <span className="hidden sm:inline font-medium text-gray-300">
          {name}
        </span>

        <div className="relative group">
          <div
            role="img"
            aria-label="User avatar"
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMG0OaoVWed61lGD6_Q41S7OqR8p_LnQMyB-0G_lWVZF3_u4W4Rb-rrDK_9i__Q4Ulrb-sIZ4C2hrf1By0C4YpCD9d-VqrLEdKfDCe4AVzoASeMYWhsLEr2ouk-O1p5Mqxmty00ZUGsi4JKT0AgMEjHVSwB83nmOP_yWqk4ftK9uvIFqSkMhb1n4qM3fwrTriNzxAlWdtOk_TVd1Ik1c1FwJ6p84vnIHBTh2Pd86N2Jk8kUI2gfNYH1I_gaTpIpRPdygKB70M8A39_')",
            }}
          ></div>

          <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transform group-hover:translate-y-1 transition-all duration-300 ease-in-out">
            <a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer">
              Settings
            </a>
            <a className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer">
              Log Out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
