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
        <div className="h-full items-center justify-between px-32 py-16 sm:flex">
          <div className="mb-10  sm:mr-6">
            <p
              className="text-xl font-bold leading-8 tracking-wide text-gray-100 first-letter:text-5xl
           first-letter:font-bold first-letter:text-pink-600 selection:bg-pink-600 selection:text-white sm:text-3xl xl:indent-2
           "
            >
              Hey, I am Shafei, a <br />
              <span className="rounded-3xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-6xl xl:md:text-9xl">
                Fullstack Web Developer
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative p-2 sm:max-w-xl">
              <div className="absolute -inset-0.5 animate-tilt rounded-3xl bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              <Image
                src={profilePic}
                alt=""
                className="relative rounded-l-3xl"
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 bg-gradient-to-r from-pink-600 to-purple-600 py-16 pl-32 text-center text-8xl">
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
        <div className="py-8 text-3xl">
          <div className="flex items-center justify-center p-2 align-baseline">
            <Ai.AiFillMail className="text-4xl" />
            <span className="ml-2">alshafei.2430@gmail.com</span>
          </div>
          <div className="flex items-center justify-center p-2 align-baseline">
            <Ai.AiFillPhone className="text-4xl" />
            <span className="ml-2">+201555369706</span>
          </div>
          <div className="flex items-center justify-center p-2 align-baseline">
            <Ai.AiFillGithub className="text-4xl" />
            <a
              className="... ml-2 after:content-['_↗']"
              href="https://github.com/Alshafei2430"
              target="_blank"
            >
              Alshafei2430
            </a>
          </div>
          <div className="flex items-center justify-center p-2 align-baseline">
            <Ai.AiFillLinkedin className="text-4xl" />
            <a
              className="... ml-2 after:content-['_↗']"
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
