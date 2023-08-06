import Link from "next/link";
import { UserCircle, HelpCircle } from "lucide-react";

import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  return (
    <div className="w-full sticky bg-inherit backdrop-blur-xl top-0 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-[90%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[70%] flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-xl sm:text-xl tracking-tighter">
          shadcn/ui
        </Link>
        <div className="flex items-center">
          <Link
            className="p-2 rounded-lg mr-3 items-center justify-center flex bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            href="/"
          >
            <HelpCircle size={22} />
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
