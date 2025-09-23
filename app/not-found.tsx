import Link from "next/link";

export default function NotFound() {
  return (
    <main className="font-(family-name:--font-inter)">
      <section className="my-40 max-w-7xl items-center text-center flex flex-col gap-10 mx-auto px-8">
        <h1 className="flex flex-col text-7xl font-(family-name:--font-alike)">
          Oops, this page doesn't exist.
        </h1>
        <h2 className="text-xl">Certain pages may not be complete yet.</h2>
        <Link
          href="/"
          className="underline rounded-md bg-red-700 text-4xl px-6 py-2 text-white border-red-400 border-2"
        >
          Go Home
        </Link>
      </section>
    </main>
  );
}
