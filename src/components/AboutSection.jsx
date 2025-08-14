import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-200">
            Full-Stack Engineer & Database Specialist
            </h3>

            <p className="text-gray-400 leading-relaxed">
              With over{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent font-semibold">
                7 years of experience
              </span>{" "}
              in full-stack development and data engineering across Mongolia,
              Korea, and Japan, I specialize in building scalable systems,
              optimizing databases, and crafting efficient data pipelines.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Skilled in{" "}
              <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                Python, DBT, SQL, Docker, React Native, TypeScript, and
                JavaScript
              </span>
              , I thrive in international teams, delivering impactful,
              data-driven solutions while continually expanding my expertise in
              database engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/Khorolsuren_Resume.pdf"
                download="Dashdavaa_Khorolsuren_CV.pdf"
                className="px-6 py-2 rounded-full border border-indigo-400 text-indigo-400 hover:bg-indigo-400/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="grid grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-indigo-400/10">
                <Code className="h-6 w-6 text-indigo-400" />
                </div>
                <div className="text-left">
                <h4 className="font-semibold text-lg text-gray-200">
                    Full-Stack Development
                </h4>
                <p className="text-gray-400">
                    Building scalable systems and applications using modern frameworks,
                    with expertise in Python, TypeScript, React, and Node.js.
                </p>
                </div>
            </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-indigo-400/10">
                <User className="h-6 w-6 text-indigo-400" />
                </div>
                <div className="text-left">
                <h4 className="font-semibold text-lg text-gray-200">
                    Database Engineering
                </h4>
                <p className="text-gray-400">
                    Designing and optimizing databases, building efficient data pipelines,
                    and improving query performance across SQL, Snowflake, and PostgreSQL.
                </p>
                </div>
            </div>
            </div>

            {/* Card 3 */}
            <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-indigo-400/10">
                <Briefcase className="h-6 w-6 text-indigo-400" />
                </div>
                <div className="text-left">
                <h4 className="font-semibold text-lg text-gray-200">
                    International Collaboration
                </h4>
                <p className="text-gray-400">
                    Leading and contributing to cross-border projects in Mongolia, Korea,
                    and Japan, ensuring efficient communication and agile delivery.
                </p>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};