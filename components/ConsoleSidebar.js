import Link from "next/link";
const linkClassName = "text-sky-500 hover:text-sky-600 transition-all text-sm font-medium block mb-1.5"

export default function ConsoleSidebar() {
  return (
    <div className="sm:w-1/5 px-4 mx-auto pt-5">
      <div className="sticky top-[4.5rem]  border-r dark:border-neutral-800">
        <h1 className="dark:text-white font-semibold mb-4">Console</h1>
        <Link href='/console'>
          <a className={linkClassName}>
            Heroes
          </a>
        </Link>
        <Link href='/console/prakerja'>
          <a className={linkClassName}>
            Prakerja
          </a>
        </Link>
        <Link href='/console/pelabuhan'>
          <a className={linkClassName}>
            Pelabuhan
          </a>
        </Link>
        <Link href='/console/kode-sni'>
          <a className={linkClassName}>
            Kode SNI
          </a>
        </Link>
        <Link href='/console/emiten'>
          <a className={linkClassName}>
            Emiten
          </a>
        </Link>
        <Link href='/console/gempa'>
          <a className={linkClassName}>
            Gempa
          </a>
        </Link>
        <Link href='/console/weather'>
          <a className={linkClassName}>
            Weather
          </a>
        </Link>
        <Link href='/console/mountain'>
          <a className={linkClassName}>
            Mountain
          </a>
        </Link>
        <Link href='/console/publisher'>
          <a className={linkClassName}>
            Publisher
          </a>
        </Link>
        <Link href='/console/spotify'>
          <a className={linkClassName}>
            Spotify
          </a>
        </Link>
        <Link href='/console/avatar'>
          <a className={linkClassName}>
            Avatar
          </a>
        </Link>
        <Link href='/console/customer'>
          <a className={linkClassName}>
            Customer
          </a>
        </Link>
        <Link href='/console/image'>
          <a className={linkClassName}>
            Image
          </a>
        </Link>
        <Link href='/console/github'>
          <a className={linkClassName}>
            Github
          </a>
        </Link>
        <Link href='/console/repo'>
          <a className={linkClassName}>
            Repo
          </a>
        </Link>
        <Link href='/console/orgs'>
          <a className={linkClassName}>
            Orgs
          </a>
        </Link>
        <Link href='/console/emoji'>
          <a className={linkClassName}>
            Emoji
          </a>
        </Link>
        <Link href='/console/user'>
          <a className={linkClassName}>
            User
          </a>
        </Link>
        <Link href='/console/post'>
          <a className={linkClassName}>
            Post
          </a>
        </Link>
        <Link href='/console/comment'>
          <a className={linkClassName}>
            Comment
          </a>
        </Link>
        <Link href='/console/todo'>
          <a className={linkClassName}>
            Todo
          </a>
        </Link>
      </div>
    </div>
  )
}