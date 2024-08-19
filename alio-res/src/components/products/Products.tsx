import watch from "../../assets/watch.png";
import iphone from "../../assets/ipone.png";
import phone from "../../assets/phone.png";
import laptop from "../../assets/desktop.png";
import camera from "../../assets/camera.png";

const products = [
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

const Products = () => {
  return (
    <div className="container  py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 place-items-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col p-2 gap-4 items-center justify-center   w-[180px] sm:w-[150px] h-auto   drop-shadow bg-[#f4f4f4]   hover:bg-white hover:scale-110 duration-300 hover:shadow-xl"
        >
          <img src={product.url} alt={product.title} />
          <p>{product.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
