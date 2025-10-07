import ProjectCard from "./ProjectCard";
import { projects } from "../constants";

function ProjectsSection() {

  // ✅ Convert tech array → tags array (with color class)
  const formatTags = (techArray) =>
    techArray.map((t, i) => ({
      name: t,
      color: i % 2 === 0 ? "blue-text-gradient" : "green-text-gradient",
    }));

  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          index={index}
          name={project.name}
          description={project.description}
          tags={formatTags(project.tech)} // 👈 transform here
          image={project.image}
          alt={project.name}
          source_code_link={project.source_code_link}
          live_link={project.live_link}
        />
      ))}
    </>
  );
}

export default ProjectsSection;
