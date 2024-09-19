import {
  Linkedin,
  Mail,
  Github,
  BriefcaseBusiness,
  GraduationCap,
  ArrowUpRight,
  BookOpen,
  Code,
  Dumbbell,
  Utensils,
  SquareTerminal,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import AnimatedText from "@/components/animated-text";

function NavLink({ text, href }: { text: string; href: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      className="font-fira flex gap-4 text-gray-400 hover:text-white"
      initial="initial"
      whileHover="hover"
      animate="initial"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        className={`center-line inline-block overflow-hidden self-stretch ${
          isHovered ? "white" : ""
        }`}
        variants={{
          initial: { width: 36 },
          hover: { width: 72 },
        }}
        transition={{ duration: 0.1 }}
      ></motion.span>
      {text}
    </motion.a>
  );
}

function TerminalLink() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={"/terminal"}
      className="flex gap-4 items-center text-md font-fira text-gray-400 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SquareTerminal />{" "}
      {isHovered && <AnimatedText text="Launch Terminal" duration={0.5} />}
    </Link>
  );
}

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <div className="grid lg:grid-cols-[400px_1fr] max-w-screen-2xl xl:p-[100px] lg:p-[80px] p-[40px]">
      <header className="flex flex-col gap-4 relative">
        <div className="header-content lg:h-[80vh] flex flex-col gap-4 lg:sticky xl:top-[100px] lg:top-[80px] top-[40px]">
          <h1 className="text-5xl font-bold">
            <a href="https://brzh.dev">Brian Zhang</a>
          </h1>
          <h2 className="text-2xl bold-semibold">Web Developer</h2>
          <p className="text-gray-400">
            I build clean, responsive, and user-friendly web apps.
          </p>
          {windowWidth > 1024 && (
            <nav className="mt-16">
              <ul className="flex flex-col gap-8">
                <li>
                  <NavLink text="ABOUT" href="#about" />
                </li>
                <li>
                  <NavLink text="EXPERIENCE/EDUCATION" href="#experience" />
                </li>
                <li>
                  <NavLink text="PROJECTS" href="#projects" />
                </li>
                <li className="self-start">
                  <TerminalLink />
                </li>
              </ul>
            </nav>
          )}
          <ul className="links flex gap-8 lg:absolute bottom-[10%]">
            <li>
              <motion.a
                href="https://www.github.com/bzhang98"
                target="_blank"
                className="text-gray-400"
              >
                <motion.div
                  whileHover={{ scale: 1.2, color: "white" }}
                  transition={{ duration: 0.2 }}
                >
                  <Github size={30} />
                </motion.div>
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://www.linkedin.com/in/zhang-br1998"
                target="_blank"
                className="text-gray-400"
              >
                <motion.div
                  whileHover={{ scale: 1.2, color: "white" }}
                  transition={{ duration: 0.2 }}
                >
                  <Linkedin size={30} />
                </motion.div>
              </motion.a>
            </li>
            <li>
              <motion.a
                href="mailto:zhang.br1998@gmail.com"
                className="text-gray-400"
              >
                <motion.div
                  whileHover={{ scale: 1.2, color: "white" }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail size={30} />
                </motion.div>
              </motion.a>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <section
          id="about"
          className="flex flex-col gap-8 my-12 lg:mb-12 lg:mt-0"
        >
          <div className="flex items-end text-4xl font-fira ">
            <AnimatedText text="< Hello World! / >" duration={2} />
            <span>_</span>
          </div>

          <p className="text-gray-400">
            I'm Brian, a web developer and computer science student looking to
            make my mark in the tech industry. With hands-on experience in
            full-stack development using React, TypeScript, and modern UI
            frameworks, I specialize in building intuitive, user-focused web
            applications. I'm passionate about solving real-world problems
            through code and am eager to apply my skills in a professional
            setting. Currently, I'm seeking opportunities to contribute to a
            dynamic team and grow as a developer.
          </p>
          <p className="text-gray-400">
            My journey into software development is anything but conventional.
            With a background in pharmacy, I've developed a detail-oriented and
            analytical mindset, which I'm now applying to my passion for
            technology.
          </p>
          <p className="text-gray-400">
            My main interest is in full-stack development and UI/UX design. I
            love creating beautiful and intuitive user interfaces that improve
            how people interact with technology. I'm always looking to learn new
            technologies and expand my skill set. I'm currently studying
            Computer Science at Oregon State University, where I'm learning the
            fundamentals of software development and computer science theory.
            I'm also working on side projects to practice my skills and build a
            portfolio.
          </p>
          <p className="text-gray-400">
            When I'm not coding or studying, you'll find me at the gym, curled
            up with a good book, or trying the latest trendy restaurants in my
            area. I'm driven by the potential of technology to solve real-world
            problems, and I'm excited to grow my skills and make an impact in
            the field.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center">
              <Code className="w-6 h-6 mr-2 text-blue-500" />
              <span className="text-gray-400">Full-stack Development</span>
            </div>
            <div className="flex items-center">
              <GraduationCap className="w-6 h-6 mr-2 text-green-500" />
              <span className="text-gray-400">Computer Science Student</span>
            </div>
            <div className="flex items-center">
              <Dumbbell className="w-6 h-6 mr-2 text-red-500" />
              <span className="text-gray-400">Fitness Enthusiast</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-yellow-500" />
              <span className="text-gray-400">Avid Reader</span>
            </div>
            <div className="flex items-center">
              <Utensils className="w-6 h-6 mr-2 text-purple-500" />
              <span className="text-gray-400">Food Explorer</span>
            </div>
          </div>
        </section>
        <section id="experience" className="mb-12">
          <h2 className="text-xl mb-8">
            My Professional and Educational Background
          </h2>
          <VerticalTimeline
            layout={windowWidth < 1430 ? "1-column-left" : "2-columns"}
            className="mb-4"
          >
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
              <h3 className="vertical-timeline-element-title">BSc. Pharmacy</h3>
              <h4 className="vertical-timeline-element-subtitle">
                University of Manitoba
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
          <motion.a
            href="https://docs.google.com/document/d/1tpKiwA99oj27TdVLMgwVC6YfjW9b9CW4ch9A3cxqhm4/edit?usp=sharing"
            target="_blank"
            className="text-lg flex hover:text-teal-500"
            whileHover="hover"
          >
            View my full resume
            <motion.div
              initial={{ x: 4, y: 8 }}
              variants={{ hover: { x: 10, y: 2 } }}
              transition={{ type: "spring", stiffness: 300, duration: 0.5 }}
            >
              <ArrowUpRight size={16} />
            </motion.div>
          </motion.a>
        </section>
        <section id="projects">
          <h2 className="text-xl mb-8">Projects</h2>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-2">
              <img
                src="/images/android-chrome-192x192.png"
                alt="query crafter logo"
                style={{
                  width: 200,
                }}
                className="self-start"
              />

              <div className="content">
                <h3 className="text-lg font-bold">Portfolio Site</h3>
                <p>
                  You're here! This React.js website was scaffolded with Vite
                  and styled with Tailwind CSS. It features a mobile-friendly
                  responsive design and smooth animations using Framer Motion.
                  The site is hosted on Vercel.
                </p>
                <p className="mb-4">
                  You can also view the content of website in a simulated
                  terminal environment built into the browser. Go there now by
                  clicking the link below.
                </p>
                <TerminalLink />
                <ul className="flex flex-wrap gap-2 mt-4">
                  <li className="bg-teal-800/70 text-teal-300 text-xs py-2 px-4 rounded-full">
                    HTML
                  </li>
                  <li className="bg-teal-800/70 text-teal-300 text-xs py-2 px-4 rounded-full">
                    CSS
                  </li>
                  <li className="bg-teal-800/70 text-teal-300 text-xs py-2 px-4 rounded-full">
                    TypeScript
                  </li>
                  <li className="bg-teal-800/70 text-teal-300 text-xs py-2 px-4 rounded-full">
                    React
                  </li>
                  <li className="bg-teal-800/70 text-teal-300 text-xs py-2 px-4 rounded-full">
                    Tailwind CSS
                  </li>
                  <li className="bg-teal-800/70 text-teal-300 text-xs py-2 px-4 rounded-full">
                    Framer Motion
                  </li>
                </ul>
                <div className="links mt-4 flex gap-4">
                  <motion.a
                    href="https://github.com/bzhang98/portfolio-site"
                    target="_blank"
                    className="flex hover:text-teal-500 border-2 border-teal-500 rounded-md py-2 px-4 gap-2"
                    whileHover="hover"
                  >
                    GitHub
                    <motion.div
                      initial={{ x: -2, y: 4 }}
                      variants={{ hover: { x: 2, y: 0 } }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        duration: 0.5,
                      }}
                    >
                      <ArrowUpRight size={16} />
                    </motion.div>
                  </motion.a>
                </div>
              </div>
            </li>
            <li className="flex gap-2">
              <img
                src="/images/qc-logo.png"
                alt="query crafter logo"
                style={{
                  width: 200,
                }}
                className="self-start"
              />
              <div className="content">
                <h3 className="text-lg font-bold">Query Crafter</h3>
                <p>
                  Create and customize Google search queries effortlessly with
                  this React-based app. Build powerful search queries with the
                  ability to filter specific keywords, domains, filetypes, and
                  more. Search directly on Google with your custom query or copy
                  the query to your clipboard. You can also view your search
                  history for previously created queries.
                </p>
                <p className="my-4 font-semibold">⏳ Coming soon:</p>
                <ul className="flex flex-col gap-2 custom-list-style">
                  <li className="flex gap-[6px]">
                    <span>🚧</span>Favorite frequently used queries
                  </li>
                  <li className="flex gap-[6px]">
                    <span>🚧</span>Sync history and favorites across devices
                  </li>
                  <li className="flex gap-[6px]">
                    <span>🚧</span>More filtering options such as date ranges
                    and language preferences
                  </li>
                  <li className="flex gap-[6px]">
                    <span>🚧</span>Filter searches for other search engines
                  </li>
                </ul>
                <ul className="flex flex-wrap gap-2 mt-4">
                  <li className="bg-teal-800/70 text-teal-300 text-xs py-2 px-4 rounded-full">
                    HTML
                  </li>
                  <li className="bg-teal-800/70 text-teal-300 text-xs py-2 px-4 rounded-full">
                    CSS
                  </li>
                  <li className="bg-teal-800/70 text-teal-300 text-xs py-2 px-4 rounded-full">
                    TypeScript
                  </li>
                  <li className="bg-teal-800/70 text-teal-300 text-xs py-2 px-4 rounded-full">
                    React
                  </li>
                  <li className="bg-teal-800/70 text-teal-300 text-xs py-2 px-4 rounded-full">
                    Tailwind CSS
                  </li>
                  <li className="bg-teal-800/70 text-teal-300 text-xs py-2 px-4 rounded-full">
                    Shadcn UI
                  </li>
                  <li className="bg-teal-800/70 text-teal-300 text-xs py-2 px-4 rounded-full">
                    Zod Schema Validation
                  </li>
                  <li className="bg-teal-800/70 text-teal-300 text-xs py-2 px-4 rounded-full">
                    React Hook Form
                  </li>
                </ul>
                <div className="links mt-4 flex gap-4">
                  <motion.a
                    href="https://www.github.com/bzhang98/query-crafter"
                    target="_blank"
                    className="flex hover:text-teal-500 border-2 border-teal-500 rounded-md py-2 px-4 gap-2"
                    whileHover="hover"
                  >
                    GitHub
                    <motion.div
                      initial={{ x: -2, y: 4 }}
                      variants={{ hover: { x: 2, y: 0 } }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        duration: 0.5,
                      }}
                    >
                      <ArrowUpRight size={16} />
                    </motion.div>
                  </motion.a>
                  <motion.a
                    href="https://www.query-crafter.vercel.app/"
                    target="_blank"
                    className="flex hover:text-teal-500 border-2 border-teal-500 rounded-md py-2 px-4 gap-2"
                    whileHover="hover"
                  >
                    Live Demo
                    <motion.div
                      initial={{ x: -2, y: 4 }}
                      variants={{ hover: { x: 2, y: 0 } }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        duration: 0.5,
                      }}
                    >
                      <ArrowUpRight size={16} />
                    </motion.div>
                  </motion.a>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </main>
      {/* <ProceduralBackground />
        <section
          className="flex justify-center items-center mt-6 overflow-hidden"
          ref={projectsSectionRef}
        >
          <div className="content flex flex-col justify-center items-center gap-4 py-24">
            <h2 className="underlined text-4xl font-bold">Projects</h2>
            <div className="flex flex-col gap-16 min-w-[100%]">
              <motion.div
                className=""
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
                    <motion.a
                      href="https://github.com/bzhang98/query-crafter"
                      target="_blank"
                      className="flex items-center gap-2 py-2 px-4 border-2 border-primary-color rounded-md hover:bg-secondary-color hover:text-black"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      Github <ExternalLink />
                    </motion.a>
                    <motion.a
                      href="https://query-crafter.vercel.app/"
                      target="_blank"
                      className="flex items-center gap-2 py-2 px-4 border-2 border-primary-color rounded-md hover:bg-secondary-color hover:text-black"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      Live <ExternalLink />
                    </motion.a>
                    <motion.button
                      className="flex items-center gap-2 py-2 px-4 border-2 border-primary-color rounded-md hover:bg-secondary-color hover:text-black"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                      onClick={() => {
                        if (queryCrafterGallery.current) {
                          queryCrafterGallery.current.showModal();
                        }
                      }}
                    >
                      Gallery <Images />
                    </motion.button>
                  </div>
                </div>
                <dialog
                  ref={queryCrafterGallery}
                  className="rounded-lg fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg z-50 w-[90vw] max-w-[800px] overflow-hidden"
                >
                  <div className="overflow-x-auto pb-6 px-6 pt-6">
                    <div className="flex gap-8 items-end">
                      <figure className="w-full flex-shrink-0">
                        <img
                          src="/images/query_crafter_gallery/preview.png"
                          alt="Preview"
                          className="rounded-lg shadow-md w-full h-auto object-cover"
                        />
                        <figcaption className="text-black mt-2">
                          Preview
                        </figcaption>
                      </figure>
                      <figure className="w-full flex-shrink-0">
                        <img
                          src="/images/query_crafter_gallery/dark-mode-preview.png"
                          alt="Dark Mode Preview"
                          className="rounded-lg shadow-md w-full h-auto object-cover"
                        />
                        <figcaption className="text-black mt-2">
                          Dark Mode
                        </figcaption>
                      </figure>
                      <figure className="w-full flex-shrink-0">
                        <img
                          src="/images/query_crafter_gallery/search-history.png"
                          alt="Search History"
                          className="rounded-lg shadow-md w-full h-auto object-cover"
                        />
                        <figcaption className="text-black mt-2">
                          Search History
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <button
                      className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                      onClick={() => {
                        if (queryCrafterGallery.current) {
                          queryCrafterGallery.current.close();
                        }
                      }}
                    >
                      Close
                    </button>
                    <p className="text-black flex">
                      Scroll to see more <ChevronsRight />
                    </p>
                  </div>
                </dialog>
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
                    <motion.button
                      className="flex items-center gap-2 py-2 px-4 border-2 border-primary-color rounded-md hover:bg-secondary-color hover:text-black"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                      onClick={() => {
                        if (stockAppGallery.current) {
                          stockAppGallery.current.showModal();
                        }
                      }}
                    >
                      Gallery <Images />
                    </motion.button>
                  </div>
                </div>
                <dialog
                  ref={stockAppGallery}
                  className="rounded-lg fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg z-50 w-[90vw] max-w-[800px] overflow-hidden"
                >
                  <div className="overflow-x-auto pb-6 px-6 pt-6">
                    <div className="flex gap-8 items-end">
                      <figure className="w-full flex-shrink-0">
                        <img
                          src="/images/stock_app_gallery/home.png"
                          alt="Preview"
                          className="rounded-lg shadow-md w-full h-auto object-cover"
                        />
                        <figcaption className="text-black mt-2">
                          Home page
                        </figcaption>
                      </figure>
                      <figure className="w-full flex-shrink-0">
                        <img
                          src="/images/stock_app_gallery/search.png"
                          alt="Dark Mode Preview"
                          className="rounded-lg shadow-md w-full h-auto object-cover"
                        />
                        <figcaption className="text-black mt-2">
                          Search
                        </figcaption>
                      </figure>
                      <figure className="w-full flex-shrink-0">
                        <img
                          src="/images/stock_app_gallery/stock-page.png"
                          alt="Search History"
                          className="rounded-lg shadow-md w-full h-auto object-cover"
                        />
                        <figcaption className="text-black mt-2">
                          Stock details
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4">
                    <button
                      className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                      onClick={() => {
                        if (stockAppGallery.current) {
                          stockAppGallery.current.close();
                        }
                      }}
                    >
                      Close
                    </button>
                    <p className="text-black flex">
                      Scroll to see more <ChevronsRight />
                    </p>
                  </div>
                </dialog>
              </motion.div>
            </div>
          </div>
        </section>
      </main> */}
    </div>
  );
}
