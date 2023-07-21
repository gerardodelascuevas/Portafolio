import About from "./about";
import Navbar from "./navbar";

export default function Home(){
  return(
    <div class="container mx-auto px-4"> 
      <Navbar />
      <h1 className="text-5xl text-center"> Hola Soy Gerardo, desarrollador Full Stack JavaScript </h1>
      <About />
     

    </div>
    
  )
}