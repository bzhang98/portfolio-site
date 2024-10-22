import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedText from "@/components/animated-text";
import { AnimatePresence, motion } from "framer-motion";

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {links.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.2,
                }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  className="flex gap-2 items-center hover:underline"
                >
                  <img src={link.icon} alt={`${link.name} icon`} width={20} />
                  {link.name}
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
