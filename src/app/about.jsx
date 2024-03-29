'use client'

import { useEffect, useState } from "react";
import ProfessionsDisplay from "./professions";

export default function About() {

  const professions = ['Desarrollador Full Stack', 'Ingeniero en Sistemas Computacionales', 'Administrador de Empresas', 'Maestro en Estrategia Agroempresarial'];
  
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