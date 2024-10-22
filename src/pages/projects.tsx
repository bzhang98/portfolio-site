import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <main className="justify-center max-w-sm">
      <h1 className="text-lg font-mono">Projects</h1>
      <p className="my-2">~/projects</p>
      <Link
        to="/"
        className="text-sm text-neutral-600 hover:underline rounded-md transition-colors"
      >
        cd ..
      </Link>

      <div className="mt-8">
        {projects.map((project, index) => (
          <div key={index} className="border-l-2 border-neutral-400 pl-4">
            <h1 className="text-lg font-mono">{project.title}</h1>
            <p className="mt-2 text-sm text-gray-700">{project.description}</p>
            <div className="mt-2 space-x-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="inline-block text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <a
                href={project.githubLink}
                target="_blank"
                className="w-fit hover:underline rounded-md transition-colors"
              >
                <span className="text-neutral-600 flex items-center gap-1">
                  view source <ArrowUpRight size={16} />
                </span>
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                className="w-fit hover:underline rounded-md transition-colors"
              >
                <span className="text-neutral-600 flex items-center gap-1">
                  live demo <ArrowUpRight size={16} />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

const projects = [
  {
    title: "Sorting Algorithm Visualizer",
    description:
      "Interactive visualization tool for sorting algorithms with customizable arrays and animation speeds. Built with React and Framer Motion for smooth transitions.",
    tech: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    githubLink: "http://github.com/bzhang98/sorting-visualizer",
    liveLink: "http://sorting-visualizer-silk-xi.vercel.app",
  },
];
