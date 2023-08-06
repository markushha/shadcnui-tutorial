import SocialBadge from "@/components/social-badge";

import { Github, Twitter } from "lucide-react";
import { SiNextdotjs } from "react-icons/si";
import { FaReact, FaAngular, FaVuejs } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto min-h-screen items-center max-w-[90%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[70%]">
      <div className="flex items-center flex-col mt-36 text-center">
        <p className="text-5xl md:text-7xl font-medium tracking-tighter">
          Welcome to&nbsp;
          <Link
            target="_blank"
            href={"https://ui.shadcn.com/docs/dark-mode/next"}
          >
            shadcn/ui
          </Link>
        </p>
        <p className="mt-3 text-4xl md:text-6xl font-medium tracking-tighter">
          New way of creating beatiful websites
        </p>
        <p className="tracking-tight mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-4xl md:text-6xl font-medium">
          Now with every framework.
        </p>
        <div className="mt-4 flex">
          <SocialBadge
            className="dark:hover:bg-purple-500 hover:bg-purple-500 hover:text-white"
            social="GitHub"
            href="https://github.com/markushha"
            icon={<Github size={22} />}
          />
          <SocialBadge
            className="ml-2 dark:hover:bg-blue-500 hover:bg-blue-500 hover:text-white"
            social="Twitter"
            href="https://twitter.com/shadcn"
            icon={<Twitter size={22} />}
          />
        </div>
      </div>
      <div className="mt-16">
        <div className="flex flex-col items-center justify-center mt-6">
          <p className="text-2xl md:text-5xl tracking-tight">
            Supported Frameworks
          </p>
          <div className="grid grid-cols-3 gap-x-6 my-6 items-center justify-center">
            <SocialBadge href="" icon={<SiNextdotjs size={44} />} />
            <SocialBadge href="" icon={<FaReact size={44} />} />
            <SocialBadge href="" icon={<FaAngular size={44} />} />
          </div>
          <div className="grid grid-cols-2 gap-x-6 items-center justify-center">
            <SocialBadge href="" icon={<FaVuejs size={44} />} />
            <SocialBadge href="" icon={<FaReact size={44} />} />
          </div>
        </div>
      </div>
    </div>
  );
}
