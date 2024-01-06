import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import htmlimg from "./descarga.png"

const list = [{
    title: "HTML",
    img: htmlimg
  },
  {
    title: "CSS",
    img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png",
    price: "$3.00",
  },
  {
    title: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    price: "$10.00",
  },
  {
    title: "Reactjs",
    img: "https://solidstudio.io/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Flofvu8al%2Fproduction%2F39d6cef5649ed5c35b1420198a362baf1bff97a6-1280x939.jpg&w=1080&q=75",
    price: "$5.30",
  },
  {
    title: "TailwindCss",
    img: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-1024x615-fdeis5r1.png",
    price: "$15.70",
  },
  {
    title: "Bootstrap",
    img: "https://camo.githubusercontent.com/b872b9ada0c2c3d373bbb0c356eb4af353127335fc3d2e611964433864ab4de1/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e322f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67",
    price: "$8.00",
  },
  {
    title: "Python",
    img: "https://www.svgrepo.com/show/376344/python.svg",
    price: "$7.50",
  },
  {
    title: "SQL",
    img: "https://cdn-icons-png.flaticon.com/512/4299/4299956.png",
    price: "$12.20",
  },]
const Skills = () => {
  return (
    <div className='container container-sm px-10 max-w-4xl mx-auto mt-auto gap-10' id='skills'>
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
