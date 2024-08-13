import { Link } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { GoMail } from "react-icons/go";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="container mx-auto bg-slate-900 text-white pt-10">
        <div className="flex items-start">
          <div className="w-[33%] p-4">
            <div className="">
              <h2 className="font-medium text-xl">E-Shop</h2>
            </div>
            <p className="text-base font-thin leading-7 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium id odio vero minima atque, aspernatur aperiam
              cupiditate, porro sunt, ut quam tempora distinctio. Numquam
              voluptatum sequi maxime, iste repellendus tenetur!
            </p>
          </div>
          <div className="w-[25%] p-4 pl-4 space-y-4">
            <h3 className="text-xl font-bold">Top Categorys</h3>
            <ul className="space-y-2 font-thin text-base pl-2">
              <li>
                <Link to="#">Moblie Phone</Link>
              </li>
              <li>
                <Link to="#">Modern Sofa</Link>
              </li>
              <li>
                <Link to="#">Arm Chair</Link>
              </li>
              <li>
                <Link to="#">Smart Watch</Link>
              </li>
            </ul>
          </div>
          <div className="w-[16%] p-4 space-y-4">
            <h3 className="text-xl font-bold">Usefull Links</h3>
            <ul className="space-y-2 font-thin text-base pl-2">
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="w-[25%] p-4 space-y-4">
            <h3 className="text-xl font-bold">Contacts </h3>
            <ul className="space-y-2 font-thin text-base">
              <li className="flex items-center gap-x-3">
                <span>
                  <IoLocationOutline />
                </span>
                <p>123,Dinajpure-5200</p>
              </li>
              <li className="flex items-center gap-x-3">
                <span>
                  <FiPhoneCall />
                </span>
                <p>+8801234567890</p>
              </li>
              <li className="flex items-center gap-x-3">
                <span>
                  <GoMail />
                </span>
                <p>24frontend@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-6">
          <p className="text-center text-base font-thin">
            Copyright {year} devloped by Fransiastar
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
