import Navbar from "../nav/Navbar";
import iphone from "../../assets/iPhone X.png";

const Hero = () => {
  return (
    <section>
      {" "}
      <div className="container">
        <Navbar />

        <div className="pt-28 flex items-center justify-center">
          <div className="max-w-[350px] md:max-w-[700px] flex flex-col items-center justify-center gap-y-4">
            <h1 className="text-3xl md:text-5xl !leading-snug font-bold text-primary text-center">
              Two line long header example for your web project
            </h1>
            <p className="text-lg font-normal !leading-snug text-secondary text-center">
              Poster can be one of the effective marketing and advertising
              materials. It is also a great tool to use when you want to present
              your.
            </p>
            <div className="w-full flex flex-col items-center justify-center">
              <div className=" max-w[350px] md:w-[550px] space-y-4 py-4 md:flex items-center justify-center gap-4  ">
                <input
                  type="text"
                  className="p-3 w-full outline-none border border-[#DBDBDB] overflow-hidden rounded placeholder:text-secondary"
                  placeholder="Email"
                />
                <div className="text-center ">
                  <button className="btn-all ">Subscribe</button>
                </div>
              </div>
              <p className="text-center text-lg text-secondary !leading-snug max-w-[500px]">
                No spam, notifications only about new products, updates and
                freebies. You can always unsubscribe.
              </p>
            </div>
            <div className="flex item justify-center pt-10">
              <img src={iphone} alt="iphone" />
            </div>
            <div className="py-28 bg-white">
              <h1 className="text-2xl md:text-4xl font-bold !leading-snug text-center max-w-[700px] ">
                Like rock stars, asteroids have been given their fair share of
                urban myth and lore. Many have attributed the extinction of the
                dinosaurs to the impact of a huge asteroid on the earth.{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
