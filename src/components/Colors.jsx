import Input from "./Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-lg font-normal mb-2">Colors</h2>
        <label className="block relative pl-9 mb-3 cursor-pointer">
          <input
            className="peer absolute opacity-0 cursor-pointer"
            onChange={handleChange}
            type="radio"
            value=""
            name="test1"
          />
          <span className="absolute top-0.5 left-0 h-5 w-5 rounded-full bg-gray-300 peer-hover:bg-gray-400 peer-checked:bg-blue-500 after:content-[''] after:absolute after:hidden peer-checked:after:block after:top-[6.4px] after:left-[6.4px] after:h-[7px] after:w-[7px] after:rounded-full after:bg-white"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <label className="block relative pl-9 mb-3 cursor-pointer">
          <input
            className="peer absolute opacity-0 cursor-pointer"
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="absolute top-0.5 left-0 h-5 w-5 rounded-full bg-gray-300 peer-hover:bg-gray-400 peer-checked:bg-blue-500 after:content-[''] after:absolute after:hidden peer-checked:after:block after:top-[6.4px] after:left-[6.4px] after:h-[7px] after:w-[7px] after:rounded-full after:bg-white"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
};

export default Colors;
