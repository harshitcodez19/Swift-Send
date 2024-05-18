/* eslint-disable react/no-unknown-property */
import { Heading } from "../components/Heading";
import InputBox from "../components/InputBox";

const SendMoney = () => {
  return (
    <div className="flex bg-slate-200 justify-center h-screen">
      <div className="flex flex-col justify-center">
        <div className="p-3 text-center h-max w-96 rounded-md bg-slate-200 shadow-md">
          <Heading label={"Transfer Money"} />
          <div className="flex flex-row justify-start align-middle mt-10 space-x-2 px-2 mb-2">
            <div className="p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <div className="text-slate-800 font-semibold text-xl">Username</div>
          </div>
          <InputBox label={"Amount (in Rs)"} placeholder={"Enter amount"} />
          <button className="bg-green-500 w-full rounded-md mx-auto mt-2 py-1 border text-slate-200 font-bold mb-2">
            Send Money
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
