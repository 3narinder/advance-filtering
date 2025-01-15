import Categories from "../components/Categories";
import Colors from "../components/Colors";
import Price from "../components/Price";

const Sidebar = ({ handleChange }) => {
  return (
    <section className="h-screen border-r border-[#e5e5e5] flex flex-col sticky top-0">
      {/* Sticky Header */}
      <div className="w-full flex items-center justify-center border-b border-[#f3f3f3] px-5 py-[28px] bg-white z-50">
        <h1 className="text-xl font-bold">🛒</h1>
      </div>

      {/* Scrollable Content */}
      <div className="overflow-y-auto w-full pl-12 my-4 flex-grow">
        <Categories handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </div>
    </section>
  );
};

export default Sidebar;
