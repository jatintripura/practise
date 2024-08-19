import logo from "../../assets/logo.png";
import rem from "../../assets/icons/basket.png";
import search from "../../assets/icons/search.png";
import user from "../../assets/icons/user.png";
import hamburger from "../../assets/icons/menu.png";
import { motion } from "framer-motion";
export const navMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Products",
    link: "/products",
  },
  {
    id: 3,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 4,
    title: "FAQ",
    link: "/faq",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "/contact",
  },
];
const Nav = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="py-5 border-b sticky top-0 border-primary-100 bg-white"
    >
      <div className="container flex  items-center justify-between">
        <div>
          <span className="hidden md:block">
            <a href="/">
              <img className="w-14 h-auto" src={logo} alt="logo" />
            </a>
          </span>
          <span className="md:hidden">
            <img className="w-10 h-auto" src={hamburger} alt="hamburger-icon" />
          </span>
        </div>
        <div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-x-12 text-lg text-black font-semibold ">
              {navMenu.map((item) => (
                <li className=" hover:text-primary-700" key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:hidden">
            <h1 className="text-primary-400 text-xl font-semibold">
              Tech Heim
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden md:block">
            <img src={search} alt="search-icon" />
          </span>
          <span>
            <img src={rem} alt="delete-icon" />
          </span>
          <span>
            <img src={user} alt="user-icon" />
          </span>
        </div>
      </div>
      <div className=" container w-full mt-4 md:hidden relative">
        <input
          type="text"
          placeholder="What can we help you to find ?"
          className="w-full p-2 px-6 outline-none border rounded-lg bg-neutral-100 placeholder:text-[#717171]"
        />
        <span className="absolute top-1 right-8">
          <img className="w-8 h-auto" src={search} alt="search-icon" />
        </span>
      </div>
    </motion.nav>
  );
};

export default Nav;
