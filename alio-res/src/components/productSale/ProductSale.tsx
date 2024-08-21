import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import shape from "../../assets/shape.png";
import { MdArrowForward } from "react-icons/md";

import mouse from "../../assets/mouse.png";
import keybord from "../../assets/keyboard.png";
import watch3 from "../../assets/watch3.png";
import watch1 from "../../assets/watch1.png";
import laptop from "../../assets/laptop.png";
import Slider from "react-slick";

const products = [
  {
    id: 1,
    title: "Logitech G502 Gaming Mouse",
    url: mouse,
    newPrice: "$38.00",
    oldPrice: "$19.00",
  },
  {
    id: 2,
    title:
      "NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design",
    url: keybord,
    newPrice: "$38.00",
    oldPrice: "$19.00",
  },
  {
    id: 3,
    title: "Apple Watch Series 7 (GPS, 41MM)",
    url: watch1,
    newPrice: "$38.00",
    oldPrice: "$19.00",
  },
  {
    id: 4,
    title: "Apple 2022 MacBook Air M2 Chip (8GB RAM, 256GB SSD)",
    url: laptop,
    newPrice: "$38.00",
    oldPrice: "$19.00",
  },
  {
    id: 5,
    title: "samsung Titan smart watch",
    url: watch3,
    newPrice: "$38.00",
    oldPrice: "$19.00",
  },
];

const ProductSale = () => {
  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container flex items-start   gap-x-4 bg-primary-500 rounded-md relative overflow-hidden z-0 py-10">
      <span className="absolute -top-4 -left-4 z-10 overflow-hidden">
        <img src={shape} alt="shape-bg" className=" w-[400px] rotate-6 " />
      </span>
      <div className=" z-20 min-w-[280px] h-[250px]  text-white flex flex-col items-center gap-y-20 py-8">
        <div className="flex flex-col items-center gap-y-2">
          <h1 className="text-2xl font-semibold">Products On Sale</h1>
          <p className="text-lg font-normal">Shop Now!</p>
        </div>
        <div className="flex items-center gap-x-4">
          <p className="text-lg font-normal">View all</p>
          <span>
            <MdArrowForward className="text-white text-lg" />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-5 w-[900px]">
        <Slider {...settings}>
          {products.map((item) => (
            <div>
              <div
                key={item.id}
                className="flex flex-col gap-y-2 bg-[#f7f7f7] rounded-md items-center w-[180px] h-[250px] p-4 drop-shadow hover:bg-white hover:scale-110 duration-200 hover:drop-shadow-lg"
              >
                <img src={item.url} alt={item.title} className="w-[150px]" />
                <p className="text-xs font-normal">{item.title}</p>
                <div className="flex items-center gap-x-10">
                  <span>{item.oldPrice}</span>
                  <span>{item.newPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSale;
