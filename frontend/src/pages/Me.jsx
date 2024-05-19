import { useNavigate } from "react-router-dom";

const Me = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/signup");
  }, 4000);
  return (
    <div className="flex flex-col bg-slate-300 h-screen justify-center items-center">
      <div className="bg-slate-400 flex w-full py-4 text-4xl p-2 justify-center font-bold mb-10 shadow-md">
        <div>Welcome to Swift-Send</div>
      </div>
      <div className="flex flex-col w-80 justify-center  bg-slate-100 rounded-md  border-2 border-black shadow-sm">
        <div className="text-slate-800 text-2xl p-4 font-semibold">
          You are being redirected to the Sing-Up page in a few Seconds.
        </div>
        <div className="text-slate-800 text-2xl p-4 font-semibold">
          Happy transactions Ahead !!
        </div>
      </div>
    </div>
  );
};

export default Me;
