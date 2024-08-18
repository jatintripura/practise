import apple from "../../assets/fruits/apple.png";
import oranges from "../../assets/fruits/orange.png";
import avocado from "../../assets/fruits/avocado.png";
import cherri from "../../assets/fruits/cherry.png";
import { motion } from "framer-motion";
import { fadeLeft } from "../utility/Animation";
const menuData = [
  {
    id: 1,
    title: "Fresh Red Apples",
    link: "/",
    price: "$2.00",
    img: apple,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Fresh Oranges",
    link: "/",
    price: "$4.00",
    img: oranges,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fresh Avocado",
    link: "/",
    price: "$5.00",
    img: avocado,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Fresh Cherris",
    link: "/",
    price: "$6.00",
    img: cherri,
    delay: 0.11,
  },
];
const Menu = () => {
  return (
    <section>
      <div className="container pt-12 pb-20">
        <motion.h1
          initial={{ opacity: 1, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl font-bold text-left pb-10 uppercase"
        >
          Our Menu
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {menuData.map((item) => {
            return (
              <motion.div
                variants={fadeLeft(item.delay)}
                initial="hidden"
                whileInView={"visible"}
                whileHover={{ scale: 1.1 }}
                key={item.id}
                className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-6"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className=" w-[60px] mt-4 scale-110 transform -translate-y-6"
                />

                <div>
                  <h1 className="text-lg font-semibold">{item.title}</h1>
                  <p className="text-lg font-semibold text-secondary">
                    {item.price}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
