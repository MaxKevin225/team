import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type Props = {
  index: number;
  project: {
    title: string;
    type: string;
    image: JSX.Element;
    desc: string;
    tags: string[];
    liveUrl: string;
    codeUrl: string;
    bgColor: string;
    githubApi: string;
  };
};

const SkillCard: React.FC<Props> = ({ index, project }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const even = index % 2 === 0 ? true : false;

  // Animations
  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: `70% bottom`,
      },
    });

    tl.fromTo(
      q(".project-image"),
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        ease: "Power3.easeInOut",
        duration: 0.5,
        stagger: 0.2,
      }
    )
      .fromTo(q(".project-text"), { y: 100 }, { y: 0, stagger: 0.2 }, "<25%")
      .fromTo(
        q(".project-desc"),
        { opacity: 0 },
        { opacity: 1, stagger: 0.2 },
        "<10%"
      )
      .fromTo(
        q(".project-tags"),
        { y: -40 },
        { y: 0, stagger: 0.1, ease: "Elastic.easeOut" },
        "<25%"
      );
  }, []);

  const [starCount, setStarCount] = useState();
  const [starCountUrl, setStarCountUrl] = useState();

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      const response = await fetch(project.githubApi);
      const data = await response.json();
      const stargazersCount = data.stargazers_count;
      const stargazersUrl = data.stargazers_url;

      if (stargazersCount && stargazersUrl && !ignore) {
        setStarCount(stargazersCount);
        setStarCountUrl(stargazersUrl);
      }
    }

    fetchData();

    () => {
      ignore = true;
    };
  }, [project.githubApi]);

  return (
    <div ref={sectionRef} className={`md:basis-1/3 md:px-8 py-2 md:py-4`}>
      <div className={`project-card project-card-${index}`}>
        <div className="overflow-hidden">
          <div
            className={`project-image ${project.bgColor} relative aspect-[16/9]`}
          >
            {project.image}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="project-text flex items-center justify-between">
            <h3 className=" text-marrsgreen dark:text-carrigreen text-lg my-1 font-medium">
              {project.title}
            </h3>
          </div>
        </div>
        <div className="overflow-hidden">
          <p className="project-desc">{project.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
