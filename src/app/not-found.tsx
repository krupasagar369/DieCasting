import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-neutral-900 px-6 text-center text-white">
      <p className="text-7xl font-bold text-[#ff6600]">404</p>
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="max-w-md text-neutral-300">
        The page you are looking for does not exist or has moved.
      </p>
      <Link href="/home" className="rounded bg-[#ff6600] px-6 py-3 font-semibold text-white no-underline hover:bg-[#ff7722]">
        Back to Home
      </Link>
    </main>
  );
}
