import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className=" flex flex-col justify-between m-6 min-h-72 border border-[#ededed] p-5 cursor-pointer">
        <div className="w-52 h-full">
          <img src={img} alt={title} className="w-auto h-auto mb-4" />
        </div>
        <div className="flex flex-col">
          <h3 className="mb4">{title}</h3>
          <section className="mb-4 flex">
            {star} {star} {star} {star}
            <span className="text-sm">{reviews}</span>
          </section>
          <section className="flex justify-between items-center">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="text-[#535353]" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
