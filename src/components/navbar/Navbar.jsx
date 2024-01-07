import "./navbar.scss";
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
        <div className="wrapper">
            <motion.span 
              initial={{opacity:0, scale:0.5}} 
              animate={{opacity:1, scale:1}} 
              transition={{duration:0.5}}
             >
              Thompson Moses
            </motion.span>
            <div className="social">
                <a href="https://web.facebook.com/moses.thompson.758/" target="_blank"><img src="./facebook.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/moses-thompson-8136a1250/" target="_blank"><img src="./linkedin2.png" alt="" /></a>
                <a href="/https://github.com/ThompsonMoses"><img src="./github.png" alt="" /></a>
                <a href="/"><img src="./twitter.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar