import { useEffect, useState } from "react";
import Head from "next/head";
import NavBar from "../../components/kevin/common/navBar";
import Footer from "../../components/kevin/common/footer";
import Logo from "../../components/kevin/common/logo";
import Article from "../../components/kevin/history/history";

import INFO from "../../data/user";
import SEO from "../../data/seo";
import myHistory from "../../data/history";

const History: React.FC = () => {
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

  const currentSEO = SEO.find((item) => item.page === "history");

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
        <title>{`History | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO?.description} />
        <meta name="keywords" content={currentSEO?.keywords.join(", ")} />
      </Head>

      <div className="bg-[rgb(255 242 242)] relative">
        <NavBar active="history" />
        <div className="max-w-[1200px] bg-white p-20 mx-auto dark:bg-[#1B2731]">
          <div className="flex justify-start items-center pt-32">
            <div style={logoStyle}>
              <Logo width={logoSize} link={false} />
            </div>
          </div>

          <div className="flex flex-col flex-grow mt-10 pt-4">
            <div className="text-4xl font-bold dark:text-carrigreen">
              {INFO.history.title}
            </div>

            <div className="mt-4 text-lg">{INFO.history.description}</div>

            <div className="flex flex-col mt-12 pb-12">
              {myHistory.map((history, index) => (
                <div
                  className="pl-8 pb-5 border-l-2 border-gray-200"
                  key={index.toString()}
                >
                  <Article
                    key={index.toString()}
                    date={history().date}
                    title={history().title}
                    location={history().location}
                    role={history().role}
                    description={history().description}
                  />
                </div>
              ))}
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

export default History;
