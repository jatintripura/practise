import lgo from "../../assets/logo.png";
import {} from "react-icons";
import { MdOutlineMenu } from "react-icons/md";
const menu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "About",
    link: "#",
  },
  {
    id: 3,
    title: "Blog",
    link: "#",
  },
  {
    id: 4,
    title: "Contact",
    link: "#",
  },
  {
    id: 5,
    title: "Five Link",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-10">
      <div className="flex items-center gap-4">
        <img src={lgo} alt="logo icon" />
        <h1 className="text-2xl font-bold">Sections</h1>
      </div>
      <div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-x-6">
            {menu.map((list) => (
              <li className="text-lg font-medium text-primary hover:text-accent cursor-pointer">
                {list.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <MdOutlineMenu className="text-4xl font-bold" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
