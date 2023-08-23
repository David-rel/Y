import { signOut, useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { data: sessionData } = useSession();

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        {/* Left Side - Logo */}
        <div className="mr-20 flex-shrink-0">
          <Image src="/logo.jpg" alt="Y Logo" width={600} height={600} />
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col items-start space-y-6">
          <h1 className="pb-6 text-7xl font-bold">Welcome to Y</h1>
          <p className="pb-4 text-3xl font-bold">
            Y is a cutting-edge social media platform that is better then X.
            Join Today.
          </p>
          <button
            className="rounded-full bg-white px-16 py-5 text-xl font-semibold text-black no-underline transition hover:bg-white/90"
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >
            {sessionData ? "Sign out" : "Sign in or Create Account"}
          </button>
          <ul className="space-y-4 pt-8">
            <li>
              <Link href="/about" legacyBehavior>
                <a className="text-white hover:underline">About Y</a>
              </Link>
            </li>
            <li>
              <Link href="/features" legacyBehavior>
                <a className="text-white hover:underline ">Tech Used</a>
              </Link>
            </li>
            <li>
              <Link href="/features" legacyBehavior>
                <a className="text-white hover:underline ">About the Creator</a>
              </Link>
            </li>{" "}
          </ul>
        </div>
      </div>
    </div>
  );
}
