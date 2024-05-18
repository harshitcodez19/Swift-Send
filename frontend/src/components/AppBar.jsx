/* eslint-disable react/no-unknown-property */
const AppBar = () => {
  return (
    <div className="flex flex-row border-spacing-y-5 border-gray-400 bg-white mb-2 shadow-sm shadow-slate-900 px-2 py-3 justify-between">
      <div className="text-slate-800 text-3xl font-bold  ">Swift-Send</div>
      <div className="flex flex-row justify-center p-1">
        <div className="text-slate-800 font-semibold">Hello, User</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
