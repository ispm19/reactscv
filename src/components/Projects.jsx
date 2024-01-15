import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import calpng from "./calpng.png";
import citasweb from "./citaspng.png"
import pythonpng from "./led.png"
import cv1 from "./cv1.png"
import './Projects.css';
import {Tooltip} from "@nextui-org/react";

 const proje = [{
    name : "Simple Calculator",
    tecnologias: "JavaScript Vanilla",
    link:'https://calculadora-neon-ten.vercel.app/',
    src: calpng,
 },{
    name : "Web for Appointments",
    tecnologias: "JavaScript Vanilla",
    link: 'https://web-citas.vercel.app/index.html',
    src: citasweb
 },{
    name : "PDF Convert to mp3",
    tecnologias: "Python",
    link: 'https://github.com/ispm19/PDFMP3Py',
    src: pythonpng
 },{
    
    name: "Billing System",
    tecnologias: "JavaScript / ASP.NET",
    link: "https://github.com/ispm19/Facturacion-project",
    src: pythonpng

 }
];

function NewTab(link1){
    return window.open(link1, '_blank')
    
};

const Projects = () => {
  return (
    
        <div
        className='reveal' 
        id='project'  
        >
        <h2 className="text-5xl font-bold text-center font-mono mb-10">My Personal Projects</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 container container-sm px-10 max-w-4xl mx-auto mt-auto gap-10'>
                {proje.map(
                    (item, index) => (
                        <Tooltip content="Click to open web page" delay={0}
                closeDelay={0}
                key={index}>
                <Card className="py-4" isHoverable isPressable onClick={() => NewTab(item.link)}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">{item.tecnologias}</p>
                    <small className="text-default-500">-</small>
                    <h4 className="font-bold text-large">{item.name}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2 items-center">
                    <Image isZoomed
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={item.src}
                    width={270}
                    />
                </CardBody>
                </Card>
                </Tooltip>
                    )
                )}
            </div>
        </div>
        
    )
}

export default Projects
