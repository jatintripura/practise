import Nav from "../navbar/Nav";
import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <Nav />
      <div className="container grid grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col items-center sm:items-start space-y-8 sm:space-y-20 py-10">
          <h1 className="text-4xl md:text-5xl text-primary-700 font-semibold">
            Tech Heim
          </h1>
          <p className="text-lg text-primary-700 font-semibold">
            "Join the{" "}
            <span className="text-secondary-400">digital revolution</span>"
          </p>
          <button className="text-base text-white bg-secondary-400 py-2 px-14 rounded-md">
            Explore More
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="max-w-[400px] md:max-w-[600px]"
            src={hero}
            alt="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
