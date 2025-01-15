const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="block relative pl-9 mb-3 cursor-pointer">
      <input
        className="absolute opacity-0 cursor-pointer"
        onChange={handleChange}
        type="radio"
        value={value}
        name={name}
      />
      <span
        className="absolute top-0.5 left-0 h-5 w-5 rounded-full bg-[#eee]"
        style={{ backgroundColor: color }}
      ></span>
      {title}
    </label>
  );
};

export default Input;
