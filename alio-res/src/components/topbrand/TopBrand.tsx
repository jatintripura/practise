import apple from "../../assets/top-brand/apple.png";
import sony from "../../assets/top-brand/sony.png";
import sym from "../../assets/top-brand/symsung.png";
import canon from "../../assets/top-brand/canon.png";
import huwai from "../../assets/top-brand/huawei.png";
import lenovo from "../../assets/top-brand/lenovo.png";

import { MdArrowForward } from "react-icons/md";
const newProducts = [
  {
    id: 1,

    url: apple,
  },
  {
    id: 2,

    url: sony,
  },
  {
    id: 3,

    url: sym,
  },
  {
    id: 4,

    url: canon,
  },
  {
    id: 5,

    url: huwai,
  },

  {
    id: 6,

    url: lenovo,
  },
];

const TopBrand = () => {
  return (
    <div className="container  py-20 ">
      <div className="flex items-center justify-between py-4 border-b-2">
        <h1 className="text-3xl font-semibold">Top Brands</h1>
        <div className="flex items-center gap-x-4">
          <p className="text-lg font-normal">View all</p>
          <span>
            <MdArrowForward className=" text-lg" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 place-items-center md:grid-cols-4 xl:grid-cols-6 gap-10 mt-10">
        {newProducts.map((item) => (
          <div
            className="w-[110px]  h-[80px] flex flex-col items-start justify-center gap-y-6  p-4 cursor-pointer"
            key={item.id}
          >
            <img src={item.url} className="w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBrand;
