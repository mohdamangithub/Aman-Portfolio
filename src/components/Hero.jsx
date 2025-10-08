import { motion } from "framer-motion";
import {textVariant } from "../utils/motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import ParticlesContainer from "./ParticlesContainer";
import { aman } from "../assets";

const Hero = () => {
  return (
    <section
      className={`flex-between-center relative mx-auto h-screen w-full flex-col`}
    >
      <ParticlesContainer />
      <div className="flex-between-center relative">
        <div
          className={`top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
        >
        
          <div className="absolute left-0 mt-20 flex flex-col items-center justify-center">
            <div className="h-3 w-3 rounded-full gradient-background" />
            <div className="gradient-background h-40 w-[1px] sm:h-80" />
          </div>
        
          <div className="absolute left-6 mt-12 flex flex-col items-center justify-center">
            <div className="h-3 w-3 rounded-full gradient-background" />
            <div className="gradient-background h-40 w-[1px] sm:h-80" />
          </div>
        
         
          <motion.div variants={textVariant()} className="mt-[60px] md:mt-[50px] flex flex-col items-center">
            <h1 className={`${styles.heroHeadText} text-white text-center`}>
              Hi, I'm <span className="gradient-text">Aman</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-1z px-6 md:p-0 text-center mt-2 mb-8`}>
              I develop <span className="gradient-text">Full-Stack</span> Web Applications using the <span className="gradient-text"> MERN Stack</span>, focused on performance, scalability, and great user experience
            </p>
            <div className="profile w-64 h-64 shadow-2xl shadow-[#ffffff8e]  border border-[#ffffff8e] mb-5 rounded-full overflow-hidden">
              <img src={aman} className="object-cover object-center" alt="" />
            </div>
          </motion.div>
            
         <div className="absolute right-0 mt-20 flex flex-col items-center justify-center">
            <div className="h-3 w-3 rounded-full gradient-background" />
            <div className="gradient-background h-40 w-[1px] sm:h-80" />
          </div>
           <div className="absolute right-6 mt-12 flex flex-col items-center justify-center">
            <div className="h-3 w-3 rounded-full gradient-background" />
            <div className="gradient-background h-40 w-[1px] sm:h-80" />
          </div>
        
        </div>
        
        <motion.div
          variants={textVariant()}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="z-[1] h-full"
        >
        </motion.div>
      </div>
      <div className="flex-center-center  mb-[200px] w-full">
         
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mb-1 h-3 w-3 rounded-full bg-secondary"
            />
          </div>
        </a>
        
      </div>
      
    </section>
  );
};

export default SectionWrapper(Hero, "hero");
