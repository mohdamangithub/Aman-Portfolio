
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectsSection from "./ProjectsSection";

const Works = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText}`}>My work</p>
      <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
    </motion.div>

    <div className="flex w-full">
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-[17px] leading-[30px] text-secondary"
      >
        Following projects showcase my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </motion.p>
    </div>

     {/* ✅ Render ProjectsSection dynamically */}
    <div className="flex-around-center mt-20 flex-wrap gap-7">
      <ProjectsSection />
    </div>
  </>
);

export default SectionWrapper(Works, "work");
