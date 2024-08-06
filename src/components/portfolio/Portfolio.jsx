import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "NetFlix Clone",
    img: "https://portfolio1-62c42.web.app/netflix-clone%20web%20site.png",
    desc: "I've crafted a Netflix-inspired clone using HTML, CSS, and React.js. Within this platform, users have the ability to view trailers for various movies.",
    url:"https://netflix-clone-c1763.web.app/"
  },
  {
    id: 2,
    title: "Dance Website",
    img: "https://portfolio1-62c42.web.app/Dance%20web%20site%20project.png",
    desc: "I've designed a dance-themed website using a combination of HTML, CSS, JavaScript, NodeJS, ExpressJS, and MongoDB. This platform allows users to input their details, which are then seamlessly stored in the database.",
    url:"https://github.com/Vaibhav777777/DanceWebsite"
  },
  {
    id: 3,
    title: "News App",
    img: "https://raw.githubusercontent.com/Vaibhav777777/News-app/main/Screenshot%202024-04-17%20175847.png",
    desc: "You can search latest new over there. Teck are the reactjs, javascript and nodejs",
    url:"https://github.com/Vaibhav777777/News-app"
  },
  {
    id: 4,
    title: "Note App",
    img: "https://portfolio1-62c42.web.app/Note%20app%20web%20site.png",
    desc: "I designed a versatile NoteApp that allows users to effortlessly add and delete content. Furthermore, it features an integrated search functionality, enabling users to quickly locate their desired notes with ease.",
    url:"https://note-app-c0c2f.web.app/?"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.url}>See Demo</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
