import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>About Us</h2>
          <p>
            A dedicated Software Developer/Web Developer based in Bhilai, Chhattisgarh, India. 📍
            I recently graduated with a Bachelor of Technology in Computer Science Engineering from SRM Institute of Technology. Afteward, I undertook an internship as a Software Developer, specializing in React.js. I have gained experience in web development, specifically in HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. During my studies, I developed a some project that involved building a web application. The application was built using Node.js and Express.js as the backend, and MongoDB as the database. I also used HTML, CSS, and JavaScript to create a responsive and user-friendly front-end interface. <br /> <br />
            Tech Stack: HTML & CSS, JavaScript,Reactjs, Node.js, Express.js, and MongoDB
          </p>

        </motion.div>


      </motion.div>
    </motion.div>
  );
};

export default Services;
