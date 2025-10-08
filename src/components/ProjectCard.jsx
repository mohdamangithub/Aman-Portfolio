import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import {
  webLink,
  github,
} from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  alt,
  source_code_link,
  live_link,
}) => (

  <motion.div variants={fadeIn("up", "spring", index * 0.1 + 0.3, 0.7)}>
    <div className="w-full rounded-2xl bg-tertiary p-5 sm:w-[360px]">
      <div className="relative h-[230px] w-full">
        <img
          src={image}
          alt={alt}
          className="h-full w-full rounded-2xl object-cover object-left"
        />
        <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
          <div
            onClick={() => window.open(live_link, "_blank")}
            className="black-gradient mr-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
          >
            <img
              src={webLink}
              alt="live link"
              className="h-full w-full rounded-full object-contain"
            />
          </div>
        <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
          >
            <img
              src={github}
              alt="source code"
              className="h-3/4 w-3/4 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 ">
        <h3 className="text-[26px] md:text-[24px] font-bold text-white">{name}</h3>
        <p className="mt-2 line-clamp-4 text-[14px] text-secondary">
          {description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <p key={i} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  </motion.div>
);
export default ProjectCard;
