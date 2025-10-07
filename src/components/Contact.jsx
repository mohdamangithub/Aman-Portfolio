import contactImg from "../assets/contact.jpg";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Button } from "@mui/material";
import {
  Phone,
  Email,
  LinkedIn,
  GitHub,
  ArrowOutward,
} from "@mui/icons-material";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col-reverse gap-10 overflow-hidden md:mt-4 md:flex-row">
        {/* Left: Contact Info */}
        <motion.div
          variants={slideIn("left", "tween", 0.1, 0.5)}
          className="flex-[0.75] rounded-2xl bg-black-100 p-8"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <div className="flex-center-center mt-8 flex-wrap gap-2">
            {/* Email Button */}
            <Button
              variant="outlined"
              endIcon={<Email />}
              component="a"
              href="mailto:mansooriaman025@gmail.com"
            >
              Email
            </Button>

            {/* Call Button */}
            <Button
              variant="outlined"
              endIcon={<Phone />}
              component="a"
              href="tel:+919795575914"
            >
              Call
            </Button>

            {/* LinkedIn Button */}
            <Button
              variant="outlined"
              endIcon={<LinkedIn />}
              component="a"
              href="https://www.linkedin.com/in/mohammad-aman-4325bb23b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>

            {/* GitHub Button */}
            <Button
              variant="outlined"
              endIcon={<GitHub />}
              component="a"
              href="https://github.com/mohdamangithub"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </div>
        </motion.div>

        {/* Right: Contact Image */}
        <motion.div
          variants={slideIn("right", "tween", 0.1, 0.5)}
          className="md:h-auto md:flex-1"
        >
          <img
            src={contactImg}
            alt="contact-us"
            className="h-full w-full object-contain rounded-lg"
          />
        </motion.div>
      </div>

      {/* Resume Section */}
      <div className="mb-4 ml-5">
        <h1 className="my-3 text-xl font-semibold text-slate-50">
          Thanks for scrolling.
        </h1>
        <Button
          variant="outlined"
          endIcon={<ArrowOutward />}
          component="a"
          href="https://drive.google.com/file/d/10WCZGiQH8LCreYOOtfS4PjSQX9NQKh0O/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Button>
      </div>

      <hr className="ml-2" />
    </>
  );
};

export default SectionWrapper(Contact, "contact");
