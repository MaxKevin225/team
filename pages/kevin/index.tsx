import React, { useState, useEffect } from "react";
import Logo from "../../components/kevin/common/logo";
import Footer from "../../components/kevin/common/footer";
import NavBar from "../../components/kevin/common/navBar";
import History from "../../components/kevin/homepage/history";
import Contact from "../../components/kevin/homepage/contact";
import AllProjects from "../../components/kevin/projects/allProjects";
import INFO from "../../data/user";
import myhistory from "../../data/history";
import Image from "next/image";

interface HistoryItem {
  date: string;
  title: string;
  location: string;
  role: string;
  description: string;
}

const Homepage: React.FC = () => {
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
    <React.Fragment>
      <div className="bg-[rgb(255 242 242)] relative">
        <NavBar active="home" />
        <div className="max-w-[1200px] bg-white p-10 mx-auto dark:bg-[#1B2731]">
          <div className="flex justify-start items-center pt-32">
            <div style={logoStyle}>
              <Logo width={logoSize} link={false} />
            </div>
          </div>

          <div className="pt-6">
            <div className="flex justify-between items-center gap-5">
              <div className="flex flex-col items-start">
                <div className="w-full text-4xl font-bold text-primary dark:text-carrigreen">
                  {INFO.homepage.title}
                </div>
                {INFO.homepage.description.map(
                  (detail: string, index: number) => (
                    <div
                      key={index}
                      className="w-full text-lg text-secondary mt-4"
                    >
                      {detail}
                    </div>
                  )
                )}
              </div>

              <div className="flex justify-center items-center">
                <div className="w-[370px] h-[370px] overflow-hidden rounded-[10%] transform rotate-3">
                  <Image
                    src="/homepage.jpg"
                    alt="about"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>

            <div className="pt-10">
              <AllProjects />
            </div>

            <div className="pt-10 flex flex-row">
              <div>
                {myhistory.slice(0, 3).map((history, index) => (
                  <div
                    className="homepage-article"
                    key={(index + 1).toString()}
                  >
                    <History
                      key={(index + 1).toString()}
                      date={history().date}
                      title={history().title}
                      location={history().location}
                      role={history().role}
                      description={history().description}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Contact />
              </div>
            </div>

            <div className="pt-10">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
