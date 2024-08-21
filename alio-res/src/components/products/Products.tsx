import Slider from "react-slick";
import watch from "../../assets/watch.png";
import iphone from "../../assets/ipone.png";
import phone from "../../assets/phone.png";
import laptop from "../../assets/desktop.png";
import camera from "../../assets/camera.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const products = [
  {
    id: 1,
    title: "Accessories",
    url: iphone,
  },
  {
    id: 2,
    title: "Camera",
    url: camera,
  },
  {
    id: 3,
    title: "Laptop",
    url: laptop,
  },
  {
    id: 4,
    title: "Smart Phone",
    url: phone,
  },
  {
    id: 5,
    title: "Smart Watch",
    url: watch,
  },
];
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Products = () => {
  return (
    <div className="container  grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-6 py-20">
      {products.map((product) => (
        <div key={product.id}>
          <div className="flex flex-col gap-y-2 bg-[#f7f7f7] items-center w-[180px] md:w-[250px] lg:w-[200px] h-auto p-4 drop-shadow hover:bg-white hover:scale-100 duration-200 hover:drop-shadow-lg">
            <img src={product.url} alt={product.title} />

            <p>{product.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
