/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
const InputBox = ({ label, placeholder,onChange }) => {
  return (
    <div className="p-2">
      <div className="text-sm font-medium text-left py-1 px-1">{label}</div>
      <input
        placeholder={placeholder}
        className="w-full px-2 py-1 border rounded-md border-slate-200"
        onChange={onChange}
      />
    </div>
  );
};

export default InputBox;
