'use client'
import React, { useState } from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "yet-another-react-lightbox/styles.css";

export default function Certificacions(){
  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const galleryTab = [
    {
      imageUrl: "img/jalau.jpg",
      type: "Certification",
      title: "Full Stack Web Developer",
    },    
    { 
      imageUrl: "img/devfdataen.jpg",
      type: "Certification",
      title: "Master en Data Sciense",
    },
    {
      imageUrl: "img/alkemyCertified.png",
      type: "Certification",
      title: "FullStack JS Developer",
    },
    {
      imageUrl: "img/fullStackJS.jpg",
      type: "Certification",
      title: "Full Stack Web Developer",
    },
    {
      imageUrl: "img/ibmcoursera.jpg",
      type: "Certification",
      title: "Application Security for developers",
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true, 
  };

  return (
    <div className="w-full" id="certifications">
      <h1 className='text-3xl p-4 text-center'> Certificaciones </h1>
      <Slider {...settings}>
        {galleryTab.map((x, index) => (
          <div key={index} className="md:h-[15vw] "> 
            <div className="group h-full flex justify-center" >
              <div
                className="bg-cover bg-center h-80 w-96 bg-no-repeat items-center"
                style={{ backgroundImage: `url("${x.imageUrl}")` }}
              >
                <div className="text-3xl text-white absolute bottom-0 left-2 z-10">
                  <div>{x.type}</div>
                  <div>{x.title}</div>
                </div>
              </div>
              <div
                className="bg-black opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
                onClick={() => {
                  setOpen(true);
                  setSelectedImageIndex(index);
                }}
              >
                <p className="text-white">
                  <AiOutlineExpandAlt className="text-5xl border w-16 h-16 bg-neutral-500 hover:bg-white hover:text-black p-3 cursor-pointer rounded-full" />
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        showPrevNext={true}
        currentSlide={selectedImageIndex}
        slides={galleryTab.map(item => ({ src: item.imageUrl }))} 
      />
    </div>
  );
};

