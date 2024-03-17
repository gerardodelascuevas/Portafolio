'use client'

import { useEffect, useState } from "react";
import ProfessionsDisplay from "./professions";

export default function About() {

  // const TypewriterEffect = () => {
  //   const professions = ['Desarrollador Full Stack', 'Maestro en Estrategia Agroempresarial'];
  //   const [index, setIndex] = useState(0); // Para controlar el índice de la profesión actual
  //   const [subIndex, setSubIndex] = useState(0); // Para controlar el índice del carácter actual en la profesión
  //   const [reverse, setReverse] = useState(false); // Para saber cuándo agregar o quitar caracteres
  //   const [text, setText] = useState(''); // El texto actual a mostrar
  //   const [speed, setSpeed] = useState(150); // Velocidad de escritura
  // console.log(text)
  //   useEffect(() => {
  //     //COMENZAR DE NUEVO
  //     if (index === professions.length) setIndex(0);
  //     //COMENZAR A BORRAR
  //     if (subIndex === professions[index].length + 1 && !reverse) {
  //       setReverse(true);
  //       setSpeed(100); 
  //       //COMENZAR A ESCRIBIR
  //     } else if (subIndex === 0 && reverse) {
  //       setReverse(false);
  //       setText(' ')
  //       setIndex((prev) => (prev + 1) % professions.length);
  //       setSpeed(150); // Velocidad de escritura
  //     }
  
  //     const timeout = setTimeout(() => {
  //       setText((prev) => {
  //         if (prev === undefined) return ' '; // Esto deja el estado sin cambios si prev es undefined
  //         return reverse ? prev.slice(0, prev.length - 1) : prev + professions[index][subIndex];
  //       });
        
  //       setSubIndex((prev) => (reverse ? prev - 1 : prev + 1));
  //     }, speed);
  
  //     return () => clearTimeout(timeout);
  //   }, [subIndex, index, reverse, speed]);
  
  //   return <h2 className="text-2xl text-center">{text}</h2>;
  // };    
  const professions = ['Desarrollador Full Stack', 'Maestro en Estrategia Agroempresarial'];
  return (
    <div className="mb-10 mt-20 " id="about">
      <h1 className="text-3xl text-center">Hola Soy Gerardo</h1>
      <div>
      <ProfessionsDisplay professions={professions} />
    </div>
      <div className="container mx-auto mt-5 text-center overflow-hidden shadow-lg">
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5 mx-auto flex justify-center">   
          <img src="./img/pic1.jpeg" alt="gdlcp" className="h-80 w-auto rounded-full " />      
          <p className="m-4 text-lg">
            Desarrollador FullStack en búsqueda de nuevos retos. 
            Apasionado de la informática y 
            la programación cuento con amplia experiencia en los
            stacks PERN, MERN, con Electron JS, PHP, Laravel, desarrollo de aplicaciones 
            web, aplicaciones desktop y desarrollo de APIs. 
            </p>              
        </div>   
        <a className="p-5 bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mx-8 " href='./img/gerardodelascuevas.pdf' download>Descargar CV</a>       
      </div>
    </div>
  );
}