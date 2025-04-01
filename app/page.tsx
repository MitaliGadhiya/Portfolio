"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react";
import { Button } from "@mui/material";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-primary">
            Mitali Gadhiya
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["home", "about", "skills", "projects", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium hover:text-primary transition-colors ${
                    activeSection === section
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {section}
                </button>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize text-sm font-medium hover:text-primary transition-colors ${
                      activeSection === section
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-16 md:pt-40 md:pb-20 container mx-auto px-4"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Mitali Gadhiya</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
              Software Developer
            </h2>
            <p className="text-lg text-muted-foreground">
              I build exceptional and accessible digital experiences for the
              Technology.
            </p>
            <div className="flex gap-4">
              <Button
                variant="outlined"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/MitaliGadhiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mitali-gadhiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mitaligadhiya6@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/profile.jpg"
                alt="Mitali Gadhiya"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
            <div className="text-center">
              <p className="text-lg">
                I'm a passionate frontend developer with a strong foundation in
                creating responsive and user-friendly web applications. With
                over 1 years of experience, I specialize in React.js, Next.js,
                and Bootstrap frameworks. I'm familiar with backend developer
                with a scalable and rebust API. I specialize in NodeJS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            title="Frontend Development"
            skills={[
              "React.js",
              "Next.js",
              "HTML5",
              "CSS3",
              "JavaScript",
              "TypeScript",
            ]}
          />
          <SkillCard
            title="UI Frameworks"
            skills={["Bootstrap", "Tailwind CSS", "Material UI", "PrimeReact"]}
          />
          <SkillCard
            title="Backend Knowledge"
            skills={["Node.js", "Express.js", "RESTful APIs", "GraphQL"]}
          />
          <SkillCard
            title="Tools & Platforms"
            skills={["Git", "GitHub", "VS Code", "Figma", "Vercel", "Netlify"]}
          />
          <SkillCard
            title="Other Skills"
            skills={[
              "Responsive Design",
              "Web Performance",
              "SEO Basics",
              "Testing",
            ]}
          />
          <SkillCard
            title="Soft Skills"
            skills={[
              "Problem Solving",
              "Communication",
              "Team Collaboration",
              "Time Management",
            ]}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Worked with Live Projects
          </h2>
          <div className="gap-8 flex items-center justify-center">
            <ProjectCard
              title="Essential Fire Vault"
              description=" The Essential Fire Vault is a secure storage and management system built using Reactjs and Nextjs for the frontend and MongoDB for the backend. It leverages MUI components for a sleek and responsive UI, providing a seamless user experience. The development environment is optimized with VS Code, enabling efficient coding with extensions for linting, debugging, and version control."
              technologies={["React.js", "NextJS", "Node.js", "MongoDB"]}
            />
            <ProjectCard
              title="Humann"
              description="Humann is a secure storage and management 
system built using React.js and Next.js for the 
frontend and PostgreSQL for the backend. It utilizes 
MUI components for a modern and intuitive UI, 
ensuring a seamless user experience. Developed in 
VS Code, the project benefits from efficient 
debugging, version control, and development tools. 
With Next.js API routes and server-side rendering"
              technologies={[
                "Next.js",
                "ReactJS",
                "NodeJS",
                "REST APIs",
                "PostgreSQL",
              ]}
            />
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My Projects
          </h2>
          <div className="gap-8 flex items-center justify-center">
            <ProjectCard
              title="Task Management System"
              description="The Task Management System is designed to 
streamline task assignments and  tracking. It allows 
an Admin to create, assign, update, and delete 
tasks, while  Users can edit and mark tasks as 
completed. The system ensures efficient  
collaboration and task management, improving 
productivity within a team or  organization."
              technologies={[
                "Angular",
                "NodeJs",
                "TypeScript",
                "MongoDB",
                "Angular Material",
                "ExpressJs",
                "Bootstrap",
              ]}
              imageUrl="/taskLogo.png"
            />
            <ProjectCard
              title="Gaming System"
              description="This project is focused on creating a visually 
appealing and user-friendly design for  web 
applications. It emphasizes responsive UI, seamless 
user experience, and  modern aesthetics using 
Next.js and React.js. The project showcases 
advanced  frontend design principles, ensuring high 
performance and accessibility."
              technologies={[
                "NextJs",
                "ReactJS",
                "TypeScript",
                "bootstrap",
                "CSS",
                "SCSS",
              ]}
              imageUrl="/game.png"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In Touch
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <Mail size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">mitaligadhiya6@gmail.com</p>
              <a
                href="mailto:contact@example.com"
                className="text-primary hover:underline mt-2"
              >
                Send an email
              </a>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <Linkedin size={32} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-muted-foreground">
                linkedin.com/in/MitaliGadhiya
              </p>
              <a
                href="https://www.linkedin.com/in/mitali-gadhiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline mt-2"
              >
                Connect with me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/50 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://github.com/MitaliGadhiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mitali-gadhiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mitaligadhiya6@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Mitali Gadhiya. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Skill Card Component
function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="rounded-full px-3 py-1 bg-gray-200 text-sm text-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

// Project Card Component
function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
}: {
  title: string;
  description?: string;
  technologies: string[];
  imageUrl?: string;
}) {
  return (
    <div className="bg-card rounded-lg w-100 h-100 text-wrap shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 w-85 text-justify">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-full px-3 py-1 bg-gray-200 text-sm text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
