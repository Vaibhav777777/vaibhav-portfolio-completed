import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Vaibhav Dev
        </motion.span>
        <div className="social">
          <a href="https://github.com/Vaibhav777777">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.instagram.com/vaibhavsoni8626/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/vaibhav-soni-7390b4225/">
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
