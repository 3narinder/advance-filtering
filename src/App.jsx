import { useState } from "react";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

import data from "./db/data";

const App = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  //Search filter
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  //Recommended button filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  //Radio filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = data.filter(
    (product) =>
      product?.title?.toLowerCase()?.indexOf(query?.toLowerCase()) !== -1
  );

  const filterData = (products, selected, query) => {
    let filterProducts = data;

    if (query) {
      filterProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filterProducts = filterProducts?.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filterProducts;
  };

  const result = filterData(data, selectedCategory, query);

  return (
    <div className="grid grid-cols-[15%_auto] h-screen text-sm">
      <div className="sticky">
        <Sidebar handleChange={handleChange} />
      </div>
      <div className="flex flex-col">
        <Navigation query={query} handleInputChange={handleInputChange} />
        <div className="flex-grow flex flex-col overflow-hidden">
          <Recommended handleClick={handleClick} />
          <div className="flex-grow overflow-y-scroll">
            <Products data={result} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
