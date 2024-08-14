import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Services = [
  {
    title: "Graphic, Web, and App Design",
    description: "Creative designs that capture attention.",
    content:
      "We specialize in crafting visually stunning and user-friendly designs for web and mobile apps. Our designs not only look great but also deliver a seamless user experience that enhances engagement.",
  },
  {
    title: "Web and Mobile Development",
    description: "Building dynamic and scalable digital solutions.",
    content:
      "Our development team creates responsive websites and mobile apps that are both functional and fast. We use the latest technologies to ensure your digital presence is robust and adaptable to your business needs.",
  },
  {
    title: "Digital Marketing",
    description: "Maximize your online reach and influence.",
    content:
      "With our digital marketing services, we help you grow your brand's presence online. From SEO to social media strategies, we use data-driven approaches to increase traffic and boost conversions.",
  },
  {
    title: "CRM / ERP Tools solutions",
    description: "Streamline your business operations.",
    content:
      "Our CRM and ERP solutions are designed to optimize your business processes. We offer custom tools that help you manage customer relationships, automate tasks, and integrate various aspects of your business into a single platform.",
  },
  {
    title: "Web Hosting and Scraping",
    description: "Reliable hosting and powerful data extraction.",
    content:
      "We provide secure and scalable web hosting solutions along with advanced web scraping services. Whether you need to host your site or extract valuable data, we have the tools and expertise to help you succeed.",
  },
];

export default function ServicesComponent() {
  const [visibleDescriptionIndex, setVisibleDescriptionIndex] = useState<
    number | null
  >(null);

  // Function to handle visibility toggle
  const toggleDescription = (index: number) => {
    setVisibleDescriptionIndex(
      visibleDescriptionIndex === index ? null : index
    );
  };

  // Close description on scroll
  useEffect(() => {
    const handleScroll = () => {
      setVisibleDescriptionIndex(null);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 ">
      {Services.map((service, index) => {
        const isVisible = visibleDescriptionIndex === index;

        return (
          <Fade direction="up" triggerOnce key={index}>
            <Card
              className={`border flex flex-col justify-center items-center rounded bg-white hover:scale-105 hover:shadow-lg hover:shadow-blue-400 hover:border-blue-500 transform transition-all duration-500 ease-in-out md:w-[20vw] ${
                isVisible ? "h-80  " : "h-40"
              }`}
              style={{
                overflow: "hidden",
                transition: "height 0.5s ease-in-out",
              }}
              onClick={() => toggleDescription(index)}
            >
              <CardHeader className="text-start p-4">
                <CardTitle className="text-blue-600 text-2xl">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-900 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>

              {isVisible && (
                <CardContent className="relative text-gray-500 font-medium text-start px-4">
                  {service.content}
                </CardContent>
              )}
            </Card>
          </Fade>
        );
      })}
    </div>
  );
}
