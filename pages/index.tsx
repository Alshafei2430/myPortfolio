import Head from "next/head";
import Image from "next/image";
import profilePic from "../public/profile.png";
import * as Si from "react-icons/si";
import * as Ai from "react-icons/ai";

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Shafei</title>
        <meta name="description" content="Shafei Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-white">
        <div className="px-32 py-16 sm:flex items-center justify-between h-full">
          <div className="mb-10  sm:mr-6">
            <p
              className="font-bold text-xl sm:text-3xl tracking-wide leading-8 text-gray-100
           selection:bg-pink-600 selection:text-white first-letter:text-5xl first-letter:text-pink-600 first-letter:font-bold xl:indent-2
           "
            >
              Hey, I am Shafei, a <br />
              <span className="text-4xl md:text-6xl xl:md:text-9xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl text-transparent bg-clip-text">
                Fullstack Web Developer
              </span>
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative p-2 sm:max-w-xl">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Image
                src={profilePic}
                alt=""
                className="relative rounded-l-3xl"
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className="pl-32 py-16 text-center grid grid-cols-6 gap-4 text-8xl bg-gradient-to-r from-pink-600 to-purple-600">
          <Si.SiTypescript />
          <Si.SiJavascript />
          <Si.SiNodedotjs />
          <Si.SiExpress />
          <Si.SiGraphql />
          <Si.SiHtml5 />
          <Si.SiCss3 />
          <Si.SiTailwindcss />
          <Si.SiFirebase />
          <Si.SiHeroku />
          <Si.SiPython />
          <Si.SiFlask />
          <Si.SiSequelize />
          <Si.SiMysql />
          <Si.SiPostgresql />
          <Si.SiMongodb />
          <Si.SiReact />
          <Si.SiNextdotjs />
        </div>
        <div className="text-3xl py-8">
          <div className="flex align-baseline p-2 items-center justify-center">
            <Ai.AiFillMail className="text-4xl" />
            <span className="ml-2">alshafei.2430@gmail.com</span>
          </div>
          <div className="flex align-baseline p-2 items-center justify-center">
            <Ai.AiFillPhone className="text-4xl" />
            <span className="ml-2">+201555369706</span>
          </div>
          <div className="flex align-baseline p-2 items-center justify-center">
            <Ai.AiFillGithub className="text-4xl" />
            <a
              className="ml-2 after:content-['_↗'] ..."
              href="https://github.com/Alshafei2430"
              target="_blank"
            >
              Alshafei2430
            </a>
          </div>
          <div className="flex align-baseline p-2 items-center justify-center">
            <Ai.AiFillLinkedin className="text-4xl" />
            <a
              className="ml-2 after:content-['_↗'] ..."
              href="https://www.linkedin.com/in/shafei00"
              target="_blank"
            >
              Abdulrahman Alshafei
            </a>
          </div>
        </div>
      </main>

      {/* <footer>footer</footer> */}
    </div>
  );
}
