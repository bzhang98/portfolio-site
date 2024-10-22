import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedText from "@/components/animated-text";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { x: -50, opacity: 0, scale: 0.8, rotate: -10 },
  show: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
    },
  },
  exit: { x: -50, opacity: 0, scale: 0.8, rotate: -10, transition: { duration: 0.3 } },
};

export default function Home() {
  const [linksShown, setLinksShown] = useState(false);

  return (
    <main className="flex flex-col gap-4 justify-center max-w-sm">
      <AnimatedText
        text={"<Brian Zhang />"}
        duration={2}
        className="text-lg font-mono"
      />
      <p>~/</p>
      <p>
        Web Developer and Computer Science Student based in Winnipeg, Canada 🇨🇦
      </p>

      <p>Passionate about creating interactive web applications.</p>
      <p>
        Take a look at some of my recent{" "}
        <Link
          to="/projects"
          className="underline rounded-md text-neutral-800 bg-green-400 hover:bg-green-300 transition-all p-[2px]"
        >
          projects
        </Link>{" "}
        or feel free to{" "}
        <button
          className="underline leading-5 hover:bg-yellow-300 rounded-md transition-all"
          onClick={() => {
            setLinksShown(!linksShown);
          }}
        >
          get in touch
        </button>
      </p>

      <AnimatePresence>
        {linksShown && (
          <motion.ul
            className="links flex flex-col gap-2"
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            transition={{ duration: 1 }}
          >
            {links.map((link) => (
              <motion.li
                key={link.name}
                variants={item}
              >
                <a
                  href={link.url}
                  target="_blank"
                  className="flex gap-2 items-center hover:underline"
                >
                  <img src={link.icon} alt={`${link.name} icon`} width={20} />
                  {link.name}
                  <ArrowUpRight size={16} className="-ml-1" />
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </main>
  );
}

const links = [
  {
    name: "GitHub",
    url: "https://github.com/bzhang98",
    icon: "/images/github.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/zhang-br1998",
    icon: "/images/linkedin.svg",
  },
  {
    name: "Email",
    url: "mailto:zhang.br1998@gmail.com",
    icon: "/images/email.svg",
  },
  {
    name: "Resume",
    url: "https://docs.google.com/document/d/1tpKiwA99oj27TdVLMgwVC6YfjW9b9CW4ch9A3cxqhm4/edit?usp=sharing",
    icon: "/images/resume.svg",
  },
];
