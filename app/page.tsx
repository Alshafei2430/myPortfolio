import AnimatedText from "../components/AnimatedText";
import Skills from "../components/Skills";

export default function Page() {
  return (
    <div className="">
      <div className="m-auto mx-auto flex min-h-[720px] w-[80%] flex-col items-center justify-center lg:flex-row">
        <AnimatedText
          text="Hey, I am Shafei"
          className="!text-6xl !text-yellow-200"
        />
        <div className=" rounded-br-md rounded-bl-md border-2 border-t-0 border-yellow-200 p-8 shadow-md">
          <AnimatedText
            text="A Fullstack web developer"
            className="bg-gradient-to-r from-sky-50 to-indigo-200 bg-clip-text !text-8xl font-bold"
          />
        </div>
      </div>
      <Skills />
    </div>
  );
}
