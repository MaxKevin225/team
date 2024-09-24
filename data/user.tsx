// Define the types for INFO object
interface SocialLinks {
  twitter: string;
  github: string;
  linkedin: string;
  facebook: string;
}

interface Homepage {
  title: string;
  description: string[];
}

interface About {
  title: string;
  description: string[];
}

interface History {
  title: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  logo: string;
  linkText: string;
  link: string;
}

interface Info {
  main: {
    title: string;
    name: string;
    email: string;
    logo: string; // Change the path if needed
  };
  socials: SocialLinks;
  homepage: Homepage;
  about: About;
  history: History;
  projects: Project[];
}

// Now, the INFO object with types
export const INFO: Info = {
  main: {
    title: "Kevin Lim",
    name: "Kevin Lim",
    email: "kevin@prohub.work",
    logo: "/logo.png", // Adjust this path if needed
  },

  socials: {
    twitter: "http://www.twitter.com/#!/kevinlim225",
    github: "https://github.com/silversoft77",
    linkedin: "https://www.linkedin.com/in/leemkevin",
    facebook: "http://www.facebook.com/kevinlim225",
  },

  homepage: {
    title: "Full-Stack | Web3 | AI/ML Researcher",
    description: [
      "Accomplished developer with a proven ability to architect and implement web-based software solutions supporting business, government, and financial objectives. ",
      "Results-driven Frontend and Web3 Developer with 9+ years of experience in frontend development and expertise in Web3 technologies, seeking opportunities to contribute technical prowess and innovative solutions to dynamic projects.",
      "Proven track record of developing and deploying web applications from scratch, optimizing existing applications for improved performance, and conducting testing and debugging activities",
      "Committed to delivering innovative solutions and contributing to the success of any project."
    ],
  },

  about: {
    title: "Kevin Lim",
    description: [
      "Accomplished developer with a proven ability to architect and implement web-based software solutions supporting business, government, and financial objectives.",
      "I'm a full-stack developer (meaning front-end stuff that you see, like HTML, CSS, and JavaScript; back-end stuff you don't see, like Node.js, Spring boot and MySQL | Mongo; and even 'deeper' back-end stuff you've probably never had to think about, like server software and which database to use) with a vast array of knowledge in many different front end and backend languages, responsive frameworks, databases and best code practices. Having extensive experience working with web and blockchain. I am looking to join forces with core technologies to continue to grow my skill set while contributing to the positive outcome.",
      "I have a proven track record of presenting complex analytical findings to stakeholders and cross-functional teams, facilitating data-driven decision-making. My passion for data science drives me to continually learn and explore cutting-edge techniques, such as NLP and time series analysis, demonstrated through projects like TimeInf and my top performance in Kaggle competitions.",
      "With a focus on translating data into measurable results, I am committed to leveraging my skills to solve real-world challenges and contribute to innovative, data-centric solutions.",
      "Many of my personal projects are available to anyone interested via open source software on GitHub.",
    ],
  },

  history: {
    title: "Work Experience",
    description:
      "Accomplished developer with a proven ability to architect and implement web-based software solutions supporting business, government, and financial objectives. ",
  },

  projects: [
    {
      title: "Aether Apparel",
      description:
        "Aether Apparel is an e-commerce website I developed to showcase and sell high-quality clothing with a focus on modern design and user experience.",
      logo: "/projects/image-1.jpg",
      linkText: "View Project",
      link: "https://aetherapparel.com/",
    },

    {
      title: "Design Perfecto",
      description:
        "Design Perfecto is a sleek, user-friendly platform I created for showcasing design services, emphasizing aesthetics and functionality to attract clients.",
      logo: "/projects/image-2.jpg",
      linkText: "View Project",
      link: "https://designperfecto.com/",
    },

    {
      title: "Go Tasting Local",
      description:
        "Go Tasting Local is an interactive app I developed to help users discover and explore local food and drink experiences, enhancing their culinary adventures.",
      logo: "/projects/image-4.jpg",
      linkText: "View Project",
      link: "https://apps.apple.com/in/app/go-tasting-local/id1567525232",
    },

    {
      title: "Myka",
      description:
        "Myka is a personalized fitness app I created to help users achieve their health goals with tailored workout plans, progress tracking, and nutritional guidance",
      logo: "/projects/image-5.jpg",
      linkText: "View Project",
      link: "https://apps.apple.com/in/app/myka/id1600228371",
    },

    {
      title: "Jungle Freaks",
      description:
        "Jungle Freaks is a vibrant NFT collection I developed, featuring unique, hand-drawn characters that celebrate creativity and community within the digital art space.",
      logo: "/projects/image-6.jpg",
      linkText: "View Project",
      link: "https://junglefreaks.io/",
    },

    {
      title: "Blazex",
      description:
        "Blazex is a cutting-edge platform for cryptocurrency trading, offering advanced tools and a user-friendly interface for both novice and experienced traders.",
      logo: "/projects/image-7.jpg",
      linkText: "View Project",
      link: "https://blazex.org",
    },

    {
      title: "Onedex",
      description:
        "OneDex is a decentralized exchange that allows users to trade cryptocurrencies seamlessly with a focus on security and user experience.",
      logo: "/projects/image-8.jpg",
      linkText: "View Project",
      link: "https://onedex.app",
    },
  ],
};

export default INFO;
