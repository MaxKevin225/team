import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

import NavBar from "../../components/kevin/common/navBar";
import Footer from "../../components/kevin/common/footer";
import Logo from "../../components/kevin/common/logo";
import Socials from "../../components/kevin/about/socials";

import INFO from "../../data/user";
import SEO from "../../data/seo";

const About: React.FC = () => {
  const [stayLogo, setStayLogo] = useState<boolean>(false);
  const [logoSize, setLogoSize] = useState<number>(80);
  const [oldLogoSize, setOldLogoSize] = useState<number>(80);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = Math.round(window.pageYOffset);
      const newLogoSize = 80 - (scroll * 4) / 10;

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 40) {
          setLogoSize(newLogoSize);
          setOldLogoSize(newLogoSize);
          setStayLogo(false);
        } else {
          setStayLogo(true);
        }
      } else {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoSize, oldLogoSize]);

  const currentSEO = SEO.find((item) => item.page === "about");

  const logoStyle: React.CSSProperties = {
    display: "flex",
    position: stayLogo ? "fixed" : "relative",
    top: stayLogo ? "3vh" : "auto",
    zIndex: 999,
    border: stayLogo ? "1px solid white" : "none",
    borderRadius: stayLogo ? "50%" : "none",
    boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
  };

  return (
    <>
      <Head>
        <title>{`About | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO?.description} />
        <meta name="keywords" content={currentSEO?.keywords.join(", ")} />
      </Head>

      <div className="bg-[rgb(255 242 242)] relative">
        <NavBar active="about" />
        <div className="max-w-[1200px] bg-white p-20 mx-auto dark:bg-[#1B2731]">
          <div className="flex justify-start items-center pt-32">
            <div style={logoStyle}>
              <Logo width={logoSize} link={false} />
            </div>
          </div>

          <div className="flex flex-col flex-grow mt-10">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:flex-grow lg:basis-[900px]">
                <div className="text-4xl font-bold dark:text-carrigreen">
                  {INFO.about.title}
                </div>

                {INFO.about.description.map((detail, index) => (
                  <div className="mt-4 text-lg lg:w-4/5" key={index}>
                    {detail}
                  </div>
                ))}
              </div>

              <div className="flex flex-col lg:basis-[300px] mt-10 lg:mt-0">
                <div className="w-[370px] lg:w-[370px] mx-auto">
                  <div className="overflow-hidden rounded-[10%] transform rotate-3">
                    <Image
                      src="/about.jpg"
                      alt="about"
                      width={500} // Use actual width and height if known
                      height={500}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="py-12 hidden lg:block">
                  <Socials />
                </div>
              </div>
            </div>
            <div className="py-8 block lg:hidden">
              <Socials />
            </div>
          </div>
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
