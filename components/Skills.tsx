"use client";

import { motion } from "framer-motion";

type PropsType = {
  name: string;
  x: string;
  y: string;
};

const Skill = ({ name, x, y }: PropsType) => {
  return (
    <motion.span
      className="absolute cursor-pointer rounded-full border-2 border-yellow-200 bg-gradient-to-tr from-sky-600 to-cyan-900 p-10 text-xl font-bold shadow-md"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.span>
  );
};

export default function Skills() {
  return (
    <>
      <h2 className="mt-80 w-full text-center text-8xl font-bold">Skills</h2>
      <div className="relative my-32 mx-auto flex h-full min-h-[720px] w-[80%] items-center justify-center rounded-sm border-r-2 border-l-2 border-yellow-200 px-20 ">
        {skills.map(({ name, x, y }, index) => (
          <Skill name={name} x={x} y={y} key={`${name}-${index}`} />
        ))}
      </div>
    </>
  );
}

const skills = [
  { name: "CSS", x: "0", y: "150px" },
  { name: "HTML", x: "0", y: "-150px" },
  { name: "TS", x: "150px", y: "0" },
  { name: "JS", x: "-150px", y: "0" },
  { name: "ReactJS", x: "150px", y: "150px" },
  { name: "NextJS", x: "-150px", y: "-150px" },
  { name: "Vue", x: "150px", y: "-150px" },
  { name: "Express", x: "-150px", y: "150px" },
  { name: "GraphQl", x: "250px", y: "280px" },
  { name: "TailwindCSS", x: "-250px", y: "-280px" },
  { name: "Python", x: "250px", y: "-280px" },
  { name: "Firebase", x: "-250px", y: "280px" },
  { name: "Sequelize", x: "0px", y: "-300px" },
  { name: "Flask", x: "0px", y: "300px" },
  { name: "Web", x: "0", y: "0" },
];
