import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import calpng from "./calpng.png";
import citasweb from "./citaspng.png"
import pythonpng from "./led.png"
import cv1 from "./cv1.png"
import './Projects.css';
import {Tooltip} from "@nextui-org/react";
import { motion, useAnimation } from "framer-motion";

 /*const proje = [{
    name : "Simple Calculator",
    tecnologias: "JavaScript Vanilla",
 },{
    name : "Web for Clinic / Appointments",
    tecnologias: "JavaScript Vanilla",
 },{
    name : "Python PDF Convert to mp3",
    tecnologias: "Python",
 },{
    name : "Mi CV",
    tecnologias: "Reactjs",
 }
];*/

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
                
                
                    <Tooltip content="Click to open web page" delay={0}
                closeDelay={0}>
                <Card className="py-4" isHoverable isPressable onClick={() => NewTab('https://calculadora-neon-ten.vercel.app/')}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">JavaScript Vanilla</p>
                    <small className="text-default-500">-</small>
                    <h4 className="font-bold text-large">Simple Calculator</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2 items-center">
                    <Image isZoomed
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={calpng}
                    width={270}
                    />
                </CardBody>
                </Card>
                </Tooltip>
                <Tooltip content="Click to open web page" delay={0}
                closeDelay={0}>
                    <Card className="py-4" isHoverable isPressable onClick={() => NewTab('https://web-citas.vercel.app/index.html')}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">JavaScript Vanilla</p>
                    <small className="text-default-500">-</small>
                    <h4 className="font-bold text-large">Web for Clinic / Appointments</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2 items-center">
                    <Image
                    isZoomed
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={citasweb}
                    width={270}
                    />
                </CardBody>
                </Card>
                    </Tooltip>
                    <Tooltip content={"Click to open web page"}>
                            <Card className="py-4" isHoverable isPressable onClick={() => NewTab('https://github.com/ispm19/PDFMP3Py')}>
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <p className="text-tiny uppercase font-bold">Python</p>
                            <small className="text-default-500">-</small>
                            <h4 className="font-bold text-large">Python PDF Convert to mp3</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2 items-center">
                            <Image
                            isZoomed
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src={pythonpng}
                            width={270}
                            />
                        </CardBody>
                        </Card>
                    </Tooltip>
                
                    <Tooltip 
                    content={"Click to open web page"}
                    >
                    <Card className="py-4" isHoverable isPressable onClick={() => NewTab('https://reactscv.vercel.app/')}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">Reactjs</p>
                    <small className="text-default-500">-</small>
                    <h4 className="font-bold text-large">Mi CV</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2 items-center">
                    <Image
                    isZoomed
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={cv1}
                    width={270}
                    
                    />
                </CardBody>
                </Card>
                    </Tooltip>
                
            </div>
        </div>
        
    )
}

export default Projects
