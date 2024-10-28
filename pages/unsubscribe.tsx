import type { GetStaticProps, NextPage } from "next";

import AppHead from "@/components/AppHead";
import Loader from "@/components/Loader";
import SkipToMain from "@/components/SkipToMain";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import BlogSection from "@/sections/BlogSection";
import Footer from "@/components/Footer";

import { getAllPosts } from "utils/api";
import UnsubscribeForm from "@/components/UnsubscribeForm";

type Props = {
};

export const meta = {
  description:
    "As a team, we are driven by our passion for coding and our desire to tackle new challenges. If you have opportunities for collaboration or want to build something amazing, don't hesitate to contact us!.",
  author: "prohub.page",
  type: "website",
  ogImage: `${process.env.NEXT_PUBLIC_URL}/Hiroshi-dev-og-new.png`,
  siteName: "prohub.page",
  imageAlt: "prohub.page portfolio website",
};

const Unsubscribe: NextPage<Props> = ({ }) => {
  return (
    <>
      <AppHead
        title="prohub.page"
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <Loader>prohub.page</Loader>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <Header />
          <main id="main">
            <UnsubscribeForm />
          </main>
        </div>
      </div>

    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
    },
  };
};

export default Unsubscribe;
