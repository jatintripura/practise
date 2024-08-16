import { BiSupport } from "react-icons/bi";
import { CiMobile3 } from "react-icons/ci";
import { IoMdHappy } from "react-icons/io";
import { IoPulseOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
const servicesData = [
  {
    id: 1,
    titile: "Web Devlopment",
    link: "#",
    icon: <TbWorldWww />,
    delay: 0.2,
  },
  {
    id: 2,
    titile: "Mobile Devlopment",
    link: "#",
    icon: <CiMobile3 />,
    delay: 0.3,
  },
  {
    id: 3,
    titile: "Software Devlopment",
    link: "#",
    icon: <RiComputerLine />,
    delay: 0.3,
  },
  {
    id: 4,
    titile: "Satisfied Client",
    link: "#",
    icon: <IoMdHappy />,
    delay: 0.4,
  },
  {
    id: 5,
    titile: "SEO Optimization",
    link: "#",
    icon: <IoPulseOutline />,
    delay: 0.5,
  },
  {
    id: 6,
    titile: "24/7 Support",
    link: "#",
    icon: <BiSupport />,
    delay: 0.6,
  },
];
type delayProps = number;
const slideLeft = (delay: delayProps) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">
          Service we are provide
        </h1>
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {servicesData.map((service) => (
            <motion.div
              variants={slideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3 ">
                {service.titile}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
