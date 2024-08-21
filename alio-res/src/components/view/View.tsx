import elips from "../../assets/Ellipse 525.png";
import view from "../../assets/view.png";

const View = () => {
  return (
    <div className="py-10">
      <div className="container bg-[#223949] max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px]  border rounded-md relative overflow-hidden flex items-center justify-around gap-x-4 p-10">
        <span className="absolute top-0 -right-28 md:-right-10  z-0">
          <img
            src={elips}
            alt="elips"
            className="  w-[300px] md:w-[450px] h-auto"
          />
        </span>
        <div className="flex flex-col items-start lg:items-center gap-y-5 ">
          <h1 className="text-lg md:text-xl xl:text-3xl text-white font-medium">
            SMART WATCH
          </h1>
          <p className=" text-sm md:text-base xl:text-lg text-white font-normal">
            Various designs and brands
          </p>
          <button className="bg-secondary-400 text-white font-medium px-6 py-2 rounded-md">
            view
          </button>
        </div>
        <div className="z-10">
          <img src={view} alt="" className="  w-[300px] md:w-[450px] h-auto" />
        </div>
      </div>
    </div>
  );
};

export default View;
