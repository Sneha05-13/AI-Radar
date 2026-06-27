import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/" className="text-2xl font-bold text-violet-500">
        AI Radar
        </Link>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}