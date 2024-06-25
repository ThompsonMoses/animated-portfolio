import "./parallax.scss"
import { motion, useScroll, useTransform, } from "framer-motion";
import { useRef } from "react";

 const parallax = ({type}) => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target: ref,
    offset:["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0,1],["0%", "500%"])
  const yBg = useTransform(scrollYProgress, [0,1],["0%", "100%"])
  
  return (
    <div 
    className="parallax"
    ref={ref} 
    >
        <motion.h1 style={{y: yText}}>{type=="services" ? "What I Do?" : "What I've Done"}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets" style={{y: yBg,
          backgroundImage:`url(${type==="services" ? "/planet.png" : "/sun.png"})`
        }}>

        </motion.div>
        <motion.div style={{x: yText}} className="stars"></motion.div>
    </div>
  ) 
}

export default parallax