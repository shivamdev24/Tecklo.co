"use client"


import {InfiniteMovingCard} from "@/components/ui/infinite-moving-cards";
// import Img1 from '@/assets/images/1.jpg';
import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";




import Link from "next/link";
// import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Fade } from "react-awesome-reveal";
// import { BackgroundBeams } from "@/components/ui/background-beams";
import ServiceComponentHome from "@/components/ServiceComponentHome";
// import Hero from "@/components/Hero/Hero";
import dynamic from "next/dynamic";
import AboutUs from "@/assets/teckloss.png"
import { Button } from "@/components/ui/button"


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import A1 from '@/assets/images/A1.png'
import B1 from '@/assets/images/B1.png'
import C1 from '@/assets/images/C1.png'
import D1 from '@/assets/images/D1.png'
import CTAButton from "@/components/CTAButton";



const BackgroundBeams = dynamic(() => import('@/components/ui/background-beams'))
const InfiniteTextMoving = dynamic(() => import('@/components/infinite-moving-text/InfiniteTextMoving'))




const WhyChooseUs = [
  {
    title: "Custom-Fit Services",
    description: "Tailored solutions designed specifically for your business.",
    content: (
      <ul className="flex flex-col gap-2">
        <li><strong>1. Personalized Approach</strong> - We take the time to understand your business inside out, ensuring our services align with your specific needs.</li>
        <li><strong>2. Flexible Solutions</strong> - Whether you’re a start-up or a growing business, we adapt our offerings to fit your stage and goals.</li>
        <li><strong>3. Unique to You</strong> - We don’t believe in one-size-fits-all. Our solutions are crafted just for you, so you get the best results.</li>
      </ul>
    ),
    footer: "Your business, your solutions",
  },
  {
    title: "End-to-End Guidance",
    description: "Supporting you from the beginning to long after launch.",
    content: (
      <ul className="flex flex-col gap-2">
        <li><strong>1. From Start to Finish</strong> - We’re with you throughout the entire process, helping you from planning to execution.</li>
        <li><strong>2. Clear Communication</strong> - You’ll always know what’s happening with your project, with regular updates and transparent communication.</li>
        <li><strong>3. Ongoing Support</strong> - Even after your project is live, we continue to provide support, ensuring everything runs smoothly.</li>
      </ul>
    ),
    footer: "Comprehensive support throughout",
  },
  {
    title: "Results That Matter",
    description: "Focusing on measurable outcomes to drive your business forward.",
    content: (
      <ul className="flex flex-col gap-2">
        <li><strong>1. Goal-Oriented</strong> - We focus on outcomes that drive your business forward, like increased traffic, leads, or sales.</li>
        <li><strong>2. Data-Driven Decisions</strong> - Our strategies are based on real data, ensuring that every move we make is designed to achieve success.</li>
        <li><strong>3. Measurable Success</strong> - We provide clear reports and analytics, so you can see the tangible impact of our work.</li>
      </ul>
    ),
    footer: "Success you can see and measure",
  },
  {
    title: "Local Know-How, Global Vision",
    description: "Blending local insights with a global strategy.",
    content: (
      <ul className="flex flex-col gap-2">
        <li><strong>1. Expanding Your Reach</strong> - We help you tap into broader opportunities, whether you’re looking to grow locally or expand globally.</li>
        <li><strong>2. Bridging Cultures</strong> - Our experience helps us blend local insights with a global perspective, creating strategies that work for diverse audiences.</li>
      </ul>
    ),
    footer: "Think local, act global",
  },
  {
    title: "Agile Methodology",
    description: "Flexibility and adaptability for evolving projects.",
    content: (
      <ul className="flex flex-col gap-2">
        <li><strong>1. Quick Adaptability</strong> - Using agile methodology, we can quickly adjust to changes in your project, ensuring we meet evolving needs and timelines.</li>
        <li><strong>2. Continuous Improvement</strong> - Agile allows us to constantly refine and enhance the project as we progress, leading to better results with each iteration.</li>
        <li><strong>3. Client Collaboration</strong> - With regular check-ins and feedback loops, you are always involved in the development process, ensuring the final product aligns with your vision.</li>
      </ul>
    ),
    footer: "Flexibility at every step",
  },
];






const testimonials = [
  {
    name: "Java",
    svg: "https://www.vectorlogo.zone/logos/java/java-ar21.svg",
  },
  {
    name: "Kotlin",
    svg: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
  },
  {
    name: "Swift",
    svg: "https://www.vectorlogo.zone/logos/swift/swift-icon.svg",
  },
  {
    name: "Objective-C",
    svg: "https://www.vectorlogo.zone/logos/apple_objectivec/apple_objectivec-icon.svg",
  },
  {
    name: "Dart",
    svg: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
  },
  {
    name: "JavaScript",
    svg: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
  },
  {
    name: "TypeScript",
    svg: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
  },

  {
    name: "Python",
    svg: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
  },

  {
    name: "Go",
    svg: "https://www.vectorlogo.zone/logos/golang/golang-official.svg",
  },
  {
    name: "Rust",
    svg: "https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg",
  },
  {
    name: "Ruby",
    svg: "https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg",
  },
  {
    name: "PHP",
    svg: "https://www.vectorlogo.zone/logos/php/php-ar21.svg",
  },
  {
    name: "Bash",
    svg: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
  },

  {
    name: "SQL",
    svg: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
  },
  {
    name: "MongoDB",
    svg: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
  {
    name: "PostgreSQL",
    svg: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  },
  {
    name: "Julia",
    svg: "https://www.vectorlogo.zone/logos/julialang/julialang-icon.svg",
  },
];








export default function Home() {






  return (
    <main className="">
      {/* <section>
        <div className="flex flex-col overflow-hidden -mt-16   bg-gradient-to-tr   from-[#7240bddd] to-[#00276be3]   ">
          <ContainerScroll
            titleComponent={
              <>
                <div className=" flex flex-col lg:flex-row justify-between md:px-10 gap-6 border-t-2 pt-8  text-start px-5">
                  <div className="w-full md:w-1/4">
                    <h1 className="text-base md:text-2xl font-bold text-white">
                      At Tecklo
                    </h1>
                  </div>
                  <div className="w-full md:w-3/4">
                    <h4 className="text-xl font-bold leading-[28px] md:text-5xl text-white">
                      We Transform Your IT Challenges into Seamless Solutions
                    </h4>
                  </div>
                </div>
              </>
            }
          >
            <Image
              src={Img1}
              alt="hero"
              height={720}
              width={1400}
              className=" rounded-2xl object-cover h-full object-center"
              // draggable={false}
            />
          </ContainerScroll>
        </div>
      </section> */}

      <section className='overflow-hidden     '>
        <Fade direction="up">
          <div className='bg-grid-black/[0.1] h-[90vh] md:h-[90vh] w-full relative flex justify-center items-center px-5'>
            <div className="absolute pointer-events-none inset-1 flex items-center justify-center  bg-gradient-to-tr   from-[#fff] to-[#fff] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
            <div className='flex flex-col-reverse md:flex-col justify-centre  md:justify-evenly text-start max-w-6xl mx-auto  items-center z-20'>
              <div className=" flex flex-col  md:mt-0">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 mt-10 relative text-center text-gray-700 max-w-6xl mx-auto ">Transforming Your IT Business <br/> into <span className="relative bg-clip-text text-transparent bg-gradient-to-tr from-purple-500 to-blue-600/[0.8] z-10">Seamless Solutions</span> </h1>
                
                
                <p className="text-base lg:text-xl px-10 text-center mt-3 max-w-3xl mx-auto text-gray-500">
                  IT Consulting who believes in organic and sustainable growth of our clients through strategy, design and technology.
                </p>

<div className="flex justify-center gap-5 mt-8 max-w-5xl mx-auto flex-col lg:flex-row">

                  <Button asChild variant="secondary" className="bg-purple-600 text-white hover:bg-purple-500 hover:text-white rounded py-6 text-lg">
                    <Link href="/work">Glimps to our projects</Link>
                  </Button>
                  <Button asChild variant="outline"  className="hover:bg-gray-800 outline-purple-500 bg-white hover:text-white text-purple-500   rounded py-6 w-56 text-lg">
                    <a href="mailto:">Mail Us Now</a>
                  </Button>
</div>


              </div>

              
              {/* <Image src={HeroImg} width={1000} height={1000} className=' hover:scale-105  duration-500' alt="HeroImg" />  </div> */}
          </div>
          </div>
        </Fade>
        {/* <Image src={HeroImg} width={1000} height={1000} className=' hover:scale-105  duration-500' alt="HeroImg" /> */}


      </section>
     

      {/* <Fade direction="right" >
        <section className="">
          <div className="relative isolate overflow-hidden bg-blue-100 py-24 sm:py-32">
            <div
              aria-hidden="true"
              className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ea3465] to-[#766fffcb] opacity-20"
              />
            </div>
            <div className="mx-auto max-w-7xl  md:px-6 flex flex-col md:flex-row justify-between gap-6   px-6">
              <div className="w-full md:w-1/4">
                <h1 className="text-lg  md:text-2xl font-bold text-blue-800">Intro</h1>
              </div>
              <div className="w-full md:w-3/4">
                <h4 className="text-xl font-bold leading-[28px] md:text-6xl">
                  IT Consulting who believes in organic and sustainable growth
                  of our clients through strategy, design and technology.
                </h4>
              </div>
            </div>
          </div>
        </section>
      </Fade> */}

     


      <Fade direction="up" >
        <section className="py-10  overflow-hidden    ">

          {/* <Hero /> */}
          <InfiniteMovingCard
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </section>
      </Fade>
      {/* <Fade direction="up" >
        <section className="py-5 md:py-8">
          <InfiniteTextMoving />
        </section>
      </Fade> */}
      <section className="py-10 px-5 border-t">
          <div className="flex flex-col lg:flex-row max-w-6xl mx-auto gap-5 justify-center  lg:justify-around items-center">
          {/* <div className=" overflow-hidden border bg-purple-600 relative z-30 w-full h-80 rounded-[15px]">
            <Image src={AboutUs} width={1000} height={1000} alt="about" className="w-full h-80 border rounded  shadow-lg shadow-white absolute left-6 top-6" />
          </div> */}
          
            <div className="w-full  ">
            <Fade direction="left" >

              <svg width="330" height="300" className=" w-full" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" >
                <text x="50%" y="40" font-size="24" font-weight="bold" fill="#333" text-anchor="middle">
                  Welcome to Tecklo.co
                </text>

                {/* <!-- Subtitle Text --> */}
                <text x="50%" y="70" font-size="16" fill="#666" text-anchor="middle">
                  Your Trusted Digital Partner
                </text>

                {/* <!-- Business Icons -->
            <!-- Design Icon --> */}
                <circle cx="150" cy="150" r="50" fill="#58C4DD" />
                <text x="150" y="155" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Design</text>

                {/* <!-- Development Icon --> */}
                <circle cx="300" cy="150" r="50" fill="#6D72C3" />
                <text x="300" y="155" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Development</text>

                {/* <!-- Marketing Icon --> */}
                <circle cx="450" cy="150" r="50" fill="#FF8B60" />
                <text x="450" y="155" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">Marketing</text>

                {/* <!-- Global Expertise Section --> */}
                <path d="M80 250 L520 250 L520 330 L80 330 Z" fill="#FFF4E1" stroke="#FFD27F" stroke-width="2" />
                <text x="300" y="280" font-size="18" fill="#333" text-anchor="middle">
                  Local Knowledge & Global Expertise
                </text>
                <text x="300" y="305" font-size="14" fill="#666" text-anchor="middle">
                  Teams in Canada & US to Fuel Your Growth
                </text>
                {/* 
            <!-- Bottom Message --> */}
                <text x="50%" y="370" font-size="14" fill="#333" text-anchor="middle">
                  Let’s elevate your digital presence together!
                </text>
              </svg>
            </Fade>
            </div>

          <div className="flex flex-col w-full  gap-5 justify-center ">
            <Fade direction="left" >
              <h1 className=" font-bold text-2xl md:text-4xl text-purple-600 ">
                About us

              </h1>
            </Fade>

            <p className="text-base lg:text-lg text-gray-800">
              <strong>Welcome to Tecklo.co –</strong> your trusted digital partner. We help businesses of all sizes thrive online with expert design, development, and marketing solutions. With teams in Canada and the US, we bring local knowledge and global expertise to fuel your growth. From startups to scaling strategies, Tecklo is here to support your success.
            </p>
            <Link className="text-purple-500 w-full lg:w-56 font-semibold text-start dureation-400 rounded hover:text-purple-600" href="about">Know More...</Link>


           
          </div>
        </div>
      </section>
      <section className="py-8 relative flex flex-col items-center">
        <h1 className="z-30 relative text-center font-bold text-2xl lg:text-4xl text-purple-600 py-10">Our Project</h1>
        <div className="absolute pointer-events-none inset-1 flex items-center justify-center  bg-gradient-to-tr   from-[#fff] to-purple-500/[.5] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-5 px-5 lg:px-0 justify-center items-center">
          <div className="border w-full lg:w-[35vw] hover:scale-110  duration-500 rounded bg-white"> <Image
            src={A1}
            width={1000}
            height={1000}
            alt="about"
            className="w-full lg:w-[35vw] h-72 border rounded-t  hover:rounded  object-cover shadow-lg shadow-white transform   z-50 "
          />
            <p className="font-bold text-purple-500 text-lg text-start p-3">Sweepy Maid</p>
          </div>
          <div className="border w-full lg:w-[35vw] hover:scale-110 duration-500 rounded bg-white"> <Image
            src={B1}
            width={1000}
            height={1000}
            alt="about"
            className="w-full lg:w-[35vw] h-72 border rounded-t  hover:rounded object-cover shadow-lg shadow-white transform   z-50 "
          />
            <p className="font-bold text-purple-500 text-lg text-start p-3">Pho 68</p>
          </div>
          <div className="border w-full lg:w-[35vw] hover:scale-110 duration-500 rounded bg-white"> <Image
            src={C1}
            width={1000}
            height={1000}
            alt="about"
            className="w-full lg:w-[35vw] h-72 border rounded-t  hover:rounded object-cover shadow-lg shadow-white transform   z-50 "
          />
            <p className="font-bold text-purple-500 text-lg text-start p-3">HAVELI BISTRO</p>
          </div>
          <div className="border w-full lg:w-[35vw] hover:scale-110 duration-500 rounded bg-white"> <Image
            src={D1}
            width={1000}
            height={1000}
            alt="about"
            className="w-full lg:w-[35vw] h-72 border rounded-t  hover:rounded object-cover shadow-lg shadow-white transform   z-50 "
          />
            <p className="font-bold text-purple-500 text-lg text-start p-3">PARATHA 2 PASTA</p>
          </div>
          
         
        </div>
        <Link href="work" className="z-50 bg-white  p-2 rounded px-6 hover:bg-purple-500 hover:text-white duration-500 relative text-center font-bold text-lg  text-purple-600  mt-10">More Project...</Link>
      </section>



      {/* <section className="py-10 bg-gray-300 ">
        <div>
          <div className="flex flex-col max-w-7xl mx-auto gap-5 justify-center items-center">
            <Fade direction="left" >
              <h1 className="text-center py-10 font-bold text-2xl md:text-4xl text-white">
                What We Offer.
              </h1>
            </Fade>


            <div className="px-5 max-w-7xl mx-auto  ">
              <ServiceComponentHome />
            </div>
            <Fade direction="up" >
              <Link
                className="text-center text-2xl text-white underline hover:text-blue-900 duration-500 py-1 rounded mt-8 "
                href="/service"
              >
                Read More....
              </Link>
            </Fade>
          </div>
        </div>
      </section> */}

     
      <section className="py-10 ">
        <div>
          <div className="flex flex-col max-w-7xl mx-auto gap-5 justify-center items-center">
            <Fade direction="left" >
              <h1 className="text-center py-10 font-bold text-xl md:text-4xl text-purple-600">
                Why Choose Us
              </h1>
            </Fade>
            <div className="flex flex-col justify-between w-full max-w-4xl mx-auto gap-5   px-5">
              {WhyChooseUs.map((service, index) => {
                return (
                  <Accordion key={index} type="single" collapsible>
                    <AccordionItem value={`item-${index}`}>
                      <AccordionTrigger className=" text-lg mb-2">{service.title}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-lg font-semibold">{service.description}</p>
                        <div className="mt-2">{service.content}</div>
                        <p className="mt-4 italic">{service.footer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                );
              })}
              
            </div>
          </div>
        </div>
      </section>
      

      <section>
       <Fade direction="up">
          <CTAButton />
       </Fade>
      </section>

      <section className="overflow-hidden relative bg-purple-800 py-20">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-around bg-transparent  py-10 animate-border z-30 relative text-white">
          <Fade direction="left" >
            <h2 className="py-10 sm:py-0   text-lg md:text-xl ">Locations</h2>
          </Fade>

          <div className="flex flex-col md:flex-row gap-4">
            <Fade direction="up" >
              <div className=" flex align-center gap-4">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FuYWRhfGVufDB8fDB8fHww"
                    alt="CANADA"
                    width={1000}
                    height={1000}
                    loading="eager"
                    className="w-20 aspect-square object-cover rounded-full"
                  />
                </div>
                <div className="flex gap-3">
                  <p className="text-7xl font-bold   ">CAN</p>
                  <span className="content__number">01</span>
                </div>
              </div>
            </Fade>

            <Fade direction="up" >
              <div className=" flex align-center gap-4">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1532952626554-d0cace1cd3fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzYXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="USA"
                    width={1000}
                    height={1000}
                    loading="eager"
                    className="w-20 aspect-square object-cover rounded-full"
                  />
                </div>
                <div className="flex gap-4"><p className="text-7xl font-bold   ">USA</p>
                  <span className="content__number">02</span></div>
              </div>
            </Fade>
          </div>
        </div>
        <BackgroundBeams className=" w-screen object-cover z-10" />
      </section>



    </main>
  );
}
