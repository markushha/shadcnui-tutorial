import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative bottom-0 border-t border-slate-200 dark:border-slate-800 mt-36">
      <div className="mx-auto max-w-[90%] sm:max-w-[80%] md:max-w-[75%] lg:max-w-[70%]">
        <div className="grid items-center justify-center grid-cols-2 md:grid-cols-3 py-6">
          <p className="text-xl lg:text-3xl font-semibold tracking-tighter w-fit">
            markushha
          </p>
          <div className="hidden md:grid grid-cols-2 grid-rows-3 gap-y-3 items-center justify-center font-medium tracking-tighter">
            <Link
              className="text-center hover:text-slate-600 dark:hover:text-slate-300 w-fit mx-auto"
              href="#"
            >
              Docs
            </Link>
            <Link
              className="text-center hover:text-slate-600 dark:hover:text-slate-300 w-fit mx-auto"
              href="#"
            >
              About
            </Link>
            <Link
              className="text-center hover:text-slate-600 dark:hover:text-slate-300 w-fit mx-auto"
              href="#"
            >
              Support
            </Link>
            <Link
              className="text-center hover:text-slate-600 dark:hover:text-slate-300 w-fit mx-auto"
              href="#"
            >
              License
            </Link>
            <Link
              className="text-center hover:text-slate-600 dark:hover:text-slate-300 w-fit mx-auto"
              href="#"
            >
              Frameworks
            </Link>
            <Link
              className="text-center hover:text-slate-600 dark:hover:text-slate-300 w-fit mx-auto"
              href="#"
            >
              Technologies
            </Link>
          </div>
          <p className="w-full text-right">
            All right are reserved ©&nbsp;2024
          </p>
        </div>
      </div>
    </div>
  );
}
