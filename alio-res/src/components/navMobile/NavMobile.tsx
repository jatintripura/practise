import logo from "../../assets/logo.png";
import cross from "../../assets/icons/close-circle.png";
import { navMenu } from "../navbar/Nav";
const NavMobile = () => {
  return (
    <nav className="md:hidden">
      <div className="container  ">
        <div className="max-w-[400px] bg-[#f7f7f7] px-4 ">
          <div className="flex items-center  pt-4 pb-10 justify-between">
            <span>
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </span>
            <span>
              <a href="#">
                <img src={cross} alt="cross-icon" />
              </a>
            </span>
          </div>
          <div>
            <ul className="flex flex-col gap-y-5">
              {navMenu.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMobile;
