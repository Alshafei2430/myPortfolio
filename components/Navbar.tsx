import Link from "next/link";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="mx-32 mt-10 flex justify-between text-xl font-bold ">
      <div className="flex justify-between gap-10">
        <Link href="/" className="relative ">
          Home
          <span className="absolute left-0 mt-1 inline-block w-full border-b-2 border-yellow-200 shadow-md">
            &nbsp;
          </span>
        </Link>
        <Link href="/about" className="relative ">
          About
          <span className="absolute left-0 mt-1 inline-block w-full border-b-2 border-yellow-200 shadow-md">
            &nbsp;
          </span>
        </Link>
        <Link href="/projects" className="relative ">
          Projects
          <span className="absolute left-0 mt-1 inline-block w-full border-b-2 border-yellow-200 shadow-md">
            &nbsp;
          </span>
        </Link>
      </div>
      <div className="flex gap-2">
        <Link href="https://www.linkedin.com/in/shafei00">
          <AiFillLinkedin className="text-3xl" />
        </Link>
        <Link href="https://github.com/Alshafei2430">
          <AiFillGithub className="text-3xl" />
        </Link>
      </div>
    </nav>
  );
}
