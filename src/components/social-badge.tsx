import { cn } from "@/lib/utils";
import Link from "next/link";

type SocialBadgeProps = {
  social?: string;
  href: string;
  icon: React.ReactNode;
  className?: string;
};

export default function SocialBadge({
  social,
  href,
  icon,
  className,
}: SocialBadgeProps) {
  return (
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
  );
}
