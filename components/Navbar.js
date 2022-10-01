import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"

export default function Navbar() {
  const [darkMode, setDarkMode] = useContext(GlobalContext);
  return (
    <div className="py-4 max-w-5xl px-4 mx-auto flex gap-x-5 justify-between sticky top-0 z-10 bg-white dark:bg-neutral-900">
      <nav className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <Link href="/">
          <a className="text-sky-500 hover:text-sky-600 transition-all text-sm font-medium">Home</a>
        </Link>
        <Link href="/avatar">
          <a className="text-sky-500 hover:text-sky-600 transition-all text-sm font-medium">Avatar</a>
        </Link>
        <Link href="/customer">
          <a className="text-sky-500 hover:text-sky-600 transition-all text-sm font-medium">Customer</a>
        </Link>
        <Link href="/post">
          <a className="text-sky-500 hover:text-sky-600 transition-all text-sm font-medium">Post</a>
        </Link>
      </nav>
      {darkMode ?
        <button aria-label="Change Theme" onClick={() => setDarkMode(!darkMode)}><SunIcon className="h-5 w-5 text-gray-700 dark:text-gray-200" /></button>
        :
        <button aria-label="Change Theme" onClick={() => setDarkMode(!darkMode)}><MoonIcon className="h-5 w-5 text-gray-700 dark:text-gray-200" /></button>
      }
    </div>
  )
}