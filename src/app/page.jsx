import About from "./about";
import Certifications from "./certifications";
import Contacto from "./contacto";
import Footer from "./footer";
import Navbar from "./navbar";
import Projects from "./projects";
import TechSkills from "./techSkills";

export default function Home(){
  return(
    <div className="container mx-auto px-4"> 
      <Navbar />      
      <About/>
      <TechSkills/>
      <Certifications />
      <Projects />   
      <Contacto />
      <Footer />
    </div>    
  )
}