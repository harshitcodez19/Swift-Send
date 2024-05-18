/* eslint-disable react/prop-types */
const Button = ({ label, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-slate-950 text-slate-100 font-semibold shadow-sm rounded-md mt-4 w-full py-1 px-3"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
