'use client'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Certifications extends Component {
    render() {
        return (
            <div> 
                <h1 className='text-3xl p-4 text-center'> Certificaciones </h1>
                <Carousel>
                    <div>
                        <a href="img/fullStackJS_large.jpg" target="_blank" rel="noopener noreferrer">
                            <img src="img/fullStackJS.jpg" className='w-50 h-40 object-contain cursor-pointer'/>                        
                        <p className="bg-inherit">FullStack Web Developer</p>
                        </a>
                    </div>
                    <div>
                        <a href="img/devfdataen_large.jpg" target="_blank" rel="noopener noreferrer">
                            <img src="img/devfdataen.jpg" className='w-50 h-40 object-contain cursor-pointer'/>                        
                        <p className="bg-inherit">Master en Data Sciense</p>
                        </a>
                    </div>
                    <div>
                        <a href="img/alkemyCertified_large.png" target="_blank" rel="noopener noreferrer">
                            <img src="img/alkemyCertified.png" className='w-50 h-40 object-contain cursor-pointer'/>                        
                        <p className="bg-inherit">FullStack JS</p>
                        </a>
                    </div>
                </Carousel>
            </div>
        );
    }
};

module.exports = Certifications;
