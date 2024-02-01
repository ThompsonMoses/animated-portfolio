import { useRef } from "react";
import "./services.scss"
import { motion, useInView } from "framer-motion";

const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        }
    },
}

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref,{margin:"-100px"})

  return (
    <motion.div 
    className='services' 
    variants={variants} 
    initial="initial" 
    ref={ref}
    animate={ "animate"}
    >
        
        <motion.div className="textContainer" variants={variants}>
            <p>i focus on helping your brand grow
                <br />and move foward</p>
            <hr />
        </motion.div>

        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img className='titleImg' src="./people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                </h1>
            </div>
            <div className="title">
            <h1>
                <motion.b whileHover={{color:"orange"}}>For your</motion.b> Business
            </h1>
            <button>WHAT WE DO</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgrey", color: "black"}}>
                <h2>Custom Web Design</h2>
                <p>Crafting bespoke websites and applications that align with your brand identity and business objectives
                </p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgrey", color: "black"}}>
                <h2>Responsive Design</h2>
                <p>
                    Ensuring a seamless user experience across all devices with responsive and mobile-friendly designs
                </p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgrey", color: "black"}}>
                <h2>Web Application Development</h2>
                <p>
                    Developing dynamic and feature-rich web applications that enhances user 
                    engagement and streamline process
                </p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgrey", color: "black"}}>
                <h2>Maintenance and support</h2>
                <p>
                    Providing ongoing maintenance and support services to ensure the continued success 
                    and longevity of your digital assets 
                </p>
                <button>GO</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services