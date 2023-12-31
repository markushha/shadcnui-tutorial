import SocialBadge from "@/components/social-badge";

import { Github, Twitter } from "lucide-react";
import { SiNextdotjs } from "react-icons/si";
import { FaReact, FaAngular, FaVuejs } from "react-icons/fa";
import Link from "next/link";
import { subscriptions } from "@/data/subscriptions";
import Subscription from "@/components/subscription";

export default function Home() {
  return (
    <section className="flex flex-col mx-auto min-h-screen items-center max-w-[90%] sm:max-w-[80%]">
      <div className="flex items-center flex-col mt-36 text-center">
        <p className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter">
          Welcome to&nbsp;
          <Link
            target="_blank"
            href={"https://ui.shadcn.com/docs/dark-mode/next"}
          >
            shadcn/ui
          </Link>
        </p>
        <p className="mt-3 text-3xl md:text-4xl lg:text-6xl font-medium tracking-tighter">
          New way of creating beatiful websites
        </p>
        <p className="tracking-tight mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 text-3xl md:text-4xl lg:text-6xl font-medium">
          Now with every framework.
        </p>
        <div className="mt-4 flex">
          <SocialBadge
            className="dark:hover:bg-purple-500 hover:bg-purple-500 hover:text-white"
            social="Github"
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
      <section className="mt-16">
        <div className="flex flex-col items-center justify-center mt-6">
          <p className="text-2xl md:text-4xl lg:text-5xl tracking-tight">
            Supported Frameworks
          </p>
          <div className="grid grid-cols-3 gap-x-6 my-6 items-center justify-center">
            <SocialBadge
              href=""
              tooltip="NextJS"
              icon={<SiNextdotjs size={44} />}
            />
            <SocialBadge href="" tooltip="React" icon={<FaReact size={44} />} />
            <SocialBadge
              href=""
              tooltip="Angular"
              icon={<FaAngular size={44} />}
            />
          </div>
          <div className="grid grid-cols-2 gap-x-6 items-center justify-center">
            <SocialBadge href="" tooltip="VueJS" icon={<FaVuejs size={44} />} />
            <SocialBadge href="" tooltip="React" icon={<FaReact size={44} />} />
          </div>
        </div>
      </section>
      <section className="mt-24 flex flex-col mx-auto text-center">
        <p className="text-2xl my-12 md:text-4xl lg:text-5xl tracking-tight">
          Subscriptions
        </p>
        <div className="grid grid-rows-3 grid-cols-0 gap-y-8 lg:grid-rows-none lg:grid-cols-3 md:gap-x-2 lg:gap-x-16 items-center mx-auto">
          {subscriptions.map((subscription, id) => (
            <Subscription
              className={id % 2 !== 0 ? "lg:scale-105" : ""}
              href={subscription.href}
              key={subscription.title}
              title={subscription.title}
              description={subscription.description}
              price={subscription.price}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
