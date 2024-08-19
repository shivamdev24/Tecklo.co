import { useState, useEffect } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface Service {
    title: string;
    description: string;
    img?: string;
}

interface ServiceCardProps {
    services: Service[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ services }) => {
    const [visibleDescriptionIndex, setVisibleDescriptionIndex] = useState<number | null>(null);

    const toggleDescription = (index: number) => {
        setVisibleDescriptionIndex(visibleDescriptionIndex === index ? null : index);
    };

    useEffect(() => {
        if (visibleDescriptionIndex !== null) {
            const handleScroll = () => setVisibleDescriptionIndex(null);
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, [visibleDescriptionIndex]);

    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            {services.map((service, index) => {
                const isVisible = visibleDescriptionIndex === index;

                return (
                    <Fade direction="up" triggerOnce key={index}>
                        <Card
                            aria-expanded={isVisible}
                            className={`relative border flex flex-col justify-center items-center rounded-[8px] overflow-hidden bg-white hover:scale-105 hover:shadow-lg hover:shadow-gray-400 hover:border-blue-500 transform transition-all duration-500 ease-in-out w-[90vw] sm:w-[30vw] xl:w-[20vw] ${isVisible ? "lg:h-[20rem] xl:h-[22rem] py-10" : "h-40"
                                }`}
                            onClick={() => toggleDescription(index)}
                        >
                            {service.img && (
                                <Image
                                    src={service.img}
                                    alt={service.title}
                                    width={1000}
                                    height={1000}
                                    className="absolute w-full h-full top-0 left-0 object-cover z-0"
                                />
                            )}
                            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-60 z-5"></div>
                            <CardHeader className="relative text-start p-4 z-10">
                                <CardTitle className="text-white text-center text-3xl">{service.title}</CardTitle>
                            </CardHeader>

                            {isVisible && (
                                <CardContent className="relative text-white text-base font-medium text-start px-4 z-10">
                                    {service.description}
                                </CardContent>
                            )}
                        </Card>
                    </Fade>
                );
            })}
        </div>
    );
};

export default ServiceCard;





