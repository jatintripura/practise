import blog from "../../assets/blog/image.png";
import blog1 from "../../assets/blog/blog image1.png";
import blog2 from "../../assets/blog/blog image.png";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TfiLayoutMediaCenterAlt } from "react-icons/tfi";

import { CiStopwatch } from "react-icons/ci";

import { SlCalender } from "react-icons/sl";
import { MdArrowForward } from "react-icons/md";
const Blog = () => {
  return (
    <div className="container py-10">
      <div className="flex items-center justify-between py-4 border-b-2">
        <h1 className="text-3xl font-semibold">Our Blog</h1>
        <div className="flex items-center gap-x-4">
          <p className="text-lg font-normal">View all</p>
          <span>
            <MdArrowForward className=" text-lg" />
          </span>
        </div>
      </div>
      <div className="flex sm:flex-col md:flex-row gap-20  items-center justify-center pt-10">
        <div className="flex flex-col  items-start gap-y-3 w-full md:max-w-[390px] md:h-[400px] rounded-lg overflow-hidden  bg-[#f7f7f7] hover:bg-white drop-shadow hover:drop-shadow-md duration-200 ">
          <img src={blog} alt="blog-image" className="w-full" />
          <div className="flex flex-col gap-y-2 p-2">
            <div className="flex items-center gap-x-20">
              <div className="flex items-center gap-x-2">
                <span>
                  <SlCalender />
                </span>
                <span>12 August,2024</span>
              </div>
              <div className="flex items-center gap-x-2">
                <span>
                  <CiStopwatch />
                </span>
                <span>12 mint read.</span>
              </div>
            </div>
            <h1 className="text-lg font-medium">
              Meta Platforms plans to release free software that...
            </h1>
            <p className="text-base">
              The parent company of Facebook, Meta Platforms, is introducing
              software to help developers
            </p>
          </div>
        </div>
        <div className="max-w-[800px] lg:h-[400px]  flex flex-col items-center gap-y-14 ">
          <div className="flex sm:flex-col md:flex-row items-center gap-x-6 rounded-lg overflow-hidden bg-[#f7f7f7] hover:bg-white drop-shadow hover:drop-shadow-lg duration-200">
            <div>
              <img
                src={blog2}
                alt="blog-img"
                className=" w-full lg:w-[400px] h-[180px] object-cover"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2 p-2 ">
              <h1 className="text-xl font-medium text-secondary-300">
                8 Things You Probably Didnt Know About Headphones
              </h1>
              <p className="text-base ">
                Owning a headphone could mean a different thing for different
                people. For some, it act as a fashion statement. It’s easy to
                spot these people, the headphone are almost always just hanging
                around the neck.
              </p>
              <div className="flex items-center gap-x-2">
                <span>
                  <SlCalender />
                </span>
                <span>12 August,2024</span>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col lg:flex-row items-center gap-x-6 rounded-lg overflow-hidden  bg-[#f7f7f7] hover:bg-white drop-shadow hover:drop-shadow-lg duration-200">
            <div className="">
              <img
                src={blog1}
                alt="blog-img"
                className=" w-full lg:w-[300px] h-[180px] object-cover"
              />
            </div>
            <div className="flex flex-col items-start p-2 gap-y-2">
              <h1 className="text-xl font-medium ">
                Analyzing the August 17th Bitcoin Price Drop
              </h1>
              <p className="text-base ">
                On August 17th at 9:30PM UTC, Bitcoin’s price dropped more than
                8% in a 10-minute window, to a two-month low of under $26k. This
                pulled
              </p>
              <div className="flex items-center gap-x-2">
                <span>
                  <SlCalender />
                </span>
                <span>12 August,2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-20 pb-10 text-xl font-medium">
        <div className="flex items-center gap-x-4">
          <span>
            <TfiLayoutMediaCenterAlt className="text-4xl" />
          </span>
          <p>Latest and Greatest Tech</p>
        </div>
        <div className="flex items-center gap-x-4">
          <span>
            <AiOutlineSecurityScan className="text-4xl" />
          </span>
          <p>Guarantee</p>
        </div>
        <div className="flex items-center gap-x-4">
          <span>
            <LiaShippingFastSolid className="text-4xl" />
          </span>
          <p>Free Shipping over 1000$</p>
        </div>
        <div className="flex items-center gap-x-4">
          <span>
            <MdOutlineSupportAgent className="text-4xl" />
          </span>
          <p>24/7 Support</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
