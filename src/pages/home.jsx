import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/*Theme toggle*/}
        <ThemeToggle />

        {/*Background effect*/}
        <StarBackground />

        {/*Navbar*/}
        <Navbar />

        {/*Main content*/}
        <main>
            <HomeSection />
            <AboutSection />
            <SkillSection />
            <ContactSection />
        </main>

        {/*Footer*/}
    
    </div>
    )
  };