import { useEffect, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { RoughNotation } from "react-rough-notation";

import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";
import { MdxMeta } from "pages/blog/posts/[slug]";
import BlogImageCard from "@/components/BlogImageCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  posts: MdxMeta[];
};

const BlogSection: React.FC<Props> = ({ posts }) => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  const teamInfo = [
    {
      id: 1,
      name: "Hiroshi Tanaka",
      description:
        "A team player, problem-solver, and passionate about building systems. Core skills are React.js, Javascript, Typescript, Node.js, Python, Solana blockchain, Rust, AI (LLM) area.",
      imageUrl: "/team/hiroshi.jpg",
      resume: "/resume/hiroshitanaka.pdf",
    },
    {
      id: 2,
      name: "Takeshi Suzuki",
      description:
        "Result-oriented senior frontend engineer with 7 years of professional experience in web development. Expert in Typescript, Node.js, React, Angular, Vue, Nest.js, Express.js, PostgreSQL, and MongoDB.",
      imageUrl: "/team/takeshi.png",
      resume: "/resume/takeshisuzuki.pdf",
    },
    {
      id: 3,
      name: "Kevin Lim",
      description:
        "Senior Full Stack Developer with a vast array of knowledge in many different front end and backend languages, responsive frameworks, databases and best code practices. Having extensive experience working with web and blockchain.",
      imageUrl: "/team/kevin.png",
      resume: "/resume/kevinlim.pdf",
    },
    {
      id: 4,
      name: "John Lee",
      description:
        "I specialize in end-to-end development of software systems using the latest technologies to build Blockchain and web platforms of any kind. ",
      imageUrl: "/team/jone.png",
      resume: "/resume/Johnlee.pdf",
    },
  ];

  // Set active link for blog section
  const blogSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    blogSection && onSectionChange!("team");
  }, [blogSection]);

  return (
    <div className="bg-[#F5F5F5] dark:bg-[#1B2731]">
      <section ref={sectionRef} id="team" className="section md:px-10">
        <div className="text-center">
          <RoughNotation
            type="underline"
            color={`${
              theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"
            }`}
            strokeWidth={3}
            order={1}
            show={isOnScreen}
          >
            <h2 className="section-heading">About Team</h2>
          </RoughNotation>
        </div>
        <div className="text-center mb-8" ref={elementRef}>
          Explore our portfolio to see how we can empower your{" "}
          <br className="hidden sm:block" aria-hidden="true" />
          business with the latest in web, mobile, and blockchain technology.
        </div>
        <div>
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{
              dynamicBullets: true,
            }}
            wrapperTag="ul"
            navigation
            className="swiper-padding-mobile xs:swiper-padding"
            breakpoints={{
              100: {
                slidesPerView: "auto",
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
                centeredSlides: false,
              },
            }}
          >
            {teamInfo.map((team, index) => (
              <SwiperSlide key={team.id} tag="li">
                <BlogImageCard
                  className={`${index > 3 ? "hidden lg:block" : ""}`}
                  key={team.id}
                  team={team}
                  fullWH
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
