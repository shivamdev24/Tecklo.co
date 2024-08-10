import { cn } from '@/lib/utils';
import React from 'react'
import Image from 'next/image';









const Design = [
  {
    title: "Graphic Design",
    description:
      "Whether you need a striking logo, attractive marketing materials, or unique brand visuals, our graphic design team delivers designs that resonate with your audience and elevate your brand identity.",
    img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDI%3D",
  },
  {
    title: "Web Design ",
    description:
      "We build responsive, user-friendly websites that not only look great but also perform flawlessly across all platforms.",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHwy",
  },
  {
    title: "Application Design",
    description:
      "Our design experts create intuitive and engaging mobile and web applications tailored to meet your specific needs. ",
    img: "https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxpY2F0aW9uJTIwZGVzaWdufGVufDB8fDB8fHwy",
  },
  {
    title: "Web Development",
    description:
      "From elegant landing pages to complex e-commerce platforms, our web solutions are crafted to deliver outstanding performance and end-user engagement.",
    img: "https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxpY2F0aW9uJTIwZGVzaWdufGVufDB8fDB8fHwy",
  },
  {
    title: "Mobile Development",
    description:
      "Our mobile app development team creates intuitive and high-performance apps for both iOS and Android platforms, ensuring a seamless user experience and innovative functionality.",
    img: "https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxpY2F0aW9uJTIwZGVzaWdufGVufDB8fDB8fHwy",
  },
  {
    title: "Agile Methodology",
    description:
      "Our agile methodology allows us to adapt and respond to changes quickly, delivering results on time and within budget.",
    img: "https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxpY2F0aW9uJTIwZGVzaWdufGVufDB8fDB8fHwy",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Our SEO specialists enhance your online visibility and drive organic traffic with tailored strategies that improve your search engine rankings and attract quality leads.",
    img: "https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxpY2F0aW9uJTIwZGVzaWdufGVufDB8fDB8fHwy",
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    description:
      "We create and manage effective PPC campaigns that deliver targeted traffic and measurable results.",
    img: "https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxpY2F0aW9uJTIwZGVzaWdufGVufDB8fDB8fHwy",
  },
  {
    title: "Social Media Marketing",
    description:
      "Our team leverages social media platforms to build your brand’s presence, engage with your audience, and drive meaningful interactions.",
    img: "https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxpY2F0aW9uJTIwZGVzaWdufGVufDB8fDB8fHwy",
  },
  {
    title: "Content Marketing",
    description:
      "From blog posts and articles to infographics and videos, we create content that speaks to your audience and supports your business objectives.",
    img: "https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxpY2F0aW9uJTIwZGVzaWdufGVufDB8fDB8fHwy",
  },
  {
    title: "Email Marketing",
    description:
      "We craft personalized messages and automated workflows that drive conversions and keep your audience engaged.",
    img: "https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxpY2F0aW9uJTIwZGVzaWdufGVufDB8fDB8fHwy",
  },
  {
    title: "Web Hosting",
    description:
      "Whether you need shared hosting, dedicated servers, or cloud solutions, our infrastructure ensures that your website operates smoothly and efficiently, with minimal downtime and exceptional support.",
    img: "https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxpY2F0aW9uJTIwZGVzaWdufGVufDB8fDB8fHwy",
  },
  {
    title: "Web Scraping",
    description:
      "We build custom scraping solutions that extract relevant information, analyze trends, and provide actionable insights. Our tools and techniques are designed to handle large volumes of data while ensuring compliance with legal and ethical standards.",
    img: "https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxpY2F0aW9uJTIwZGVzaWdufGVufDB8fDB8fHwy",
  },
  {
    title: "Custom CRM Development",
    description:
      "Our solutions enable you to track interactions, automate sales processes, and gain valuable insights into customer behavior, enhancing customer satisfaction and driving sales growth.",
    img: "https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxpY2F0aW9uJTIwZGVzaWdufGVufDB8fDB8fHwy",
  },
  {
    title: "Tailored ERP Solutions",
    description:
      "From finance and human resources to supply chain and production, our ERP tools provide a unified platform for managing resources, optimizing workflows, and improving overall efficiency.",
    img: "https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxpY2F0aW9uJTIwZGVzaWdufGVufDB8fDB8fHwy",
  },
  {
    title: "Business Process Analysis",
    description:
      "Our team works with you to understand your business needs and design solutions that align with your strategic goals.",
    img: "https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxpY2F0aW9uJTIwZGVzaWdufGVufDB8fDB8fHwy",
  },
  {
    title: "Integration Services",
    description:
      "We ensure that our CRM and ERP systems integrate seamlessly with your existing software and tools.",
    img: "https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxpY2F0aW9uJTIwZGVzaWdufGVufDB8fDB8fHwy",
  },
  {
    title: "Support & Maintenance",
    description:
      "Our commitment doesn’t end with deployment. We provide ongoing support and maintenance to ensure that your CRM and ERP systems continue to meet your evolving needs and perform at their best.",
    img: "https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxpY2F0aW9uJTIwZGVzaWdufGVufDB8fDB8fHwy",
  },
];







const Dwcu = [
  {
    title: "Innovative Solutions",
    description:
      "We stay ahead of the curve with the latest design trends and technologies to offer you cutting-edge solutions.",
    img: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5ub3ZhdGl2ZSUyMHNvbHV0aW9ufGVufDB8fDB8fHwy",
  },
  {
    title: "Tailored Services",
    description:
      "Every project is unique. We customize our services to fit your specific requirements and goals.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGFpbG9yZWQlMjBTZXJ2aWNlc3xlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    title: "Dedicated Team",
    description:
      "Our experienced team is committed to providing exceptional service and support throughout the design process.",
    img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGVkaWNhdGVkJTIwVGVhbXxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    title: "Expert Team",
    description:
      "Our developers and designers bring a wealth of experience and expertise, ensuring that your project benefits from the latest technologies and best practices.",
    img: "",
  },
  {
    title: "Customized Solutions",
    description:
      "We tailor our services to meet your specific requirements, providing solutions that are as unique as your business.",
    img: "",
  },
  {
    title: "Commitment to Quality",
    description:
      "We prioritize quality in every aspect of our work, from code to user experience, ensuring reliable and effective solutions.",
    img: "",
  },
  {
    title: "Innovative Strategies",
    description:
      "We stay ahead of industry trends and leverage the latest tools and technologies to deliver cutting-edge marketing solutions.",
    img: "",
  },
  {
    title: "Customized Solutions",
    description:
      "Our strategies are tailored to fit your unique business needs and objectives, ensuring a personalized approach.",
    img: "",
  },
  {
    title: "Results-Driven",
    description:
      "We focus on measurable outcomes and work tirelessly to ensure that our strategies deliver tangible results and growth for your business.",
    img: "",
  },
  {
    title: "Web Hosting",
    description:
      "Whether you need shared hosting, dedicated servers, or cloud solutions. Our infrastructure ensures that your website operates smoothly and efficiently, with minimal downtime and exceptional support.",
    img: "",
  },
  {
    title: "Web Scraping",
    description:
      "We build custom scraping solutions that extract relevant information, analyze trends, and provide actionable insights. Our tools and techniques are designed to handle large volumes of data while ensuring compliance with legal and ethical standards.",
    img: "",
  },
//   {
//     title: "",
//     description: "",
//     img: "",
//   },
//   {
//     title: "",
//     description: "",
//     img: "",
//   },
//   {
//     title: "",
//     description: "",
//     img: "",
//   },
//   {
//     title: "",
//     description: "",
//     img: "",
//   },
//   {
//     title: "",
//     description: "",
//     img: "",
//   },
//   {
//     title: "",
//     description: "",
//     img: "",
//   },
//   {
//     title: "",
//     description: "",
//     img: "",
//   },
];






function page() {
  return (
    <div>
      <section className=" overflow-hidden h-96 relative pt-10">
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
        <div className="justify-center items-center flex flex-col gap-4 mt-4 h-full ">
          <h1 className="text-gray-700 font-bold text-4xl text-center ">
            Startup <span className="text-blue-500">Assistance</span>
          </h1>
          <p className="text-base font-medium text-gray-600 text-center max-w-7xl px-5 mx-auto">
            At Tecklo, we are your one stop shop in delivering services and
            tools designed to help new business startups launch successfully and
            grow sustainably. From unique marketing strategies to robust
            software solutions, we provide everything you need to turn your
            entrepreneurial vision into a thriving reality.
          </p>
        </div>
      </section>
      <section className='pb-10'>
        <div className="max-w-7xl mx-auto  px-5 flex flex-col gap-4">
          <div>
            <h2 className="text-3xl text-center py-5 font-bold underline text-blue-500">Our Services</h2>
            <div className="flex flex-wrap gap-10 justify-evenly ">
              {Design.map((props, index) => (
                <div key={index} className="max-w-sm  group/card">
                  <div
                    className={cn(
                      "cursor-pointer overflow-hidden relative card h-72 rounded-[10px] shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
                    )}
                  >
                    {props.img && (
                      <Image
                        src={props.img}
                        alt={props.title}
                        width={1000}
                        height={1000}
                        className="absolute w-full h-full top-0 left-0 object-cover"
                      />
                    )}
                    <div className="absolute w-full h-full top-0 left-0 object-cover bg-black opacity-45"></div>
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                      {props.title}
                    </h1>
                    <p className="font-medium text-sm text-gray-50 relative z-10 my-4">
                      {props.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" text-start mt-4">
            <h2 className="text-2xl py-2 font-bold text-blue-500">
              Our Approach
            </h2>
            <p>
              <ul className="list-disc ml-4 flex flex-col gap-2">
                <li>
                  By working closely with you, we ensure that every project
                  reflects your brand&apos;s values and objectives.{" "}
                </li>
                <li>
                  Our agile methodology allows us to adapt and respond to
                  changes quickly, delivering results on time and within budget.
                </li>
                <li>
                  Our process starts with understanding your brand, audience,
                  and goals. We then develop a comprehensive marketing strategy
                  that integrates various channels and tactics to achieve
                  optimal results.
                </li>
                <li>
                  We believe in a client-centric approach where your needs and
                  goals drive our solutions.
                </li>
                <li>
                  For web hosting, we focus on providing a seamless and
                  hassle-free experience with robust infrastructure and
                  exceptional support.
                </li>
                <li>
                  Our team is dedicated to offering reliable solutions that
                  enhance your business operations and drive success.
                </li>
                <li>
                  We believe in a collaborative approach to software
                  development. By working closely with you, we gain a thorough
                  understanding of your business processes and objectives. We
                  prioritize clear communication and continuous feedback to
                  ensure that the final product exceeds your expectations.
                </li>
              </ul>
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-500 py-8 text-center">
              Why Choose Us
            </h2>
            <div className="flex flex-wrap gap-5 justify-evenly ">
              {Dwcu.map((props, index) => (
                <div key={index} className="max-w-xs w-full group/card">
                  <div
                    className={cn(
                      "cursor-pointer overflow-hidden relative card h-56 rounded-[10px] shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
                    )}
                  >
                    {props.img && (
                      <Image
                        src={props.img}
                        alt={props.title}
                        width={1000}
                        height={1000}
                        className="absolute w-full h-full top-0 left-0 object-cover"
                      />
                    )}
                    <div className="absolute w-full h-full top-0 left-0 object-cover bg-black opacity-45"></div>
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                      {props.title}
                    </h1>
                    <p className="font-medium text-sm text-gray-50 relative z-10 my-4">
                      {props.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="max-w-7xl mx-auto py-10 flex flex-col gap-4">
          <div>
            <h2>Development</h2>
            <div className="flex flex-wrap  justify-evenly ">
              {Development.map((props, index) => (
                <div key={index} className="max-w-xs w-full group/card">
                  <div
                    className={cn(
                      "cursor-pointer overflow-hidden relative card h-72 rounded-[10px] shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
                    )}
                  >
                    {props.img && (
                      <Image
                        src={props.img}
                        alt={props.title}
                        width={1000}
                        height={1000}
                        className="absolute w-full h-full top-0 left-0 object-cover"
                      />
                    )}
                    <div className="absolute w-full h-full top-0 left-0 object-cover bg-black opacity-45"></div>
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                      {props.title}
                    </h1>
                    <p className="font-medium text-sm text-gray-50 relative z-10 my-4">
                      {props.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" text-start">
            <h2 className="text-2xl py-2 font-bold text-blue-500">
              Our Approach
            </h2>
            <p>
              By working closely with you, we ensure that every project reflects
              your brand&apos;s values and objectives.{" "}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-500 py-8 text-center">
              Why Choose Us
            </h2>
            <div className="flex flex-wrap gap-5 justify-evenly ">
              {Dwcu.map((props, index) => (
                <div key={index} className="max-w-xs w-full group/card">
                  <div
                    className={cn(
                      "cursor-pointer overflow-hidden relative card h-48 rounded-[10px] shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
                    )}
                  >
                    {props.img && (
                      <Image
                        src={props.img}
                        alt={props.title}
                        width={1000}
                        height={1000}
                        className="absolute w-full h-full top-0 left-0 object-cover"
                      />
                    )}
                    <div className="absolute w-full h-full top-0 left-0 object-cover bg-black opacity-45"></div>
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                      {props.title}
                    </h1>
                    <p className="font-medium text-sm text-gray-50 relative z-10 my-4">
                      {props.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto py-10 flex flex-col gap-4">
          <div>
            <h2>Marketing</h2>
            <div className="flex flex-wrap  justify-evenly ">
              {Marketing.map((props, index) => (
                <div key={index} className="max-w-xs w-full group/card">
                  <div
                    className={cn(
                      "cursor-pointer overflow-hidden relative card h-72 rounded-[10px] shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
                    )}
                  >
                    {props.img && (
                      <Image
                        src={props.img}
                        alt={props.title}
                        width={1000}
                        height={1000}
                        className="absolute w-full h-full top-0 left-0 object-cover"
                      />
                    )}
                    <div className="absolute w-full h-full top-0 left-0 object-cover bg-black opacity-45"></div>
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                      {props.title}
                    </h1>
                    <p className="font-medium text-sm text-gray-50 relative z-10 my-4">
                      {props.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" text-start">
            <h2 className="text-2xl py-2 font-bold text-blue-500">
              Our Approach
            </h2>
            <p>
              By working closely with you, we ensure that every project reflects
              your brand&apos;s values and objectives.{" "}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-500 py-8 text-center">
              Why Choose Us
            </h2>
            <div className="flex flex-wrap gap-5 justify-evenly ">
              {Dwcu.map((props, index) => (
                <div key={index} className="max-w-xs w-full group/card">
                  <div
                    className={cn(
                      "cursor-pointer overflow-hidden relative card h-48 rounded-[10px] shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
                    )}
                  >
                    {props.img && (
                      <Image
                        src={props.img}
                        alt={props.title}
                        width={1000}
                        height={1000}
                        className="absolute w-full h-full top-0 left-0 object-cover"
                      />
                    )}
                    <div className="absolute w-full h-full top-0 left-0 object-cover bg-black opacity-45"></div>
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                      {props.title}
                    </h1>
                    <p className="font-medium text-sm text-gray-50 relative z-10 my-4">
                      {props.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto py-10 flex flex-col gap-4">
          <div>
            <h2>Hosting</h2>
            <div className="flex flex-wrap  justify-evenly ">
              {Hosting.map((props, index) => (
                <div key={index} className="max-w-xs w-full group/card">
                  <div
                    className={cn(
                      "cursor-pointer overflow-hidden relative card h-72 rounded-[10px] shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
                    )}
                  >
                    {props.img && (
                      <Image
                        src={props.img}
                        alt={props.title}
                        width={1000}
                        height={1000}
                        className="absolute w-full h-full top-0 left-0 object-cover"
                      />
                    )}
                    <div className="absolute w-full h-full top-0 left-0 object-cover bg-black opacity-45"></div>
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                      {props.title}
                    </h1>
                    <p className="font-medium text-sm text-gray-50 relative z-10 my-4">
                      {props.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" text-start">
            <h2 className="text-2xl py-2 font-bold text-blue-500">
              Our Approach
            </h2>
            <p>
              By working closely with you, we ensure that every project reflects
              your brand&apos;s values and objectives.{" "}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-500 py-8 text-center">
              Why Choose Us
            </h2>
            <div className="flex flex-wrap gap-5 justify-evenly ">
              {Dwcu.map((props, index) => (
                <div key={index} className="max-w-xs w-full group/card">
                  <div
                    className={cn(
                      "cursor-pointer overflow-hidden relative card h-48 rounded-[10px] shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
                    )}
                  >
                    {props.img && (
                      <Image
                        src={props.img}
                        alt={props.title}
                        width={1000}
                        height={1000}
                        className="absolute w-full h-full top-0 left-0 object-cover"
                      />
                    )}
                    <div className="absolute w-full h-full top-0 left-0 object-cover bg-black opacity-45"></div>
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                      {props.title}
                    </h1>
                    <p className="font-medium text-sm text-gray-50 relative z-10 my-4">
                      {props.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto py-10 flex flex-col gap-4">
          <div>
            <h2>Tools</h2>
            <div className="flex flex-wrap  justify-evenly ">
              {Tools.map((props, index) => (
                <div key={index} className="max-w-xs w-full group/card">
                  <div
                    className={cn(
                      "cursor-pointer overflow-hidden relative card h-72 rounded-[10px] shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
                    )}
                  >
                    {props.img && (
                      <Image
                        src={props.img}
                        alt={props.title}
                        width={1000}
                        height={1000}
                        className="absolute w-full h-full top-0 left-0 object-cover"
                      />
                    )}
                    <div className="absolute w-full h-full top-0 left-0 object-cover bg-black opacity-45"></div>
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                      {props.title}
                    </h1>
                    <p className="font-medium text-sm text-gray-50 relative z-10 my-4">
                      {props.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" text-start">
            <h2 className="text-2xl py-2 font-bold text-blue-500">
              Our Approach
            </h2>
            <p>
              By working closely with you, we ensure that every project reflects
              your brand&apos;s values and objectives.{" "}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-500 py-8 text-center">
              Why Choose Us
            </h2>
            <div className="flex flex-wrap gap-5 justify-evenly ">
              {Dwcu.map((props, index) => (
                <div key={index} className="max-w-xs w-full group/card">
                  <div
                    className={cn(
                      "cursor-pointer overflow-hidden relative card h-48 rounded-[10px] shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
                    )}
                  >
                    {props.img && (
                      <Image
                        src={props.img}
                        alt={props.title}
                        width={1000}
                        height={1000}
                        className="absolute w-full h-full top-0 left-0 object-cover"
                      />
                    )}
                    <div className="absolute w-full h-full top-0 left-0 object-cover bg-black opacity-45"></div>
                    <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                      {props.title}
                    </h1>
                    <p className="font-medium text-sm text-gray-50 relative z-10 my-4">
                      {props.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default page