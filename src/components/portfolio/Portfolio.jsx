import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
    {
        id:1,
        title:"React social media",
        img: "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laboriosam, suscipit nam accusantium dignissimos cumque!",
    },

    {
        id:2,
        title:"React e-Commerce",
        img: "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laboriosam, suscipit nam accusantium dignissimos cumque!",
    },

    {
        id:3,
        title:"Chess app",
        img: "https://images.pexels.com/photos/6114998/pexels-photo-6114998.jpeg",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laboriosam, suscipit nam accusantium dignissimos cumque!",
    },

    {
        id:4,
        title:"Music app",
        img: "https://images.pexels.com/photos/290660/pexels-photo-290660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laboriosam, suscipit nam accusantium dignissimos cumque!",
    },
]

const Single = ({item}) =>{

    const ref = useRef();

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
                        <button>See Demo</button>
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