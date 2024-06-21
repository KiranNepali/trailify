import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
type Props = {};

function AboutUs({}: Props) {
  return (
    <>
      <div className="w-full py-[5rem]  flex justify-center items-center gap-10">
        {/* about us  */}
        <div className="w-[40%] flex flex-col gap-2 items-start justify-center h-[70%]">
          <span className="text-secondary-500 text-lg font-medium">
            Our Story
          </span>
          <p className="text-secondary-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            eum doloremque fugiat esse ullam vero perferendis accusamus qui
            asperiores eius. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Exercitationem, dolorum quo. Aperiam totam pariatur natus,
            cumque error voluptatum velit sit! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quas, modi.
          </p>
          <button className="px-10 py-3 text-secondary-50 font-medium  bg-primary-400 border-b-2 border-primary-700 cursor-pointer mt-5">
            Discover more
          </button>
        </div>

        {/* image  */}
        <Image
          className="w-[40%] object-cover object-center h-[70vh]"
          width={1000}
          height={1000}
          alt="about-us-img"
          src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></Image>
      </div>

      {/* middle  */}
      <div className="w-full flex-col gap-2 pb-[5rem]">
        <h1 className="text-8xl w-[50%] tracking-wide title font-bold text-secondary-500">
          LET'S GET TO <br /> KNOW EACH OTHER
        </h1>
        <div className="w-full flex justify-end">
          <p className="w-[60%] text-secondary-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
            deleniti aperiam dolorem voluptate perferendis quibusdam laudantium
            nisi voluptatem aut, nostrum, consectetur soluta est iusto saepe
            ipsam, numquam dignissimos sint aliquam. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Soluta quo itaque libero fuga amet
            dicta officia earum excepturi. Quaerat voluptatem, quos error
            dignissimos non possimus a animi laboriosam numquam dolor!
          </p>
        </div>
      </div>

      <div className="w-[70%] mx-auto grid grid-cols-3  gap-10 pb-[5rem]">
        <div className="flex flex-col gap-3">
          {/* image  */}
          <div className="w-full h-[70vh] p-3 bg-zinc-200 relative  flex justify-center items-center">
            <Image
              width={1000}
              height={1000}
              src="https://images.unsplash.com/photo-1517934274943-d1749ff2d7a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="expedition-image"
              className="absolute top-0 left-0 w-full h-[50vh] object-cover object-center"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.5]"></div>
            {/* text  */}
            <div className="relative h-full flex flex-col justify-end">
              <Icon
                icon="mdi:target-variant"
                className="w-[2.5rem] h-[2.5rem] object-cover object-center absolute top-[2%] right-[2%] rotate-45 text-secondary-50"
              />
              <span className="title text-3xl text-secondary-50 italic">
                Our mission
              </span>
              <p className="text-secondary-50 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                nostrum eligendi, harum voluptatibus odit ipsam quia molestiae
                id beatae, deleniti aliquam. Nesciunt aspernatur, quam sequi
                iure
              </p>
            </div>
          </div>
        </div>
        <h1 className="w-full h-full flex justify-center items-center title italic title font-bold text-secondary-500 text-5xl">
          WHAT WE DO?
        </h1>
        {/* image  */}
        <div className="flex flex-col gap-3">
          {/* image  */}
          <div className="w-full h-[70vh] p-3 bg-zinc-200 relative  flex justify-center items-center">
            <Image
              width={1000}
              height={1000}
              src="https://images.unsplash.com/photo-1517934274943-d1749ff2d7a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="expedition-image"
              className="absolute top-0 left-0 w-full h-[50vh] object-cover object-center"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.5]"></div>
            {/* text  */}
            <div className="relative h-full flex flex-col justify-end">
              <Icon
                icon="tabler:device-vision-pro"
                className="w-[2.5rem] h-[2.5rem] object-cover object-center absolute top-[2%] right-[2%] rotate-45 text-secondary-50"
              />
              <span className="title text-3xl text-secondary-50 italic">
                Our vision
              </span>
              <p className="text-secondary-50 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                nostrum eligendi, harum voluptatibus odit ipsam quia molestiae
                id beatae, deleniti aliquam. Nesciunt aspernatur, quam sequi
                iure
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
