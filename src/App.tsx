import {
  Linkedin,
  Mail,
  Github,
  BriefcaseBusiness,
  GraduationCap,
  ExternalLink,
  Clock9,
  Images,
  FileText,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { BookOpen, Code, Dumbbell, Utensils } from "lucide-react";

function App() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);

  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setScrollY(window.scrollY);
      });
    };
  }, []);

  const scrollToSection = (section: string) => {
    switch (section) {
      case "top":
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        break;
      case "about":
        if (aboutSectionRef.current) {
          console.log(aboutSectionRef.current.getBoundingClientRect().top);
          window.scrollTo({
            top:
              aboutSectionRef.current.getBoundingClientRect().top +
              scrollY -
              50,
            behavior: "smooth",
          });
        }
        break;
      case "projects":
        if (projectsSectionRef.current) {
          window.scrollTo({
            top:
              projectsSectionRef.current.getBoundingClientRect().top +
              scrollY -
              50,
            behavior: "smooth",
          });
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className={`app dark`}>
      <motion.header
        className={`fixed left-1/2 top-[20px] z-10 bg-white opacity-80 rounded-full text-black px-4 py-2`}
        initial={{ opacity: 0, y: 100, x: "-50%" }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <nav className={`flex flex-wrap justify-between items-center w-fit`}>
          <img className="w-[10%]" src="/images/favicon.ico" alt="Favicon" />
          <ul className="flex gap-8">
            <motion.li
              className="cursor-pointer text-xl font-semibold"
              onClick={() => scrollToSection("top")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Home
            </motion.li>
            <motion.li
              className="cursor-pointer text-xl font-semibold"
              onClick={() => scrollToSection("about")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              About
            </motion.li>
            <motion.li
              className="cursor-pointer text-xl font-semibold"
              onClick={() => scrollToSection("projects")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Projects
            </motion.li>
          </ul>
        </nav>
      </motion.header>
      <main>
        <section className="hero flex justify-center relative py-40 z-[1]">
          <motion.div
            className="content justify-center items-start gap-12"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <div className="flex flex-col gap-8">
              <h1 className="text-6xl font-extrabold flex flex-col 950:flex-row items-center">
                Hello World!{" "}
                <img
                  src="/images/memoji.png"
                  alt="Memoji of me"
                  className="w-[300px]"
                />
              </h1>
              <p className="text-2xl">
                I'm Brian, a web developer and computer science student looking
                to make my mark in the tech industry. With hands-on experience
                in full-stack development using React, TypeScript, and modern UI
                frameworks, I specialize in building intuitive, user-focused web
                applications. I'm passionate about solving real-world problems
                through code and am eager to apply my skills in a professional
                setting. Currently, I'm seeking opportunities to contribute to a
                dynamic team and grow as a developer.
              </p>
              <p className="text-2xl">Let's get in touch!</p>
              <div className="flex flex-wrap gap-8">
                <motion.a
                  href="https://github.com/bzhang98"
                  target="_blank"
                  className="text-white hover:bg-secondary-color hover:text-black flex items-center gap-2 p-2 rounded-md border border-primary-color"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Github /> GitHub <ExternalLink className="ml-4" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/brian-zhang-73317b2a6"
                  target="_blank"
                  className="text-white hover:bg-secondary-color hover:text-black flex items-center gap-2 p-2 rounded-md border border-primary-color"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Linkedin /> LinkedIn <ExternalLink className="ml-4" />
                </motion.a>
                <motion.a
                  href="mailto:zhang.br1998@gmail.com"
                  className="text-white hover:bg-secondary-color hover:text-black flex items-center gap-2 p-2 rounded-md border border-primary-color"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Mail /> Email Me
                </motion.a>
                <motion.a
                  href="https://drive.google.com/file/d/1SbpXgs6f7LMPU4RAfSLQ_UyOZl33IkyI/view?usp=sharing"
                  target="_blank"
                  className="text-white hover:bg-secondary-color hover:text-black flex items-center gap-2 p-2 rounded-md border border-primary-color"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <FileText /> Resume <ExternalLink className="ml-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="hero-background absolute w-full h-[100vh] top-0"
            initial={{
              height: "calc(100vh + 800px)",
              y: "100vh",
            }}
            animate={{
              height: "100%",
              y: 0,
            }}
            transition={{
              y: { duration: 1 },
              height: { duration: 1.5, delay: 2 },
            }}
          ></motion.div>
        </section>
        <motion.section
          className="about flex justify-center items-center"
          ref={aboutSectionRef}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
        >
          <div className="content flex flex-col justify-center items-center gap-6">
            <h2 className="underlined text-4xl font-bold">About Me</h2>
            <p className="text-lg">
              My journey into software development is anything but conventional.
              With a background in pharmacy, I've developed a detail-oriented
              and analytical mindset, which I'm now applying to my passion for
              technology.
            </p>
            <p className="text-lg">
              My main interest is in full-stack development and UI/UX design. I
              love creating beautiful and intuitive user interfaces that improve
              how people interact with technology. I'm always looking to learn
              new technologies and expand my skill set. I'm currently studying
              Computer Science at Oregon State University, where I'm learning
              the fundamentals of software development and computer science
              theory. I'm also working on side projects to practice my skills
              and build a portfolio.
            </p>
            <div>
              <h3 className="text-2xl text-center font-semibold mb-6">
                My Tech Stack
              </h3>
              <ul className="flex flex-wrap justify-center gap-8">
                <li className="flex gap-2 items-center text-lg font-semibold">
                  <img
                    src="/images/html5-svgrepo-com.svg"
                    alt="HTML5"
                    className="h-[50px]"
                  />
                  HTML
                </li>
                <li className="flex gap-2 items-center text-lg font-semibold">
                  <img
                    src="/images/css3-svgrepo-com.svg"
                    alt="CSS3"
                    className="h-[50px]"
                  />
                  CSS
                </li>
                <li className="flex gap-2 items-center text-lg font-semibold">
                  <img
                    src="/images/javascript-svgrepo-com.svg"
                    alt="JavaScript"
                    className="h-[50px]"
                  />
                  JavaScript
                </li>
                <li className="flex gap-2 items-center text-lg font-semibold">
                  <img
                    src="/images/react-svgrepo-com.svg"
                    alt="React"
                    className="h-[50px]"
                  />
                  React
                </li>
                <li className="flex gap-2 items-center text-lg font-semibold">
                  <img
                    src="/images/typescript-icon-svgrepo-com.svg"
                    alt="TypeScript"
                    className="h-[50px]"
                  />
                  TypeScript
                </li>
                <li className="flex gap-2 items-center text-lg font-semibold">
                  <img
                    src="/images/node-svgrepo-com.svg"
                    alt="Node.js"
                    className="h-[50px]"
                  />
                  Node.js
                </li>
                <li className="flex gap-2 items-center text-lg font-semibold">
                  <img
                    src="/images/express-logo.webp"
                    alt="Express"
                    className="h-[50px]"
                  />
                  Express
                </li>
                <li className="flex gap-2 items-center text-lg font-semibold">
                  <img
                    src="/images/firebase-svgrepo-com.svg"
                    alt="Firebase"
                    className="h-[50px]"
                  />
                  Firebase
                </li>
                <li className="flex gap-2 items-center text-lg font-semibold">
                  <img
                    src="/images/git-svgrepo-com.svg"
                    alt="Git"
                    className="h-[50px]"
                  />
                  Git
                </li>
              </ul>
            </div>
            <p className="text-lg">
              When I'm not coding or studying, you'll find me at the gym, curled
              up with a good book, or trying the latest trendy restaurants in my
              area. I'm driven by the potential of technology to solve
              real-world problems, and I'm excited to grow my skills and make an
              impact in the field.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <Code className="w-6 h-6 mr-2 text-blue-500" />
                <span>Full-stack Development</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-green-500" />
                <span>Computer Science Student</span>
              </div>
              <div className="flex items-center">
                <Dumbbell className="w-6 h-6 mr-2 text-red-500" />
                <span>Fitness Enthusiast</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-yellow-500" />
                <span>Avid Reader</span>
              </div>
              <div className="flex items-center">
                <Utensils className="w-6 h-6 mr-2 text-purple-500" />
                <span>Food Explorer</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold">
              My Educational and Professional Background
            </h3>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{
                  background: "rgb(233, 30, 99)",
                  color: "#fff",
                }}
                date="Sep 2024 - present"
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<GraduationCap />}
                position="right"
              >
                <h3 className="vertical-timeline-element-title">
                  Diploma Candidate - Software Engineering
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  BrainStation Bootcamp
                </h4>
                <p>Expected completion: Dec 2024</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{
                  background: "rgb(233, 30, 99)",
                  color: "#fff",
                }}
                date="Jan 2024 - present"
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<GraduationCap />}
              >
                <h3 className="vertical-timeline-element-title">
                  Degree Candidate - BSc. Computer Science
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Oregon State University
                </h4>
                <p>GPA: 4.0</p>
                <p>Honor Roll: Spring 2024</p>
                <p>Expected graduation year: 2026</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="Sep 2022 - Sep 2024"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<BriefcaseBusiness />}
              >
                <h3 className="vertical-timeline-element-title">
                  Costco Wholesale - Staff Pharmacist
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Winnipeg, MB, Canada
                </h4>
                <p>
                  Team Leadership, Operations Management, Staff Training and
                  Development, Workflow Optimization
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="Jul 2021 - Sep 2022"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<BriefcaseBusiness />}
                position="left"
              >
                <h3 className="vertical-timeline-element-title">
                  Walmart Canada - Staff Pharmacist
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Dauphin, MB, Canada
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{
                  background: "rgb(233, 30, 99)",
                  color: "#fff",
                }}
                date="Sep 2017 - Jun 2021"
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<GraduationCap />}
                position="right"
              >
                <h3 className="vertical-timeline-element-title">
                  BSc. Pharmacy
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  University of Manitoba
                </h4>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </motion.section>
        <section
          className="flex justify-center items-center mt-6 overflow-hidden"
          ref={projectsSectionRef}
        >
          <div className="content flex flex-col justify-center items-center gap-4 py-24">
            <h2 className="underlined text-4xl font-bold">Projects</h2>
            <div className="flex flex-col gap-16 min-w-[100%]">
              <motion.div
                className="flex justify-between gap-12 items-center"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ amount: 0.2, once: true }}
              >
                <div className="card-content flex flex-col gap-4">
                  <h3 className="text-lg font-bold">Portfolio Site</h3>
                  <p className="project-description">
                    You're here! This portfolio site was scaffolded with Vite,
                    built with React and styled with Tailwind CSS. It features a
                    mobile-friendly responsive design and smooth animations. The
                    site is hosted on Vercel and uses Framer Motion for
                    animations.
                  </p>
                  <ul className="tech-stack flex flex-wrap gap-4">
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      HTML
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      CSS
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      JavaScript
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      React
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      Tailwind CSS
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      Framer Motion
                    </li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                className="flex justify-between gap-12 items-center"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ amount: 0.2, once: true }}
              >
                <div className="card-content flex flex-col gap-4">
                  <h3 className="text-lg font-bold">Query Crafter</h3>
                  <p className="project-description">
                    Create and customize Google search queries effortlessly with
                    this React-based app. Build powerful search queries with the
                    ability to filter specific keywords, domains, filetypes, and
                    more. You can also view the page in dark mode for a more
                    comfortable user experience. User-interface built with
                    Tailwind CSS and Shadcn UI and form validation with Zod and
                    React Hook Form.
                  </p>
                  <p>Features coming soon:</p>
                  <ul className="flex flex-col gap-4 pl-[30px] custom-list-style">
                    <li>Save frequently used queries</li>
                    <li>View history</li>
                    <li>
                      Advanced filtering options such as date ranges and
                      language preferences
                    </li>
                    <li>Filtering searches for other search engines</li>
                  </ul>
                  <ul className="tech-stack flex flex-wrap gap-4">
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      HTML
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      CSS
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      JavaScript
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      React
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      Tailwind CSS
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      Shadcn UI
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      Zod
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      React Hook Form
                    </li>
                  </ul>
                  <div className="links flex gap-4">
                    <a
                      href="https://github.com/bzhang98/query-crafter"
                      target="_blank"
                      className="flex items-center gap-2 py-2 px-4 border-2 border-primary-color rounded-md transition duration-300 hover:bg-secondary-color hover:text-black"
                    >
                      Github <ExternalLink />
                    </a>
                    <a
                      href="https://query-crafter.vercel.app/"
                      target="_blank"
                      className="flex items-center gap-2 py-2 px-4 border-2 border-primary-color rounded-md transition duration-300 hover:bg-secondary-color hover:text-black"
                    >
                      Live <ExternalLink />
                    </a>
                    <button className="flex items-center gap-2 py-2 px-4 border-2 border-primary-color rounded-md transition duration-300 hover:bg-secondary-color hover:text-black">
                      Gallery <Images />
                    </button>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex justify-between gap-12"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ amount: 0.2, once: true }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="flex items-center gap-2 text-lg font-bold">
                    Market Simulator - Coming Soon <Clock9 />
                  </h3>
                  <p className="project-description">
                    View real-time stock prices and market data. Create an
                    account and start trading. Make trades based on real stock
                    prices and track your portfolio over time. This app is built
                    with React, TypeScript, and Firebase. User authentication is
                    handled with Firebase Auth and Firestore is used to store
                    user data.
                  </p>
                  <p>Features:</p>
                  <ul className="flex flex-col gap-4 pl-[30px] custom-list-style">
                    <li>View current and historical stock data</li>
                    <li>Simulate real stock trades based on live prices</li>
                    <li>Track the performance of your portfolio over time</li>
                    <li>
                      Add symbols to your watchlist and track their performance
                    </li>
                  </ul>
                  <ul className="tech-stack flex flex-wrap gap-4">
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      HTML
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      CSS
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      JavaScript
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      React
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      Tailwind CSS
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      Shadcn UI
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      Zod
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      React Hook Form
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      Firebase Auth
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      Cloud Firestore
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      API Integration
                    </li>
                    <li className="text-black bg-secondary-color px-4 py-2 rounded-md">
                      Custom Backend with Express.js
                    </li>
                  </ul>
                  <div className="links flex gap-4 locked">
                    <a className="flex items-center gap-2 py-2 px-4 text-gray-500 border-2 border-gray-500 rounded-md transition duration-300 cursor-not-allowed">
                      Github <ExternalLink />
                    </a>
                    <a className="flex items-center gap-2 py-2 px-4 text-gray-500 border-2 border-gray-500 rounded-md transition duration-300 cursor-not-allowed">
                      Live <ExternalLink />
                    </a>
                    <button className="flex items-center gap-2 py-2 px-4 border-2 border-primary-color rounded-md transition duration-300 hover:bg-secondary-color hover:text-black">
                      Gallery <Images />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
