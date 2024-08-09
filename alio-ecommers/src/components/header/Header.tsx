import { NavLink } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineFavorite } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";

function Header() {
  const nav_links = [
    {
      path: "home",
      display: "Home",
    },
    {
      path: "shop",
      display: "Shop",
    },
    {
      path: "cart",
      display: "Cart",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-x-1">
          <img className="w-8  h-auto font-bold" src={logo} alt="logo" />
          <h2 className="font-medium text-xl">Multimart</h2>
        </div>
        <div>
          <ul className="flex items-center gap-x-4">
            {nav_links.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? " font-bold" : "")}
                  >
                    {" "}
                    {item.display}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-x-4">
          <div className=" inline-block relative w-8 h-auto">
            <MdOutlineFavorite className="w-full h-full text-gray-600" />
            <h4 className="absolute -top-5 right-0 text-lg font-medium">0</h4>
          </div>
          <div className=" inline-block relative w-8 h-auto">
            <FaCartArrowDown className="w-full h-full text-gray-600" />
            <h4 className="absolute -top-5 right-0 text-lg font-medium ">0</h4>
          </div>
          <div className="w-8 h-auto">
            <RiAccountCircleLine className="w-full h-full text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
