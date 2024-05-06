import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl max-[500px]:text-2xl">Home Page</h1>
      <Link href="/verified" className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900">
        Verified
      </Link>
    </main>
  );
}
