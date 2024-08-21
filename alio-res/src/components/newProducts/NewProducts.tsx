import iphone from "../../assets/newproducts/iphone.png";
import camera from "../../assets/newproducts/camera.png";
import laptop from "../../assets/newproducts/laptop.png";
import sym from "../../assets/newproducts/symsungs.png";
import { FaStar } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
const newProducts = [
  {
    id: 1,
    title: "Iphone 14 promax 256 gig",
    price: "$930.90",
    star: "4.5",
    url: iphone,
  },
  {
    id: 2,
    title: "Blackmagic Design Pocket Cinema Camera 6K Pro (Canon EF)",
    price: "$2534.90",
    star: "4.3",
    url: laptop,
  },
  {
    id: 3,
    title: "SAMSUNG Galaxy S23 Ultra Cell Phone,256 GB",
    price: "$1080.90",
    star: "4.7",
    url: sym,
  },
  {
    id: 4,
    title: "VR VisionTech X1",
    price: "$1930.90",
    star: "3.5",
    url: camera,
  },
];

const NewProducts = () => {
  return (
    <div className="container  py-20 ">
      <div className="flex items-center justify-between py-4 border-b-2">
        <h1 className="text-3xl font-semibold">New Products</h1>
        <div className="flex items-center gap-x-4">
          <p className="text-lg font-normal">View all</p>
          <span>
            <MdArrowForward className=" text-lg" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 place-items-center lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-20 mt-10">
        {newProducts.map((item) => (
          <div
            className="w-[220px] md:w-[250px] lg:w-[230px] h-[320px] flex flex-col items-start justify-center pt-2 pb-6 pr-6 pl-6 gap-y-4 hover:scale-100 duration-200 drop-shadow bg-[#f7f7f7] hover:bg-white hover:drop-shadow-md"
            key={item.id}
          >
            <img src={item.url} alt={item.title} />
            <p className="text-lg">{item.title}</p>
            <div className="flex items-center gap-x-20 ">
              <span className="object-cover  w-full text-primary-500">
                {item.price}
              </span>
              <span className="flex items-center gap-x-1">
                <FaStar /> {item.star}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
