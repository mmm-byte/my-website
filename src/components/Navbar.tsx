import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="text-base font-semibold" aria-label="Go to home">
          FastOps
        </Link>
        <ul className="flex items-center gap-6 text-sm">
          <li><Link className="hover:underline" href="/bookings">Book</Link></li>
          <li><Link className="hover:underline" href="/about">About</Link></li>
          <li><Link className="hover:underline" href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
