import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";


const list = [{
    title: "HTML",
    img: "https://icons.iconarchive.com/icons/martz90/hex/512/html-5-icon.png"
  },
  {
    title: "CSS",
    img: "https://icons.iconarchive.com/icons/martz90/hex/512/css-3-icon.png"
  },
  {
    title: "JavaScript",
    img: "https://ih0.redbubble.net/image.1766664556.6102/raf,360x360,075,t,fafafa:ca443f4786.jpg"
  },
  {
    title: "ReactJs",
    img: "https://ih1.redbubble.net/image.2517831628.1453/st,small,507x507-pad,600x600,f8f8f8.jpg"
  },
  {
    title: "TailwindCss",
    img: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-1024x615-fdeis5r1.png"
  },
  {
    title: "Bootstrap",
    img: "https://camo.githubusercontent.com/b872b9ada0c2c3d373bbb0c356eb4af353127335fc3d2e611964433864ab4de1/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67"
  },
  {
    title: "Python",
    img: "https://www.svgrepo.com/show/376344/python.svg"
  },
  {
    title: "SQL",
    img: "https://cdn3.vectorstock.com/i/1000x1000/54/87/sql-database-server-isolated-flat-web-mobile-icon-vector-28995487.jpg"
  },]
const Skills = () => {
  return (
    <div className='container container-sm px-10 max-w-4xl mx-auto mt-auto gap-10 reveal' id='skills'>
        <hr />
        <div>
            <h2 className="text-5xl font-bold text-center font-mono mb-10">
            My Skills
            </h2>
        </div>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="90%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
       
    </div>
  )
}

export default Skills
