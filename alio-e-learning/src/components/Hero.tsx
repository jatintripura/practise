import { IoIosArrowRoundForward } from "react-icons/io";
import hero from "../assets/hero.png";
import blob from "../assets/blob.svg";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
type delay = number;
export const fadeUp = (delay: delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },

    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stifness: 100,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <section>
      <div className="container bg-light overflow-hidden relative">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
          {/* Brand Info  */}
          <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
            <div className="text-center md:text-left space-y-10  lg:max-w-[400px]">
              <motion.h1
                variants={fadeUp(0.6)}
                initial="initial"
                animate="animate"
                className="text-3xl lg:text-5xl font-bold !leading-snug"
              >
                Let's Learn to build a{" "}
                <span className="text-secondary">Website</span> for your
                business
              </motion.h1>
              <motion.div
                variants={fadeUp(0.8)}
                initial="initial"
                animate="animate"
                className="flex justify-center md:justify-start"
              >
                <button className="btn-primary flex items-center gap-2 group ">
                  Get Started
                  <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
                </button>
              </motion.div>
            </div>
          </div>
          {/* Hero Image  */}
          <div className="flex justify-center items-center">
            <motion.img
              variants={fadeUp(0.8)}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
              src={hero}
              alt="hero-image"
              className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
            />
            <motion.img
              variants={fadeUp(0.8)}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
              src={blob}
              alt="hero-svg"
              className="absolute -bottom-32 w-[1000px] md:w-[1500px] z-[1] hidden md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
