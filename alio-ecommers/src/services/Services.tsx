import { MdLocalShipping } from "react-icons/md";
import serviceData from "@/assets/data/serviceData";

import { motion } from "framer-motion";

function Services() {
  return (
    <>
      {serviceData.map((item, index) => {
        return (
          <motion.div
            whileHover={{ scale: 1.1 }}
            key={index}
            style={{ background: `${item.bg}` }}
            className="w-[25%] flex items-center justify-center gap-x-2 rounded-md p-3"
          >
            <div className="border rounded-full p-3 bg-gray-800">
              <MdLocalShipping className="text-white " />
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-base">{item.subtitle}</p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}

export default Services;
