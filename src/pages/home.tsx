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
} from "lucide-react";
import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AnimatedText from "@/components/animated-text";
import TextCycle from "@/components/text-cycle";
import useWindowDimensions from "@/hooks/use-window-dimensions";

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

export default function Home() {
  const { windowWidth } = useWindowDimensions();

  return (
    <div className="grid lg:grid-cols-[450px_1fr] max-w-screen-2xl xl:p-[100px] lg:p-[80px] p-[40px]">
      <motion.header
        className="flex flex-col gap-4 relative"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="header-content lg:h-[80vh] flex flex-col gap-4 lg:sticky xl:top-[100px] lg:top-[80px] top-[40px]">
          <h1 className="text-5xl font-bold">
            <a href="https://brzh.dev">Brian Zhang</a>
          </h1>

          <div className="relative mr-4">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-xl"></div>
            <div className="relative backdrop-blur-sm bg-white/10 rounded-xl px-2 py-8 shadow-xl text-center">
              <TextCycle />
            </div>
          </div>

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
              </ul>
            </nav>
          )}
          <ul className="links flex gap-8 lg:absolute bottom-[10%]">
            <li>
              <motion.a
                href="https://www.github.com/bzhang98"
                target="_blank"
                className="text-gray-400 relative"
                whileHover="hover"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  variants={{ hover: { opacity: 1 } }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl"
                ></motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, color: "white", opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="relative backdrop-blur-sm bg-white/10 rounded-full shadow-xl text-center p-2"
                >
                  <Github size={30} />
                </motion.div>
              </motion.a>
            </li>
            <li>
              <motion.a
                href="https://www.linkedin.com/in/zhang-br1998"
                target="_blank"
                className="text-gray-400 relative"
                whileHover="hover"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  variants={{ hover: { opacity: 1 } }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl"
                ></motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, color: "white", opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="relative backdrop-blur-sm bg-white/10 rounded-full shadow-xl text-center p-2"
                >
                  <Linkedin size={30} />
                </motion.div>
              </motion.a>
            </li>
            <li>
              <motion.a
                href="mailto:zhang.br1998@gmail.com"
                target="_blank"
                className="text-gray-400 relative"
                whileHover="hover"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  variants={{ hover: { opacity: 1 } }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl"
                ></motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, color: "white", opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="relative backdrop-blur-sm bg-white/10 rounded-full shadow-xl text-center p-2"
                >
                  <Mail size={30} />
                </motion.div>
              </motion.a>
            </li>
          </ul>
        </div>
      </motion.header>
      <motion.main
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
                background: "#11182799",
                color: "#93c5fd",
              }}
              date="Sep 2024 - present"
              iconStyle={{ background: "#111827", color: "#93c5fd" }}
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
                background: "#11182799",
                color: "#93c5fd",
              }}
              date="Jan 2024 - present"
              iconStyle={{ background: "#111827", color: "#93c5fd" }}
              icon={<GraduationCap />}
              position="right"
            >
              <h3 className="vertical-timeline-element-title">
                Degree Candidate - BSc. Computer Science
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Oregon State University
              </h4>
              <p>GPA: 4.0</p>
              <p>Honor Roll: Spring 2024</p>
              <p>Expected graduation: Apr 2026</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#33415599",
                color: "#FFF",
              }}
              date="Sep 2022 - Sep 2024"
              iconStyle={{ background: "#334155", color: "#FFF" }}
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
                background: "#33415599",
                color: "#FFF",
              }}
              date="Jul 2021 - Aug 2022"
              iconStyle={{ background: "#334155", color: "#FFF" }}
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
                background: "#11182799",
                color: "#93c5fd",
              }}
              date="Sep 2017 - May 2021"
              iconStyle={{ background: "#111827", color: "#93c5fd" }}
              icon={<GraduationCap />}
              position="right"
            >
              <h3 className="vertical-timeline-element-title">BSc. Pharmacy</h3>
              <h4 className="vertical-timeline-element-subtitle">
                University of Manitoba
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
          <motion.div className="relative w-fit" whileHover="hover">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-xl -z-10"></div>
            <motion.a
              href="https://docs.google.com/document/d/1tpKiwA99oj27TdVLMgwVC6YfjW9b9CW4ch9A3cxqhm4/edit?usp=sharing"
              target="_blank"
              className="flex rounded-xl py-2 px-4 gap-2 font-semibold relative backdrop-blur-sm bg-white/10 shadow-xl text-center"
              variants={{
                hover: {
                  scale: 1.05,
                  rotate: 5,
                  boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.5)",
                },
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                duration: 0.5,
              }}
            >
              View my Full Resume
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
          </motion.div>
        </section>
        <section id="projects">
          <h2 className="text-xl mb-8">Projects</h2>
          <ul className="flex flex-col gap-4">
            <motion.li
              className="flex flex-col gap-4 lg:flex-row"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src="/images/android-chrome-192x192.png"
                alt="site logo"
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
                  responsive design and animations using Framer Motion. The site
                  is hosted on Vercel.
                </p>
                <ul className="flex flex-wrap gap-2 mt-4">
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    HTML
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    CSS
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    TypeScript
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    React
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    Tailwind CSS
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    Framer Motion
                  </li>
                </ul>
                <div className="links mt-4 flex gap-4">
                  <motion.div className="relative" whileHover="hover">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-xl -z-10"></div>
                    <motion.a
                      href="https://github.com/bzhang98/portfolio-site"
                      target="_blank"
                      className="flex rounded-xl py-2 px-4 gap-2 font-semibold relative backdrop-blur-sm bg-white/10 shadow-xl text-center"
                      variants={{
                        hover: {
                          scale: 1.05,
                          rotate: 5,
                          boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.5)",
                        },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        duration: 0.5,
                      }}
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
                  </motion.div>
                </div>
              </div>
            </motion.li>
            <motion.li
              className="flex flex-col gap-4 lg:flex-row"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src="/images/mesh.png"
                alt="site logo"
                style={{
                  width: 200,
                }}
                className="self-start"
              />
              <div className="content">
                <h3 className="text-lg font-bold">
                  MESH (Minimal Emulated SHell)
                </h3>
                <p>
                  This project implements a simulated terminal environment
                  within a React application. It features an in-memory file
                  system with support for files and directories with persistent
                  storage coming soon. The terminal supports basic shell
                  commands such as <code>ls</code>, <code>cd</code>,{" "}
                  <code>cat</code>, <code>mkdir</code>, <code>touch</code> and
                  others. It also supports tab completion and history
                  navigation. The project uses TypeScript for improved type
                  safety and Jest for unit testing.
                </p>
                <ul className="flex flex-wrap gap-2 mt-4">
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    HTML
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    CSS
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    TypeScript
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    React
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    Tailwind CSS
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    Jest Testing Framework
                  </li>
                </ul>
                <p className="my-4 font-semibold">⏳ Coming soon:</p>
                <ul className="flex flex-col gap-2 custom-list-style">
                  <li className="flex gap-[6px]">
                    <span>🚧</span>Save files locally or on the cloud
                  </li>
                  <li className="flex gap-[6px]">
                    <span>🚧</span>Support for more complex commands (grep,
                    find, etc.)
                  </li>
                  <li className="flex gap-[6px]">
                    <span>🚧</span>Pipeline support
                  </li>
                  <li className="flex gap-[6px]">
                    <span>🚧</span>More powerful text editor
                  </li>
                </ul>
                <div className="links mt-4 flex gap-4">
                  <motion.div className="relative" whileHover="hover">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-xl -z-10"></div>
                    <motion.a
                      href="https://github.com/bzhang98/portfolio-site"
                      target="_blank"
                      className="flex rounded-xl py-2 px-4 gap-2 font-semibold relative backdrop-blur-sm bg-white/10 shadow-xl text-center"
                      variants={{
                        hover: {
                          scale: 1.05,
                          rotate: 5,
                          boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.5)",
                        },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        duration: 0.5,
                      }}
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
                  </motion.div>
                  <motion.div className="relative" whileHover="hover">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-xl -z-10"></div>
                    <motion.a
                      href="https://mesh-delta.vercel.app/"
                      target="_blank"
                      className="flex rounded-xl py-2 px-4 gap-2 font-semibold relative backdrop-blur-sm bg-white/10 shadow-xl text-center"
                      variants={{
                        hover: {
                          scale: 1.05,
                          rotate: 5,
                          boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.5)",
                        },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        duration: 0.5,
                      }}
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
                  </motion.div>
                </div>
              </div>
            </motion.li>
            <motion.li
              className="flex flex-col gap-4 lg:flex-row"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
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
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    HTML
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    CSS
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    TypeScript
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    React
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    Tailwind CSS
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    Shadcn UI
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    Zod Schema Validation
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    React Hook Form
                  </li>
                </ul>
                <div className="links mt-4 flex gap-4">
                  <motion.div className="relative" whileHover="hover">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-xl -z-10"></div>
                    <motion.a
                      href="https://github.com/bzhang98/query-crafter"
                      target="_blank"
                      className="flex rounded-xl py-2 px-4 gap-2 font-semibold relative backdrop-blur-sm bg-white/10 shadow-xl text-center"
                      variants={{
                        hover: {
                          scale: 1.05,
                          rotate: 5,
                          boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.5)",
                        },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        duration: 0.5,
                      }}
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
                  </motion.div>
                  <motion.div className="relative" whileHover="hover">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-xl -z-10"></div>
                    <motion.a
                      href="https://query-crafter.vercel.app/"
                      target="_blank"
                      className="flex rounded-xl py-2 px-4 gap-2 font-semibold relative backdrop-blur-sm bg-white/10 shadow-xl text-center"
                      variants={{
                        hover: {
                          scale: 1.05,
                          rotate: 5,
                          boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.5)",
                        },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        duration: 0.5,
                      }}
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
                  </motion.div>
                </div>
              </div>
            </motion.li>
            <motion.li
              className="flex flex-col gap-4 lg:flex-row"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src="/images/stock-app-thumbnail.jpg"
                alt="stock app thumbnail - credit Vecteezy"
                style={{
                  width: 200,
                  borderRadius: 8,
                }}
                className="self-start"
              />
              <div className="content">
                <h3 className="text-lg font-bold">
                  Market Simulator - Coming Soon™
                </h3>
                <p>
                  View real-time stock prices and market data. Create an account
                  and start trading. Make trades based on real stock prices and
                  track your portfolio over time. This app is built with React,
                  TypeScript, and Firebase. User authentication is handled with
                  Firebase Auth and Firestore is used to store user data.
                </p>
                <p className="my-4 font-semibold">
                  🔨Features under construction:
                </p>
                <ul className="flex flex-col gap-2 custom-list-style">
                  <li className="flex gap-[6px]">
                    <span>🚧</span>View current and historical stock data
                  </li>
                  <li className="flex gap-[6px]">
                    <span>🚧</span>Simulate real stock trades based on live
                    prices
                  </li>
                  <li className="flex gap-[6px]">
                    <span>🚧</span>Track the performance of your portfolio over
                    time
                  </li>
                  <li className="flex gap-[6px]">
                    <span>🚧</span>Add symbols to your watchlist and monitor
                    their performance
                  </li>
                  <li className="flex gap-[6px]">
                    <span>🚧</span>Account data synced across devices.
                  </li>
                </ul>
                <ul className="flex flex-wrap gap-2 mt-4">
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    HTML
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    CSS
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    TypeScript
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    React
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    Tailwind CSS
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    Shadcn UI
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    Zod Schema Validation
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    Recharts
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    React Hook Form
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    Express.js
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    API Integration
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    Cloud Firestore
                  </li>
                  <li className="bg-gray-900/70 text-blue-300 text-sm py-2 px-4 rounded-full">
                    Firebase Auth
                  </li>
                </ul>
                <div className="links mt-4 flex gap-4">
                  <motion.div className="relative" whileHover="hover">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-xl -z-10"></div>
                    <motion.a
                      href="https://github.com/bzhang98/stock-app"
                      target="_blank"
                      className="flex rounded-xl py-2 px-4 gap-2 font-semibold relative backdrop-blur-sm bg-white/10 shadow-xl text-center"
                      variants={{
                        hover: {
                          scale: 1.05,
                          rotate: 5,
                          boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.5)",
                        },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        duration: 0.5,
                      }}
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
                  </motion.div>
                  <motion.div className="relative" whileHover="hover">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-xl -z-10"></div>
                    <motion.a
                      target="_blank"
                      className="flex rounded-xl py-2 px-4 gap-2 font-semibold relative backdrop-blur-sm bg-white/10 shadow-xl text-center cursor-not-allowed"
                      variants={{
                        hover: {
                          scale: 1.05,
                          rotate: 5,
                          boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.5)",
                        },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        duration: 0.5,
                      }}
                    >
                      Live Demo - Coming Soon™
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
                  </motion.div>
                </div>
              </div>
            </motion.li>
          </ul>
        </section>
      </motion.main>
    </div>
  );
}
