import { motion } from "framer-motion";
import { BsPencilSquare } from "react-icons/bs";
import { FaCode, FaHome, FaMailBulk, FaUser } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";

const Menu = () => {
  const links = [
    { name: "Home", icon: <FaHome size={24} />, href: "./" },
    { name: "About", icon: <FaUser size={24} />, href: "./about" },
    { name: "Projects", icon: <FaDisplay size={24} />, href: "./projects" },
    { name: "Skills", icon: <FaCode size={24} />, href: "./skills" },
    { name: "Contact", icon: <FaMailBulk size={24} />, href: "./contact" },
    { name: "Blog", icon: <BsPencilSquare size={24} />, href: "./blog" },
  ];

  return (
    <nav className="fixed md:bottom-4 md:left-1/2 left-8 md:mt-0 mt-20 transform -translate-x-1/2 flex md:flex-row flex-col md:gap-6 gap-2 bg-white/20 backdrop-blur-lg p-3 rounded-xl px-6">
      {links.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          className="relative flex flex-col items-center justify-center p-2 text-white font-bold text-sm"
          initial={{ scale: 1, skewX: 0 }}
          whileHover={{ scale: 1.1, skewX: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            clipPath: "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)",
          }}
        >
          {link.icon}
          <span className="text-xs mt-1">{link.name}</span>
        </motion.a>
      ))}
    </nav>
  );
};

export default Menu;
