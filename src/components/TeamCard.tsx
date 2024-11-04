// components/TeamCard.tsx
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Image from "next/image";

type TeamCardProps = {
    name: string;
    role: string;
    image: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
};

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image, linkedin, twitter, github }) => (
    <div className=" rounded p-6 text-center hover:shadow-2xl hover:border hover:rounded-2xl transition duration-300">
        <Image width={1000} height={1000}
            className="h-[40vh] w-full object-center lg:h-[60vh] lg:w-auto rounded  mx-auto object-cover"
            src={image}
            alt={`${name}'s photo`}
        />
        <h3 className="mt-4 text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{role}</p>
        <div className="flex justify-center mt-4 space-x-4 text-gray-500">
            {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-blue-500" />
                </a>
            )}
            {twitter && (
                <a href={twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="hover:text-blue-400" />
                </a>
            )}
            {github && (
                <a href={github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-black" />
                </a>
            )}
        </div>
    </div>
);

export default TeamCard;
