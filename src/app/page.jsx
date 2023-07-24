import About from "./about";
import Navbar from "./navbar";
import Projects from "./projects";
import TechSkills from "./techSkills";

export default function Home(){
  return(
    <div className="container mx-auto px-4"> 
      <Navbar />      
      <About className="h-screen mb-5" id='About'/>
      <TechSkills className="h-screen"/>
      <Projects className="h-screen"/>   
    </div>    
  )
}