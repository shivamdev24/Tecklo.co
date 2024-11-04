// pages/team.js
import TeamCard from "@/components/TeamCard";

const teamMembers = [
    {
        name: "Alice Johnson",
        role: "CEO & Founder",
        image: "/images/alice.jpg",
        linkedin: "https://linkedin.com/in/alice",
        twitter: "https://twitter.com/alice",
        github: "https://github.com/alice",
    },
    {
        name: "Bob Smith",
        role: "Lead Developer",
        image: "/images/bob.jpg",
        linkedin: "https://linkedin.com/in/bob",
        twitter: "https://twitter.com/bob",
        github: "https://github.com/bob",
    },
    // Add more team members as needed
];

const TeamPage = () => (
    <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                Our Team
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {teamMembers.map((member, index) => (
                    <TeamCard key={index} {...member} />
                ))}
            </div>
        </div>
    </div>
);

export default TeamPage;
