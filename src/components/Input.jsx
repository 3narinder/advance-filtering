const Input = ({ handleChange, value, title, name }) => {
  return (
    <label className="block relative pl-9 mb-3 cursor-pointer">
      <input
        className="peer absolute opacity-0 cursor-pointer"
        onChange={handleChange}
        type="radio"
        value={value}
        name={name}
      />
      <span className="absolute top-0.5 left-0 h-5 w-5 rounded-full bg-gray-300 peer-hover:bg-gray-400 peer-checked:bg-blue-500 after:content-[''] after:absolute after:hidden peer-checked:after:block after:top-[6.4px] after:left-[6.4px] after:h-[7px] after:w-[7px] after:rounded-full after:bg-white"></span>
      {title}
    </label>
  );
};

export default Input;
