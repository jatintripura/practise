import { motion } from "framer-motion";
import banner from "../../assets/banner-bg.jpg";
import { fadeLeft, fadeUp } from "../utility/Animation";

const bgStyle = {
  backgroundImage: `url(${banner})`,
  backgoundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
const Banner3 = () => {
  return (
    <section>
      <div
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl"
      >
        {/* Banner Image */}
        <div></div>
        {/* Banner text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={fadeLeft(0.5)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Brand Info
            </motion.h1>
            <motion.p
              variants={fadeLeft(0.7)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate autem animi vero eveniet vel similique accusamus sint
              nesciunt beatae nobis?
            </motion.p>
            <motion.p
              variants={fadeLeft(0.9)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
              consequuntur!
            </motion.p>
            <motion.div
              variants={fadeLeft(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn ">Learn More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
