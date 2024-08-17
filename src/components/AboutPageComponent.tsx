"use client";

import React from "react";
import { Fade } from "react-awesome-reveal";

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
        <div className="justify-center items-center flex flex-col gap-4 h-full px-5">
          <Fade direction="down">
            <h1 className="text-gray-700 font-bold text-4xl text-center ">
              Welcome to <span className="text-blue-500">Tecklo</span>
            </h1>
            <p className="text-base font-medium text-gray-600 text-center max-w-7xl mx-auto">
              Where innovation meets diversity in the heart of Canada.
              We&apos;re not just a tech startup. we&apos;re the backbone of
              creativity and expertise, driven by a team of exceptional minds
              from all corners of the globe.
            </p>
          </Fade>
        </div>
      </section>
      <section className="border-t py-10 px-5">
        <div className="max-w-7xl mx-auto flex flex-col gap-5">
          <Fade direction="up">
            <h1 className="text-blue-500 text-4xl font-bold  underline">
              About Us
            </h1>
          </Fade>
          <Fade direction="up">
            <p>
              <strong className="text-lg"> Our mission is simple:</strong> To
              turn your business needs into reality with the most effective
              technology solutions and a touch of brilliance. Our team is a
              blend of visionaries, engineers, designers, and strategists, each
              bringing their unique perspective and skill set to the table. This
              rich tapestry of backgrounds and experiences fuels our ability to
              tackle complex challenges and deliver solutions that exceed
              expectations.
            </p>
          </Fade>
          <Fade direction="up">
            <p>
              What sets us apart is our commitment to collaboration and
              inclusivity. We believe that the best ideas come from a diverse
              group of thinkers who are not afraid to push boundaries and
              challenge the status quo. By fostering an environment where
              creativity thrives and different viewpoints are celebrated, we
              ensure that every project benefits from a wealth of perspectives
              and innovative approaches.
            </p>
          </Fade>
        </div>
        <div className="max-w-7xl mx-auto mt-6 flex flex-col gap-5">
          <Fade direction="up">

          <h2 className="text-gray-800 text-2xl font-bold">Our Story</h2>
          </Fade>
<Fade direction="up">

          <p>
            Based out of Canada, we are proud to harness the strengths of our
            team to create solutions that not only meets but anticipates the
            needs of our clients. From developing groundbreaking software to
            crafting tailored tech solutions, we are dedicated to helping
            businesses achieve their goals and drive growth in a rapidly
            evolving digital landscape.
          </p>
</Fade>
<Fade direction="up">

          <p>
            At Tecklo, we&apos;re more than just a team; we&apos;re a dream
            team, united by our passion for technology and our commitment.
          </p>
</Fade>
<Fade direction="up">

          <p>
            Join us on this exciting journey, and let&apos;s build the future
            together.
          </p>
</Fade>
<Fade direction="up">

          <p>
            <strong>
              Welcome to Tecklo where we turn your imagination into reality.
            </strong>
          </p>
</Fade>
        </div>
      </section>
    </>
  );
}

export default page;
