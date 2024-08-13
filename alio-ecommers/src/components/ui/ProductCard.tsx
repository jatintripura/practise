import { LuPlus } from "react-icons/lu";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
  return (
    <div className="w-[23%] cursor-pointer ">
      <div>
        <motion.img
          whileHover={{ scale: 1.1 }}
          src={item.imgUrl}
          alt="product"
          className="p-2"
        />
        <h3 className="pl-8 text-lg font-medium">
          <Link to={`/shop/${item.id}`}>{item.productName}</Link>
        </h3>
        <p className="pl-8 text-base font-thin">{item.category}</p>

        <div className="flex items-center pl-8 justify-between pr-8 py-2">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="w-6 h-6 bg-slate-900  rounded-full flex items-center justify-center"
          >
            <LuPlus className="w-full text-white text-xl" />
          </motion.div>
          <h4 className="text-base font-medium">$ {item.price}</h4>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
