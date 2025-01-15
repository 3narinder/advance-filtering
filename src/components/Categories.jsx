import Input from "./Input";

const Category = ({ handleChange }) => {
  return (
    <div className="mx-auto mb-2">
      <h2 className="text-lg font-normal mb-2">Category</h2>

      <div className="flex flex-col">
        <label className="block relative pl-9 mb-3 cursor-pointer">
          <input
            className="peer absolute opacity-0 cursor-pointer"
            onChange={handleChange}
            type="radio"
            value=""
            name="test"
          />
          <span className="absolute top-0.5 left-0 h-5 w-5 rounded-full bg-gray-300 peer-hover:bg-gray-400 peer-checked:bg-blue-500 after:content-[''] after:absolute after:hidden peer-checked:after:block after:top-[6.4px] after:left-[6.4px] after:h-[7px] after:w-[7px] after:rounded-full after:bg-white"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />

        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />

        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />

        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
