import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Navigation = ({ query, handleInputChange }) => {
  return (
    <nav className="border-b border-[#f3f3f3] px-5 py-5 z-50 sticky top-0 bg-white">
      <div className="flex items-center justify-around">
        <div className="nav-container">
          <input
            className="px-5 py-3 border-none outline-none mr-5 relative w-56 bg-[#f7f6f6]"
            type="text"
            placeholder="Enter your search shoes."
            value={query}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <a href="#">
            <FiHeart className="w-6 h-6 ml-8" />
          </a>
          <a href="">
            <AiOutlineShoppingCart className="w-6 h-6 ml-8" />
          </a>
          <a href="">
            <AiOutlineUserAdd className="w-6 h-6 ml-8" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
