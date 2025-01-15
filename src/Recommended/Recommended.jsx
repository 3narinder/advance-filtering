import Button from "../components/Button";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div className="sticky  z-10 bg-white p-4">
        <h2 className=" mb-5 mt-5 text-xl">Recommended</h2>
        <div className="flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
