import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

type SocialBadgeProps = {
  social?: string;
  tooltip?: string;
  href: string;
  icon: React.ReactNode;
  className?: string;
};

export default function SocialBadge({
  social,
  href,
  icon,
  className,
  tooltip
}: SocialBadgeProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link
            target="_blank"
            href={href}
            className={cn(
              "flex items-center justify-center rounded-lg transition border dark:border-slate-800 dark:hover:bg-slate-800 border-slate-100 hover:bg-slate-100 py-1 px-2",
              className
            )}
          >
            <div className="p-1.5">{icon}</div>
            {social && <p className="font-medium">{social}</p>}
          </Link>
        </TooltipTrigger>
        {tooltip && <TooltipContent>{tooltip}</TooltipContent>}
      </Tooltip>
    </TooltipProvider>
  );
}
