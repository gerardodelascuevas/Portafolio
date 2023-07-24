export default function About() {
  return (
    <div className="mb-10" id="About">
      <h1 className="text-3xl text-center">Hola Soy Gerardo</h1>
      <h2 className="text-2xl text-center">Desarrollador Full Stack JavaScript</h2>
      <div className="container mx-auto mt-5 text-center overflow-hidden shadow-lg">
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5 mx-auto flex justify-center">   
          <img src="./img/pic1.jpeg" alt="gdlcp" className="h-80 w-auto rounded-full " />      
          <p className="m-4 text-lg">Desarrollador FullStack en búsqueda de nuevos retos. 
            Apasionado de la informática y la programación he realizado diversos proyectos 
            académicos, de voluntariado y freelance con los stacks PERN, MERN y con Electron JS</p>              
        </div>   
        <a className="p-5 bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mx-8 " href='./gerardodelascuevas.pdf' download>Descargar CV</a>       
      </div>
    </div>
  );
}