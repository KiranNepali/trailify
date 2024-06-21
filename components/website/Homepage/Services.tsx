import Image from "next/image";
import React from "react";

type Props = {};

function Services({}: Props) {
  return (
    <div className="w-full py-[5rem]">
      {/* title  */}
      <h1 className="title text-center mb-5 text-5xl text-secondary-500 font-semibold tracking-wide">
        What we are offering ?
      </h1>
      <div className="w-full md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 h-full">
        {/* map services  */}
        {ServicesData.map((item, index) => (
          <div
            key={item.id}
            className="w-full flex justify-start cursor-pointer items-start p-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] flex-col gap-3   text-start"
          >
            {/* IMG */}
            <div className="relative w-full">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.2] z-10"></div>
              <Image
                className="w-full object-cover"
                src="https://images.unsplash.com/photo-1504061770815-81c22ffcbaa7?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={item.name}
                width={500}
                height={300}
              />
            </div>

            <div className="w-full flex px-3 flex-col relative gap-1">
              {/* ICON  */}
              <div className="w-full absolute top-[-5%]  left-0 translate-y-[-50%] flex justify-center items-center">
                <div className="w-[5rem] h-[5rem] bg-secondary-100   rounded-full flex justify-center items-center">
                  icon
                </div>
              </div>
              {/* NAME */}
              <span className="title mt-[3rem] text-xl text-secondary-500 tracking-wide">
                {item.name}
              </span>
              {/* DESC */}
              <span className="text-sm text-secondary-400">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

const ServicesData = [
  {
    id: 1,
    name: "Mountain Exploration",
    desc: "Experience breathtaking mountain ranges and challenging climbs.",
    img: "https://example.com/images/mountain-exploration.jpg",
    icon: "",
  },
  {
    id: 2,
    name: "Forest Trekking",
    desc: "Discover the beauty and mystery of lush forests on guided treks.",
    img: "https://example.com/images/forest-trekking.jpg",
    icon: "",
  },
  {
    id: 3,
    name: "City Tours",
    desc: "Explore the cultural and historical landmarks of bustling cities.",
    img: "https://example.com/images/city-tours.jpg",
    icon: "",
  },
  {
    id: 4,
    name: "Glacier Hiking",
    desc: "Embark on an adventurous hike across stunning glaciers.",
    img: "https://example.com/images/glacier-hiking.jpg",
    icon: "",
  },
  {
    id: 5,
    name: "Cave Expeditions",
    desc: "Venture into the depths of fascinating cave systems.",
    img: "https://example.com/images/cave-expeditions.jpg",
    icon: "",
  },
];
