import { useEffect, useState } from "react";
import Head from "next/head";

import NavBar from "../../components/kevin/common/navBar";
import Footer from "../../components/kevin/common/footer";
import Logo from "../../components/kevin/common/logo";
import Socials from "../../components/kevin/about/socials";

import INFO from "../../data/user";
import SEO from "../../data/seo";

const Contact: React.FC = () => {
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

  const currentSEO = SEO.find((item) => item.page === "contact");

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
        <title>{`Contact | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO?.description} />
        <meta name="keywords" content={currentSEO?.keywords.join(", ")} />
      </Head>

      <div className="bg-[rgb(255 242 242)] relative">
        <NavBar active="contact" />
        <div className="max-w-[1200px] bg-white p-10 mx-auto dark:bg-[#1B2731]">
          <div className="flex justify-start items-center pt-32">
            <div style={logoStyle}>
              <Logo width={logoSize} link={false} />
            </div>
          </div>

          <div className="flex flex-col justify-around mt-4">
            <div className="text-4xl font-bold dark:text-carrigreen">
              Let's Get in Touch: Ways to Connect with Me
            </div>

            <div className="mt-4 text-lg">
              Thank you for your interest in getting in touch with me. I welcome
              your feedback, questions, and suggestions. If you have a specific
              question or comment, please feel free to email me directly at{" "}
              <a
                href={`mailto:${INFO.main.email}`}
                className="text-blue-500 underline"
              >
                {INFO.main.email}
              </a>
              . I make an effort to respond to all messages within 24 hours,
              although it may take me longer during busy periods. Alternatively,
              you can use the contact form on my website to get in touch. Simply
              fill out the required fields and I'll get back to you as soon as
              possible. Finally, if you prefer to connect on social media, you
              can find me on . I post regular updates and engage with my
              followers there, so don't hesitate to reach out. Thanks again for
              your interest, and I look forward to hearing from you!
            </div>
          </div>

          <div className="flex flex-col mt-20">
            <div className="flex justify-start items-center">
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

export default Contact;
