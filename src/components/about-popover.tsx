import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Globe2, HelpCircle, Youtube } from "lucide-react";
import SocialBadge from "./social-badge";

export default function AboutPopover() {
  return (
    <Popover>
      <PopoverTrigger className="p-2 rounded-lg mr-3 items-center justify-center flex bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
        <HelpCircle size={22} />
      </PopoverTrigger>
      <PopoverContent className="w-fit flex flex-col items-center gap-y-2">
        <SocialBadge
          social="My Youtube"
          href="https://github.com/markushha"
          icon={<Youtube size={22} />}
        />
        <SocialBadge
          className="w-full"
          social="My Website"
          href="https://markinger.tech"
          icon={<Globe2 size={22} />}
        />
      </PopoverContent>
    </Popover>
  );
}
