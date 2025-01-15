import Card from "../components/Cards";

const Products = ({ data }) => {
  return (
    <div className="flex flex-wrap ml-5 mt-8 -z-50">
      {data?.map((product, i) => (
        <div key={i}>
          <Card
            img={product.img}
            title={product.title}
            star={product.star}
            reviews={product.reviews}
            prevPrice={product.prevPrice}
            newPrice={product.newPrice}
          />
        </div>
      ))}
    </div>
  );
};

export default Products;
