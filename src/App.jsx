import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import About from "./components/about/About";

const App = () => {
  return <div>
    <section id="Homepage"> 
      <Navbar /> 
      <Hero/>
    </section>
    {/* <section id="Services">
      <Parallax type="services"/>
    </section> */}
    {/* <section>
      <Services/>
    </section> */}
    <section id="About">
      <About/>
    </section>
    {/* <section id="Portfolio">
      <Parallax type="porfolio"/>
    </section>
    <Portfolio/> */}
    {/* <section id="Contact">
      <Contact/>
    </section> */}
    
  </div>;
};

export default App;
