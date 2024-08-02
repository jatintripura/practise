import { FiShoppingCart } from "react-icons/fi";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import {
  selectCardTotalPrice,
  selectItemCard,
} from "@/redux/feature/cardSlics";
import { Link } from "react-router-dom";

function Navbar() {
  const cardItem = useSelector(selectItemCard);
  const totalPrice = useSelector(selectCardTotalPrice);
  return (
    <div className="container mx-auto py-4 sticky top-0">
      <div className="flex items-center justify-between">
        <Link to={"/"} className="text-2xl font-bold">
          Ecommerse
        </Link>
        <div className="text-lg font-medium">Total Price : $ {totalPrice}</div>
        <div className="relative  w-10 h-10">
          <Link to={"/card"}>
            <FiShoppingCart className="text-3xl w-full h-full font-bold" />
            <div className="absolute top-0 -translate-y-1/2 -right-2   rounded-md text-center bg-gray-900 w-5 h-auto">
              <span className="text-base font-medium text-white ">
                {cardItem.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
