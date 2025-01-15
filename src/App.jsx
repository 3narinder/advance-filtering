import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

import data from "./db/data";

const App = () => {
  return (
    <div className="grid grid-cols-[15%_auto] h-screen text-sm">
      <div className="sticky">
        <Sidebar />
      </div>
      <div className="flex flex-col">
        <Navigation />
        <div className="flex-grow flex flex-col overflow-hidden">
          <Recommended />

          <div className="flex-grow overflow-y-scroll">
            <Products data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
