import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import tizz from "public/projects/tizz.png";
import ubranmix from "public/projects/ubranmix.png";
import blast from "public/projects/blast.png";
import bonzo from "public/projects/bonzo.png";
import lattis from "public/projects/lattis.png";
import amera from "public/projects/amera.png";
import botbot from "public/projects/botbot.png";
import pricevault from "public/projects/pricevault.jpg";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        You can explore our comprehensive work history,
        <br />
        showcasing our expertise in fullstack web, mobile, and
        <br />
        blockchain development.
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "lattis",
    type: "Full stack",
    image: (
      <Image
        src={lattis}
        sizes="100vw"
        fill
        alt="AstroPaper"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Lattis is revolutionizing fleet management across industries like micromobility, car rental, delivery, and public transit.",
    tags: ["Node.js", "AngularJS", "Iot", "AWS", "Sentry", "Express.js"],
    liveUrl: "https://lattis.io",
    codeUrl: "",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "",
  },
  {
    title: "amera",
    type: "Full stack",
    image: (
      <Image
        src={amera}
        sizes="100vw"
        fill
        alt="Terminal Portfolio"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Amera delivers quantum resistant solutions for your products today.",
    tags: ["Node", "Python", "React", "Redux", "WebRTC", "XMPP"],
    liveUrl: "https://amerashare.com",
    codeUrl: "https://github.com/lucky-gru/terminal-portfolio",
    bgColor: "bg-[#B4BEE0]",
    githubApi: "",
  },
  {
    title: "blast",
    type: "Frontend",
    image: (
      <Image
        src={blast}
        sizes="100vw"
        fill
        alt="Haru Fashion App"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Blast is a web3 tournament platform for all kinds of games.",
    tags: ["Next.js", "React", "Ethereum Smart Contract", "Web3.js", "CSS", "Polygon", "Firebase"],
    liveUrl: "https://app.blast.gg/",
    codeUrl: "https://github.com/lucky-gru/haru-fashion",
    bgColor: "bg-[#A6CECE]",
    githubApi: "https://api.github.com/repos/Hiroshi/haru-fashion",
  },
  {
    title: "Bonzo",
    type: "Backend",
    image: (
      <Image
        src={bonzo}
        sizes="100vw"
        fill
        alt="Haru API"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Joined the Bonzo development team and built an SMS marketing platform.",
    tags: ["ExpressJS", "TypeScript", "PostgreSQL", "Prisma"],
    liveUrl: "https://getbonzo.com/",
    codeUrl: "https://github.com/lucky-gru/haru-api",
    bgColor: "bg-[#C5E4E7]",
    githubApi: "https://api.github.com/repos/Hiroshi/haru-api",
  },
  {
    title: "Botbot",
    type: "ChatGPT like LLM chat app",
    image: (
      <Image
        src={botbot}
        sizes="100vw"
        fill
        alt="Next Bookstore"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "LLM app based on fine-tuned models for Portuguese",
    tags: ["NextJS", "Next UI", "OpenAI API", "Figma"],
    liveUrl: "https://oi.botbot.bot/",
    codeUrl: "https://github.com/lucky-gru/next-bookstore",
    bgColor: "bg-[#EBF4F4]",
    githubApi: "https://api.github.com/repos/Hiroshi/next-bookstore",
  },
  {
    title: "Pricevault",
    type: "Backend",
    image: (
      <Image
        src={pricevault}
        sizes="100vw"
        fill
        alt="Shadcn Admin"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "PriceVault helps portfolio managers reliably value the most illiquid and complex trades, proactively reduce risks in the valuation process and stay compliant with regulations.",
    tags: ["Next.js", "React", "AWS", "Mixpanel", "Mongo", "Node.js"],
    liveUrl: "https://pricevault.io/",
    codeUrl: "https://github.com/lucky-gru/shadcn-admin",
    bgColor: "bg-[#FBFBFB]",
    githubApi: "https://api.github.com/repos/Hiroshi/shadcn-admin",
  },
  {
    title: "Tizz",
    type: "Frontend + HeadlessCMS",
    image: (
      <Image
        src={tizz}
        sizes="100vw"
        fill
        alt="Next Bookstore"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Tizz is developing Tizz Trade, a liquidity-efficient, powerful, and user-friendly decentralized leveraged trading platform on Botanix chain.",
    tags: ["Next.js", "ERC20", "Nest.js", "Redis", "Tailwind CSS"],
    liveUrl: "#",
    codeUrl: "https://github.com/lucky-gru/next-bookstore",
    bgColor: "bg-[#EBF4F4]",
    githubApi: "https://api.github.com/repos/Hiroshi/next-bookstore",
  },
  {
    title: "Ubranmix",
    type: "Backend",
    image: (
      <Image
        src={ubranmix}
        sizes="100vw"
        fill
        alt="Shadcn Admin"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Admin Dashboard UI built with Shadcn and Vite. Built with responsiveness and accessibility in mind.",
    tags: ["ShadcnUI", "Vite", "React Router", "TypeScript", "TanstackQuery", "Wagmi"],
    liveUrl: "#",
    codeUrl: "https://github.com/lucky-gru/shadcn-admin",
    bgColor: "bg-[#FBFBFB]",
    githubApi: "https://api.github.com/repos/Hiroshi/shadcn-admin",
  },
];

export default ProjectSection;
