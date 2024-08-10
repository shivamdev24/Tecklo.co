import Image from 'next/image';
import React from 'react'


import Sky1 from '../../../public/images/sk1.png'
import Sky2 from '../../../public/images/sk2.png'
import St1 from '../../../public/images/st1.png'
import St2 from '../../../public/images/st2.png'
import Wd1 from '../../../public/images/wd1.png'
import Wd2 from '../../../public/images/wd2.png'









const Project = [
  {
    projectName: "Shelves Tech",
    projectDescription:
      "We make advanced medical technology accessible worldwide, ensuring all healthcare facilities have access to top equipment, regardless of location or budget, to improve outcomes and save lives.",
    Live: "https://shelvestech.com/",
    img1: St1,
    img2: St2,
  },
  {
    projectName: "WoodAndVeneer",
    projectDescription:
      "Aarv Wood and Veneer Pvt. Ltd., led by the Agarwal family, is a rising name in India's wood and veneer industry, with nearly 20 years of expertise. Mr. Vinay Agarwal, Mrs. Richa Agarwal, and Mr. Rupesh Tripathi drive its growth and stability.",
    Live: "https://woodandveneer.in/",
    img1: Wd1,
    img2: Wd2,
  },
  {
    projectName: "Sky Candy",
    projectDescription:
      "Welcome to Bir Billing, India's paragliding capital, where adventure meets breathtaking views. Soar from 2,400 meters over lush valleys, forests, and snow-capped peaks in the scenic Dhauladhar Range for an unforgettable experience.",
    Live: "https://www.birparagliding.in/",
    img1: Sky1,
    img2: Sky2,
  },
];

function page() {
  return (
    <>
      <section className=" overflow-hidden h-80 relative">
        <div className=" ">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 -top-20 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-900/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          >
            <rect
              width="100%"
              height="100%"
              fill="url(#:r0:)"
              stroke-width="0"
            ></rect>
            <svg x="50%" y="-96" stroke-width="0" className="overflow-visible">
              <path
                transform="translate(64 160)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              ></path>
              <path
                transform="translate(128 320)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              ></path>
              <path
                transform="translate(288 480)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              ></path>
              <path
                transform="translate(512 320)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              ></path>
              <path
                transform="translate(544 640)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              ></path>
              <path
                transform="translate(320 800)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"
              ></path>
            </svg>
            <defs>
              <pattern
                id=":r0:"
                width="96"
                height="480"
                x="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(0 -96)"
                fill="none"
              >
                <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"></path>
              </pattern>
            </defs>
          </svg>
        </div>
        <div className="justify-center items-center flex h-full">
          <h1 className="text-gray-700 font-bold text-4xl text-center ">
            A glimpse into our <span className="text-blue-500">projects</span>
          </h1>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-10 py-10 px-5">
            {Project.map((props, index) => (
              <div
                key={index}
                className="flex flex-col-reverse md:flex-row gap-10 py-10 items-center"
              >
                <div className="w-full md:w-1/3 flex flex-col gap-4">
                  <h1 className="text-4xl font-bold text-blue-500">
                    {props.projectName}
                  </h1>
                  <p className="text-base text-gray-600">
                    {props.projectDescription}
                  </p>
                  <a
                    className="bg-gray-700 p-2 w-full text-center rounded text-white hover:bg-blue-800 duration-500"
                    href={props.Live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Preview
                  </a>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="border rounded-[12px] pt-6 pl-6 overflow-hidden w-full md:w-96 bg-gray-800 shadow-md">
                    <Image
                      src={props.img1}
                      width={1000}
                      height={1000}
                      alt="project image"
                      className="w-full md:w-96 rounded border"
                    />
                  </div>
                  <Image
                    src={props.img2}
                    width={1000}
                    height={1000}
                    alt="project image"
                    className="w-full md:w-96 rounded-[10px] shadow-md border"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default page