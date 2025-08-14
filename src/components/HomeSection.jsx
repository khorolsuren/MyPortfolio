import { ArrowDown } from 'lucide-react';

export const HomeSection = () => {
    return <section 
    id="/" 
    className="relative min-h-screen flex felx-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-center">
                <span className="block opacity-100 animate-fade-in text-gray-300 animate-fade-in">
                    Hi, I'm
                </span>
                <span className="block animate-fade-in-delay-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in-delay-1">
                    Khorolsuren Dashdavaa
                </span>
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-400 animate-fade-in-delay-2 text-lg md:text-2xl font-medium">
                    Full-Stack Engineer • Backend & Database Specialist
                </span>
                </h1>

                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-3 text-center animate-fade-in-delay-3">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                    Computer Science graduate
                </span>{" "}
                with over{" "}
                <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent font-semibold">
                    7 years of experience
                </span>{" "}
                in full-stack development and data engineering across Mongolia, Korea, and Japan. Skilled in{" "}
                <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                    Python, DBT, SQL, Docker, React Native, TypeScript
                </span>{" "}
                and{" "}
                <span className="bg-gradient-to-r from-green-300 via-emerald-400 to-lime-400 bg-clip-text text-transparent font-semibold">
                    JavaScript
                </span>. I aim to grow in{" "}
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent font-semibold">
                    database engineering
                </span>{" "}
                and deliver impactful, data-driven solutions.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="/projects" className="inline-block px-6 py-3 mt-6 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-teal-500 rounded-lg shadow-lg hover:from-indigo-600 hover:to-teal-600 transition-colors duration-300">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className='text-sm text-muted-foreground mb-2'></span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
}