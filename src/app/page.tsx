"use client"


import InfiniteTextMoving from "@/components/infinite-moving-text/InfiniteTextMoving";
import Img1 from '../../public/images/1.jpg';
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Fade } from "react-awesome-reveal";





const Services = [
  {
    title: "Graphic, Web, and App Design",
    description: "Creative designs that capture attention.",
    content:
      "We specialize in crafting visually stunning and user-friendly designs for web and mobile apps. Our designs not only look great but also deliver a seamless user experience that enhances engagement.",
    footer: "Explore Our Designs",
    direction: "left",
  },
  {
    title: "Web and Mobile Development",
    description: "Building dynamic and scalable digital solutions.",
    content:
      "Our development team creates responsive websites and mobile apps that are both functional and fast. We use the latest technologies to ensure your digital presence is robust and adaptable to your business needs.",
    footer: "Start Your Project",
    direction: "right",
  },
  {
    title: "Digital Marketing",
    description: "Maximize your online reach and influence.",
    content:
      "With our digital marketing services, we help you grow your brand's presence online. From SEO to social media strategies, we use data-driven approaches to increase traffic and boost conversions.",
    footer: "Boost Your Presence",
    direction: "up",
  },
  {
    title: "Web Hosting and Scraping",
    description: "Reliable hosting and powerful data extraction.",
    content:
      "We provide secure and scalable web hosting solutions along with advanced web scraping services. Whether you need to host your site or extract valuable data, we have the tools and expertise to help you succeed.",
    footer: "Discover Our Solutions",
    direction: "down",
  },
  {
    title: "CRM/ERP Tools",
    description: "Streamline your business operations.",
    content:
      "Our CRM and ERP solutions are designed to optimize your business processes. We offer custom tools that help you manage customer relationships, automate tasks, and integrate various aspects of your business into a single platform.",
    footer: "Enhance Your Efficiency",
    direction: "left",
  },
];


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
    <main className="dark:bg-gray-800 dark:text-white bg-white text-black">
      <section>
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <div className=" flex flex-col md:flex-row justify-between gap-6 border-t-2 pt-8 animate-border text-start">
                  <div className="w-full md:w-1/4">
                    <h1 className="text-xs font-bold text-blue-800">
                      Digital Innovation Partner
                    </h1>
                  </div>
                  <div className="w-full md:w-3/4">
                    <h4 className="text-xl font-bold leading-[28px] md:text-6xl">
                      Signifly is a digital agency. We help ambitious brands
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
              className="mx-auto rounded-2xl object-cover h-full object-center"
              // draggable={false}
            />
          </ContainerScroll>
        </div>
      </section>
      {/* <section className="mt-10">
        <div className="max-w-7xl mx-auto flex justify-center items-center px-5">
          <Image
            src={Img1}
            alt="img1"
            width={1000}
            height={1000}
            className="rounded md:h-[90vh] md:w-[100vw] object-bottom object-cover"
          />
        </div>
      </section>
      <section className="py-28 px-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 border-t-2 pt-8 animate-border">
          <div className="w-full md:w-1/4">
            <h1 className="text-xs font-bold text-blue-800">
              Digital Innovation Partner
            </h1>
          </div>
          <div className="w-full md:w-3/4">
            <h4 className="text-xl font-bold leading-[28px] md:text-6xl">
              Signifly is a digital agency. We help ambitious brands become
              digital leaders.
            </h4>
          </div>
        </div>
      </section> */}

      {/* <section className="py-28 px-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 border-t-2 pt-8 animate-border">
          <div className="w-full md:w-1/4">
            <h1 className="text-xs font-bold">Intro</h1>
          </div>
          <div className="w-full md:w-3/4">
            <h4 className="text-xl font-bold leading-[28px] md:text-4xl">
              IT Consulting who believes in organic and sustainable growth of
              our clients through strategy, design and technology. We trust in
              giving a smooth and unique experience to our customers, by working
              closely with you and understanding your needs.
            </h4>
          </div>
        </div>
        <div
          class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          ></div>
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)}}
          ></div>
        </div>
      </section> */}

      <Fade direction="up" triggerOnce>
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
            <div className="mx-auto max-w-7xl px-5 md:px-0 flex flex-col md:flex-row justify-between gap-6   ">
              <div className="w-full md:w-1/4">
                <h1 className="text-xs font-bold text-blue-800">Intro</h1>
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

      <Fade direction="up" triggerOnce>
        <section className="py-10">
          <InfiniteTextMoving />
        </section>
      </Fade>
      <section className="py-10 bg-gradient-to-r from-blue-400 to-[#ea346551]">
        <div>
          <div className="flex flex-col max-w-7xl mx-auto gap-5 justify-center items-center">
            <Fade direction="left" triggerOnce>
              <h1 className="text-center py-10 font-bold text-xl md:text-4xl text-black">
                What We Offer.
              </h1>
            </Fade>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-  items-center gap-4 px-5">
              {Services.map((service, index) => {
                return (
                  <Fade direction='up' triggerOnce key={index}>
                    <Card className="border h-[50vh] flex flex-col justify-center items-center rounded bg-white hover:scale-105 hover:shadow-lg hover:shadow-blue-400 hover:border-blue-500 transform transition-all duration-500 ease-in-out">
                      <Fade direction="up" triggerOnce>
                        <CardHeader>
                          <CardTitle className="text-blue-600">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-black font-medium">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{service.content}</p>
                        </CardContent>
                        {/* <CardFooter>
                      <p>{service.footer}</p>
                    </CardFooter> */}
                      </Fade>
                    </Card>
                  </Fade>
                );
              })}
            </div>
            <Fade direction="up" triggerOnce>
              <Link
                className="text-center text-2xl text-white underline hover:text-blue-900 duration-500 py-1 rounded mt-8 "
                href="/services"
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
            <Fade direction="left" triggerOnce>
              <h1 className="text-center py-10 font-bold text-xl md:text-4xl text-black">
                Why Choose Us
              </h1>
            </Fade>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 justify-  items-center gap-4 px-5">
              {WhyChooseUs.map((service, index) => {
                return (
                  <Fade direction='up' triggerOnce key={index}>
                    <Card className="border h-[40vh] md:h-[30vh] w-full md:w-[15vw] flex flex-col justify-center items-center rounded bg-white hover:scale-105 hover:shadow-lg bg-gradient-to-tl from-[#92a2f367] to-[#ea34652c]">
                      <CardHeader className="text-center">
                        <CardTitle className="text-blue-600">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-black font-medium">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      {/* <CardContent>
                      <p className="text-gray-600">{service.content}</p>
                    </CardContent> */}
                      {/* <CardFooter>
                      <p>{service.footer}</p>
                    </CardFooter> */}
                    </Card>
                  </Fade>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
