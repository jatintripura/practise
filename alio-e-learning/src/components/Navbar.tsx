import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },

  {
    id: 2,
    title: "Services",
    link: "#",
  },
  {
    id: 3,
    title: "About Us",
    link: "#",
  },
  {
    id: 4,
    title: "Our Team",
    link: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "#",
  },
];
const Navbar = () => {
  return (
    <nav className="relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, ease: "easeInOut" }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl">The Coding Journey</h1>
        </div>
        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex gap-3 items-center">
            {NavbarMenu.map((menu) => {
              return (
                <li key={menu.id}>
                  <a
                    href={menu.path}
                    className="inline-block py-2 px-3 hover:text-secondary relative group:"
                  >
                    <div className="w-2 h-2 rounded-full  bg-secondary absolute  mr-2 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                    {menu.title}
                  </a>
                </li>
              );
            })}
            <button className="btn-primary">Sign In</button>
          </ul>
        </div>
        {/* Mobile hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
