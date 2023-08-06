import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import AboutPopover from "../about-popover";

export default function Navbar() {
  return (
    <div className="w-full p-0 m-0 bg-white/70 z-50 dark:bg-slate-950/80 sticky backdrop-blur-xl top-0 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-[90%] sm:max-w-[80%] flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-xl sm:text-xl tracking-tighter">
          markushha
        </Link>
        <div className="flex items-center">
          <AboutPopover />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
