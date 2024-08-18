import banner from "../../assets/fruit-plate2.png";
import { motion } from "framer-motion";
import { fadeUp } from "../utility/Animation";

const Banner2 = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
        {/* Banner text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={fadeUp(0.5)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Brand Info
            </motion.h1>
            <motion.p
              variants={fadeUp(0.7)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate autem animi vero eveniet vel similique accusamus sint
              nesciunt beatae nobis?
            </motion.p>
            <motion.p
              variants={fadeUp(0.9)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
              consequuntur!
            </motion.p>
            <motion.div
              variants={fadeUp(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn ">Learn More</button>
            </motion.div>
          </div>
        </div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            src={banner}
            alt="banner image"
            className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
