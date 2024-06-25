import { motion } from "framer-motion";
import "./hero.scss";




const textvariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition:{
            duration: 2,
            repeat: Infinity
        },

    },
};





const slidervariants = {
    initial:{
        x:0,
    },
    animate:{
        x:"-220%",
        transition:{
            repeat: Infinity,
            duration: 20,
        },
    },
};
const Hero = () => {
    const handleDownload = () =>{
        const link = document.createElement('a');
        link.href = '/Thompson Moses Resume.pdf';
        link.download = '/Thompson Moses Resume.pdf';
        link.click();
    }
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" 
            variants={textvariants} 
            initial="initial" 
            animate="animate"
            >
                <motion.h2 variants={textvariants}>THOMPSON MOSES</motion.h2>
                <motion.h1 variants={textvariants}>WEB DEVELOPER</motion.h1>
                <motion.div variants={textvariants} className="buttons">
                    <motion.button className="downloadbtn" onClick={handleDownload} variants={textvariants} > 
                        {/* <a href="/Thompson Moses CV Resume.pdf" download={"/Thompson Moses CV Resume.pdf"}>
                            DOWNLOAD CV </a> */} 
                            Download Cv
                    </motion.button>
                    
                    <motion.button className="contact" variants={textvariants}>
                        <a href="mailto:thompsonmoses02@gmail.com&subject=Job%20Application&body=Hello%20Thompson%0D%0AMY%20Name%20is%20...">
                            CONTACT ME
                        </a>
                    </motion.button>
                </motion.div>
                <motion.img variants={textvariants} animate="scrollButton" src="/scroll.png" alt="" className="scroll" />
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={slidervariants} initial="initial" animate="animate">
            Writter Content Creator Influencer
        </motion.div>
        <div className="imageContainer">
            <img src="./hero1.png" alt="" height="100%" />
        </div>
    </div>
  )
}

export default Hero