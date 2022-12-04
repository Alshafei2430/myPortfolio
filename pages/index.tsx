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
        {/* <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={profilePic} alt="" width="384" height="512">
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
        <div className=" flex items-center justify-between">
          <div className="mx-auto my-auto flex items-center justify-between p-10 lg:p-20">
            <p
              className="mr-8 text-xs font-bold leading-8 tracking-wide text-gray-100
           first-letter:text-5xl first-letter:font-bold first-letter:text-pink-600 selection:bg-pink-600 selection:text-white xl:indent-2
           "
            >
              Hey, I am Shafei, a <br />
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-xl font-bold  text-transparent md:text-4xl lg:text-9xl">
                Fullstack Web Developer
              </span>
            </p>
            <div className="relative w-28 p-2 md:w-52 lg:w-96">
              <div className="absolute -inset-0.5 animate-tilt rounded-l-2xl bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              <Image
                src={profilePic}
                alt=""
                className="relative rounded-l-2xl"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 bg-gradient-to-r from-pink-600 to-purple-600 py-8 text-center text-5xl md:grid-cols-6 md:text-8xl">
          <Si.SiTypescript className="mx-auto" />
          <Si.SiJavascript className="mx-auto" />
          <Si.SiNodedotjs className="mx-auto" />
          <Si.SiExpress className="mx-auto" />
          <Si.SiGraphql className="mx-auto" />
          <Si.SiHtml5 className="mx-auto" />
          <Si.SiCss3 className="mx-auto" />
          <Si.SiTailwindcss className="mx-auto" />
          <Si.SiFirebase className="mx-auto" />
          <Si.SiHeroku className="mx-auto" />
          <Si.SiPython className="mx-auto" />
          <Si.SiFlask className="mx-auto" />
          <Si.SiSequelize className="mx-auto" />
          <Si.SiMysql className="mx-auto" />
          <Si.SiPostgresql className="mx-auto" />
          <Si.SiMongodb className="mx-auto" />
          <Si.SiReact className="mx-auto" />
          <Si.SiNextdotjs className="mx-auto" />
        </div>
        <div className="m py-8 md:text-3xl">
          <div className="flex items-center justify-center p-2 align-baseline">
            <Ai.AiFillMail className="md:text-4xl" />
            <span className="ml-2">alshafei.2430@gmail.com</span>
          </div>
          <div className="flex items-center justify-center p-2 align-baseline">
            <Ai.AiFillPhone className="md:text-4xl" />
            <span className="ml-2">+201555369706</span>
          </div>
          <div className="flex items-center justify-center p-2 align-baseline">
            <Ai.AiFillGithub className="md:text-4xl" />
            <a
              className="... ml-2 after:content-['_↗']"
              href="https://github.com/Alshafei2430"
              target="_blank"
              rel="noreferrer"
            >
              Alshafei2430
            </a>
          </div>
          <div className="flex items-center justify-center p-2 align-baseline">
            <Ai.AiFillLinkedin className="md:text-4xl" />
            <a
              className="... ml-2 after:content-['_↗']"
              href="https://www.linkedin.com/in/shafei00"
              target="_blank"
              rel="noreferrer"
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
