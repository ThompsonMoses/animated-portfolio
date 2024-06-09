import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
    {
        id:1,
        title:"React social media",
        img: "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg",
        des: "Dynamic and Fully responsive social media platform with Facebook user interface design and a chat feature where you can connect with friends and join vibrant community.",
        url: "https://www.google.com/"
    },

    {
        id:2,
        title:"React e-Commerce",
        img: "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        des: "A Jumia prototype, designed to make shopping experience seemlessly and enjoyable with its resposive and easy to use features for better functionality.",
        url: "https://thompsonmoses.github.io/JUMIA/"
    },

    {
        id:3,
        title:"Chess app",
        img: "https://images.pexels.com/photos/6114998/pexels-photo-6114998.jpeg",
        des: "Developed to enhance the chess-playing experience for all skill levels. It offers interactive tutorials, AI opponents a with adjustable difficulty, making it a comprehensive tool for mastering Chess.",
        url: "https://www.google.com/"
    },

    {
        id:4,
        title:"Music app",
        img: "https://images.pexels.com/photos/290660/pexels-photo-290660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        des: "Developed to deliver a seamless and pesonalized listening experience. It features an extensive library of songs curated playlists, intelligent recommendations, offline listening, and social sharing capabilities, all designed to connect users with their favorite music effortlessly.",
        url: "https://www.google.com/"
        
    },
]

const Single = ({item}) =>{

    const ref = useRef();
    const buttonRefs = useRef([]);

    const handleRedirect = (url) => {
        window.open(url, '_blank');
    };

    const {scrollYProgress} = useScroll({
        target: ref, 
    });
    const y = useTransform(scrollYProgress, [0,1], [-300,300]);
    return(
        <section >
            <div className="container" >
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.des}</p>
                        <button rel={(el) => (buttonRefs.current[item.id]= el)}
                            onClick={() => handleRedirect(item.url) 
                        }>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map(item =>(
            <Single item={item} key={item.id} />
        ))}
    </div>
    
  )
}

export default Portfolio