"use client"


// import InfiniteTextMoving from "@/components/infinite-moving-text/InfiniteTextMoving";
import Img1 from '../../public/images/1.jpg';
import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";




import Link from "next/link";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Fade } from "react-awesome-reveal";
// import { BackgroundBeams } from "@/components/ui/background-beams";
import ServiceComponentHome from "@/components/ServiceComponentHome";
import Hero from "@/components/Hero/Hero";
import dynamic from "next/dynamic";


const BackgroundBeams = dynamic(() => import('@/components/ui/background-beams'))
const InfiniteTextMoving = dynamic(() => import('@/components/infinite-moving-text/InfiniteTextMoving'))




const WhyChooseUs = [
  {
    title: "Expertise Across Domains",
    description: "Experience and knowledge that drives results.",
    content:
      "Our team comprises industry experts with years of experience in diverse domains. We bring specialized knowledge and a proven track record to every project, ensuring that we deliver top-notch solutions tailored to your needs.",
    footer: "Leverage Our Expertise",
    direction: "left",
  },
  {
    title: "Innovative Solutions",
    description: "Cutting-edge technology to solve your challenges.",
    content:
      "We believe in staying ahead of the curve by adopting the latest technologies and methodologies. Our innovative solutions are designed to not only meet your current requirements but also scale as your business grows.",
    footer: "Innovate with Us",
    direction: "up",
  },
  {
    title: "Client-Centric Approach",
    description: "Your satisfaction is our priority.",
    content:
      "We prioritize our clients' needs and work closely with them to achieve their business goals. From the initial consultation to the final delivery, our process is transparent, collaborative, and focused on your success.",
    footer: "Join Our Clientele",
    direction: "right",
  },
  {
    title: "Quality and Reliability",
    description: "Delivering excellence you can trust.",
    content:
      "We are committed to providing high-quality services that you can rely on. Our rigorous quality assurance processes ensure that every deliverable meets the highest standards, giving you peace of mind.",
    footer: "Experience Quality",
    direction: "down",
  },
  {
    title: "Comprehensive Support",
    description: "We’re here for you every step of the way.",
    content:
      "Our relationship with clients doesn’t end with project delivery. We offer ongoing support and maintenance services to ensure your systems run smoothly, and we’re always available to address any concerns.",
    footer: "Get Support",
    direction: "left",
  },
];





export default function Home() {






  return (
    <main className="">
      <section>
        <div className="flex flex-col overflow-hidden    bg-gradient-to-tr   from-[#7240bddd] to-[#00276be3]   ">
          <ContainerScroll
            titleComponent={
              <>
                <div className=" flex flex-col lg:flex-row justify-between md:px-10 gap-6 border-t-2 pt-8  text-start px-5">
                  <div className="w-full md:w-1/4">
                    <h1 className="text-base md:text-lg font-bold text-white">
                      Digital Innovation Partner
                    </h1>
                  </div>
                  <div className="w-full md:w-3/4">
                    <h4 className="text-xl font-bold leading-[28px] md:text-6xl text-white">
                      Tecklo is a digital agency. We help ambitious brands
                      become digital leaders.
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
      </section>
     

     <section className="py-20">
        <div className=" flex flex-col lg:flex-row justify-between md:px-10 gap-6  pt-8  text-start px-5">
          <div className="w-full md:w-1/4">
            <h1 className="text-base md:text-lg font-bold text-black">
              Digital Innovation Partner
            </h1>
          </div>
          <div className="w-full md:w-3/4">
            <h4 className="text-xl font-bold leading-[28px] md:text-6xl text-black">
              Tecklo is a digital agency. We help ambitious brands
              become digital leaders.
            </h4>
          </div>
        </div>
      <Hero />
     </section>

      <Fade direction="right" >
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
      </Fade>

      <Fade direction="up" >
        <section className="py-5 md:py-8">
          <InfiniteTextMoving />
        </section>
      </Fade>
      <section className="py-10 bg-gradient-to-br from-blue-400 to-[#ea346551]">
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
      </section>
      <section className="py-10 ">
        <div>
          <div className="flex flex-col max-w-7xl mx-auto gap-5 justify-center items-center">
            <Fade direction="left" >
              <h1 className="text-center py-10 font-bold text-xl md:text-4xl text-black">
                Why Choose Us
              </h1>
            </Fade>
            <div className="max-w-7xl mx-auto flex flex-wrap justify-center  items-center gap-4 px-5">
              {WhyChooseUs.map((service, index) => {
                return (
                  <Fade direction="up"  key={index}>
                    <Card className="border h-[25vh] lg:h-[25vh] w-[80vw] sm:h-[10vh] md:w-[23vw] lg:w-[20vw] flex flex-col justify-center items-center rounded bg-white hover:scale-105 hover:shadow-lg bg-gradient-to-tl from-[#92a2f367] to-[#ea34652c]">
                      <CardHeader className="text-center">
                        <CardTitle className="text-blue-600">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-black font-medium">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                    
                    </Card>
                  </Fade>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden relative bg-gradient-to-tr   from-[#766fffcb] to-[#00276b] py-20">
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
                  <span className="content__number">03</span></div>
              </div>
            </Fade>
          </div>
        </div>
        <BackgroundBeams className=" w-screen object-cover z-10" />
      </section>


     
    </main>
  );
}
