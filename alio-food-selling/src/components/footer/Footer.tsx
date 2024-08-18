import { FaFacebook, FaInstagram, FaLeaf, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="bg-primary/10 text-white py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container flex justify-between items-center"
      >
        {/* Logo Section */}
        <div className="flex items-center gap-2 text-2xl font-bold uppercase">
          <p className="text-primary">Fruits</p>
          <p className="text-secondary">Store</p>
          <FaLeaf className="text-green-500" />
        </div>
        {/* Social media section */}
        <div className="text-3xl flex items-center gap-4 mt-6 text-gray-700">
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
