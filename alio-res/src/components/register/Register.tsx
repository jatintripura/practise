import shape from "../../assets/circel_shape.png";
import iphone from "../../assets/register-iphone.png";

const Register = () => {
  return (
    <div className="container  ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-8">
        <div className=" w-[600px]  bg-gradient-to-r from-primary-500 to-primary-25  overflow-hidden relative  rounded-md p-10 flex items-center gap-x-8">
          <span className="absolute top-4 -left-16">
            <img className="w-12 md:w-[120px]" src={shape} alt="shape" />
          </span>
          <span className="absolute -top-16 right-1/2 -translate-x-1/2">
            <img className="w-12 md:w-[120px]" src={shape} alt="shape" />
          </span>
          <span className="absolute  -bottom-8 -right-8 ">
            <img className="w-12 md:w-[120px]" src={shape} alt="shape" />
          </span>
          <div className="flex flex-col gap-y-12 items-start ">
            <h1 className="text-lg md:text-xl font-semibold ">
              Iphone <span className="text-white">15 Series</span>
            </h1>
            <img src={iphone} alt="register-iphone" />
          </div>
          <div className="  flex flex-col items-center gap-y-4">
            <div className="flex items-center gap-x-2 w-full">
              <div className="flex flex-col gap-y-2 items-center border rounded-md font-semibold p-2">
                <h1 className="text-base md:text-lg font-normal">8</h1>
                <p className="text-xs md:text-basee font-normal">Days</p>
              </div>
              <div className="flex flex-col gap-y-2 items-center border rounded-md font-semibold p-2">
                <h1 className="text-base md:text-lg font-normal">8</h1>
                <p className="text-xs md:text-basee font-normal">Days</p>
              </div>
              <div className="flex flex-col gap-y-2 items-center border rounded-md font-semibold p-2">
                <h1 className="text-base md:text-lg font-normal">8</h1>
                <p className="text-xs md:text-basee font-normal">Days</p>
              </div>
              <div className="flex flex-col gap-y-2 items-center border rounded-md font-semibold p-2">
                <h1 className="text-base md:text-lg font-normal">8</h1>
                <p className="text-xs md:text-basee font-normal">Days</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-4 w-full">
              <h1 className="text-base md:text-xl  font-medium ">
                It feels good to be the first
              </h1>
              <p className=" text-xs md:text-base text-gray-600">
                Get ready for the future of smartphones.Experience innovation
                like never before. Stay tuned for the big iPhone 15 pre-sale.
              </p>
            </div>
            <div>
              <button className="bg-[#0C68F4] px-6 py-2 text-white font-medium rounded-lg">
                Register Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-[400px]">
          <div className=" bg-primary-500 p-9 rounded-md">
            <h1 className="text-[#FCC870] text-xl md:text-2xl font-medium text-center ">
              Play Station 5
            </h1>
            <p>Digital Edition + 2TB</p>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

{
  /* <div>
        <div className=" w-full  bg-gradient-to-r from-primary-500 to-primary-25  overflow-hidden relative  rounded-md flex items-center gap-x-10 place-items-center p-10">
          <span className="absolute top-4 -left-14">
            <img src={shape} alt="shape" />
          </span>
          <span className="absolute -top-14 right-1/3 -translate-x-1/2">
            <img src={shape} alt="shape" />
          </span>
          <span className="absolute  -bottom-8 -right-8 ">
            <img src={shape} alt="shape" />
          </span>

          <div className="flex flex-col gap-y-12 items-start ">
            <h1 className="text-xl font-semibold">
              Iphone <span className="text-white">15 Series</span>
            </h1>
            <img
              src={iphone}
              alt="register-iphone"
              className="w-[150px] md:[350px] h-auto"
            />
          </div>
          <div className="w-[110px]  md:w-[250px] flex flex-col items-center gap-y-4">
            <div className="flex items-center gap-x-2 w-full">
              <div className=" w-4 md:w-16  h-auto flex flex-col gap-y-2 items-center border rounded-md font-semibold p-2">
                <h1>8</h1>
                <p>Days</p>
              </div>
              <div className=" w-4 md:w-16  h-auto flex flex-col gap-y-2 items-center border rounded-md font-semibold p-2">
                <h1>8</h1>
                <p>Days</p>
              </div>
              <div className=" w-4 md:w-16  h-auto flex flex-col gap-y-2 items-center border rounded-md font-semibold p-2">
                <h1>8</h1>
                <p>Days</p>
              </div>
              <div className=" w-4 md:w-16  h-auto flex flex-col gap-y-2 items-center border rounded-md font-semibold p-2">
                <h1>8</h1>
                <p>Days</p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-4 w-full">
              <h1 className="text-xl font-medium ">
                It feels good to be the first
              </h1>
              <p className="text-base text-gray-600">
                Get ready for the future of smartphones.Experience innovation
                like never before. Stay tuned for the big iPhone 15 pre-sale.
              </p>
            </div>
            <div className="w-full">
              <button className="bg-[#0C68F4] px-6 py-2 text-white font-medium rounded-lg">
                Register Now
              </button>
            </div>
          </div>
        </div>
        <div>hkkjjk</div>
      </div> */
}
