import { FaLeaf } from "react-icons/fa";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from "../responsiveMenu/ResponsiveMenu";
import { useState } from "react";
import { motion } from "framer-motion";
const navbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Products",
    link: "#",
  },
  {
    id: 3,
    title: "About",
    link: "#",
  },
  {
    id: 4,
    title: "Shop",
    link: "#",
  },
  {
    id: 5,
    title: "Contacts",
    link: "#",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container flex items-center justify-between py-4 md:pt-4"
        >
          {/* Logo section */}
          <div className="flex items-center gap-2 text-2xl font-bold uppercase">
            <p className="text-primary">Fruits</p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-500" />
          </div>
          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {navbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
              <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200 ">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>
          {/* Mobile Hamburger Menu section */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <MdMenu className="text-4xl" />
          </div>
        </motion.div>
      </nav>
      {/* Mobile menu section */}
      <ResponsiveMenu open={open} />
    </>
  );
};
{
  /* Logo section */
}
export default Navbar;
