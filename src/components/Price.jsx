import Input from "./Input";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="flex flex-col mb-2">
        <h2 className="text-lg font-normal mb-2">Price</h2>

        <label className="block relative pl-9 mb-3 cursor-pointer">
          <input
            className="peer absolute opacity-0 cursor-pointer"
            onChange={handleChange}
            type="radio"
            value=""
            name="test2"
          />
          <span className="absolute top-0.5 left-0 h-5 w-5 rounded-full bg-gray-300 peer-hover:bg-gray-400 peer-checked:bg-blue-500 after:content-[''] after:absolute after:hidden peer-checked:after:block after:top-[6.4px] after:left-[6.4px] after:h-[7px] after:w-[7px] after:rounded-full after:bg-white"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - 50"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
