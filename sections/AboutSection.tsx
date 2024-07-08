import { useEffect, useRef } from "react";
import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SkillCard from "@/components/SkillCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import AboutBgSvg from "@/components/AboutBgSvg";
import CMSimg from "public/skill/cms.png";
import iotapp from "public/skill/iotapp.png";
import cryptoimage from "public/skill/crypto.png";
import reactnative from "public/skill/reactnative.png";
import progressive from "public/skill/webapp.png";
import androidimage from "public/skill/android.png";
import iosapp from "public/skill/ios.png";
import web3 from "public/skill/web3.png";
import exchange from "public/skill/exchange.png";

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(sectionRef);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.registerPlugin(ScrollTrigger);

    // profile-picture
    gsap.fromTo(
      q(".profile-picture"),
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: q(".profile-picture"),
          start: "20% bottom",
        },
      }
    );

    const fromAnimation = {
      y: 100,
      opacity: 0,
    };

    const toAnimation = (triggerTarget: string) => ({
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: q(`.${triggerTarget}`),
        start: "top bottom",
      },
    });

    // about-intro
    gsap.fromTo(q(".about-intro"), fromAnimation, toAnimation("about-intro"));

    // edu-bg
    gsap.fromTo(q(".edu-bg"), fromAnimation, toAnimation("edu-bg"));

    // bg svg parallax effect
    gsap.fromTo(
      q(".bg-svg"),
      { y: -80 },
      {
        scrollTrigger: {
          trigger: q(".bg-svg"),
          scrub: true,
        },
        y: 65,
        duration: 3,
      }
    );

    // image bg svg parallax effect
    gsap.fromTo(
      q(".img-svg"),
      { y: -30 },
      {
        scrollTrigger: {
          trigger: q(".img-svg"),
          start: "80% 75%",
          scrub: true,
        },
        y: 30,
      }
    );
  }, []);

  const { theme } = useTheme();

  const eduRef = useRef<HTMLDivElement>(null);

  // Set active link for about section
  const aboutSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    aboutSection ? onSectionChange!("What we do") : onSectionChange!("");
  }, [aboutSection, onSectionChange]);

  return (
    <div
      ref={sectionRef}
      className="about-panel bg-white dark:bg-[#1B2731] relative"
    >
      <section id="whatwedo" className="section">
        <RoughNotationGroup>
          <div className="text-center">
            <RoughNotation
              type="underline"
              color={`${
                theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"
              }`}
              strokeWidth={2}
              order={1}
              show={isSecOnScreen}
            >
              <h2 className="section-heading">What we do</h2>
            </RoughNotation>
          </div>
          <div className="flex flex-wrap">
            {projects.map((project, index) => (
              <SkillCard key={project.title} index={index} project={project} />
            ))}
          </div>
        </RoughNotationGroup>
      </section>

      <AboutBgSvg />
    </div>
  );
};

const projects = [
  {
    title: "Progressive Web App",
    type: "web development",
    image: (
      <Image
        src={progressive}
        sizes="100vw"
        fill
        alt="AstroPaper"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Build feature-rich PWAs that act like native apps & ensure 100% success.",
    tags: [""],
    liveUrl: "https://lattis.io",
    codeUrl: "https://github.com/lucky-gru/astro-paper",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/Hiroshi/astro-paper",
  },
  {
    title: "Android App",
    type: "mobile development",
    image: (
      <Image
        src={androidimage}
        sizes="100vw"
        fill
        alt="Terminal Portfolio"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Build native mobile apps for unmatched user experience.",
    tags: [""],
    liveUrl: "https://amerashare.com",
    codeUrl: "https://github.com/lucky-gru/terminal-portfolio",
    bgColor: "bg-[#B4BEE0]",
    githubApi: "https://api.github.com/repos/Hiroshi/terminal-portfolio",
  },
  {
    title: "Crypto Wallet Development",
    type: "Blockchain development",
    image: (
      <Image
        src={cryptoimage}
        sizes="100vw"
        fill
        alt="Haru Fashion App"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Build web, mobile, and desktop multi-currency wallets.",
    tags: [""],
    liveUrl: "https://app.blast.gg/",
    codeUrl: "https://github.com/lucky-gru/haru-fashion",
    bgColor: "bg-[#A6CECE]",
    githubApi: "https://api.github.com/repos/Hiroshi/haru-fashion",
  },
  {
    title: "React Native Web App",
    type: "web development",
    image: (
      <Image
        src={reactnative}
        sizes="100vw"
        fill
        alt="Haru API"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Create multi-platform mobile applications with a single code.",
    tags: [""],
    liveUrl: "https://getbonzo.com/",
    codeUrl: "https://github.com/lucky-gru/haru-api",
    bgColor: "bg-[#C5E4E7]",
    githubApi: "https://api.github.com/repos/Hiroshi/haru-api",
  },
  {
    title: "iOS App",
    type: "mobile development",
    image: (
      <Image
        src={iosapp}
        sizes="100vw"
        fill
        alt="Next Bookstore"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Develop reliable and dynamic iOS Apps for iPhone & iPad.",
    tags: [""],
    liveUrl: "https://oi.botbot.bot/",
    codeUrl: "https://github.com/lucky-gru/next-bookstore",
    bgColor: "bg-[#EBF4F4]",
    githubApi: "https://api.github.com/repos/Hiroshi/next-bookstore",
  },
  {
    title: "Web3 Development",
    type: "Blockchain development",
    image: (
      <Image
        src={web3}
        sizes="100vw"
        fill
        alt="Shadcn Admin"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Transform your business with our high-end web3 project development.",
    tags: [""],
    liveUrl: "https://pricevault.io/",
    codeUrl: "https://github.com/lucky-gru/shadcn-admin",
    bgColor: "bg-[#FBFBFB]",
    githubApi: "https://api.github.com/repos/Hiroshi/shadcn-admin",
  },
  {
    title: "CMS/CRM/ERP App",
    type: "web development",
    image: (
      <Image
        src={CMSimg}
        sizes="100vw"
        fill
        alt="Next Bookstore"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Offer unique web experience with CMS/CRM/ERP Applications.",
    tags: [""],
    liveUrl: "#",
    codeUrl: "https://github.com/lucky-gru/next-bookstore",
    bgColor: "bg-[#EBF4F4]",
    githubApi: "https://api.github.com/repos/Hiroshi/next-bookstore",
  },
  {
    title: "IoT App development",
    type: "mobile development",
    image: (
      <Image
        src={iotapp}
        sizes="100vw"
        fill
        alt="Shadcn Admin"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Improve business efficiency with high-performance IoT apps.",
    tags: [""],
    liveUrl: "#",
    codeUrl: "https://github.com/lucky-gru/shadcn-admin",
    bgColor: "bg-[#FBFBFB]",
    githubApi: "https://api.github.com/repos/Hiroshi/shadcn-admin",
  },
  {
    title: "Crypto Exchange Development",
    type: "mobile development",
    image: (
      <Image
        src={exchange}
        sizes="100vw"
        fill
        alt="Shadcn Admin"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Unlock new revenue stream with crypto exchange software.",
    tags: [""],
    liveUrl: "#",
    codeUrl: "https://github.com/lucky-gru/shadcn-admin",
    bgColor: "bg-[#FBFBFB]",
    githubApi: "https://api.github.com/repos/Hiroshi/shadcn-admin",
  },
];

export default AboutSection;
