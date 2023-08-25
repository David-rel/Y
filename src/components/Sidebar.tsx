import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {
  FaHome,
  FaCompass,
  FaBell,
  FaEnvelope,
  FaSave,
  FaUserFriends,
} from "react-icons/fa";

export default function Sidebar() {
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 flex h-screen w-64 flex-col space-y-4 border-r border-gray-600 bg-black p-4 pl-16 pl-8 text-white">
      {/* Logo */}
      <div className="mb-4 flex-shrink-0">
        <Image src="/logo.jpg" alt="Y Logo" width={75} height={75} />
      </div>

      {/* Navigation */}
      <ul className="flex-grow space-y-4 text-2xl font-semibold">
        <li>
          <div className="flex items-center space-x-2 rounded-full px-2 py-1 pb-2 pt-2 hover:bg-gray-700">
            <FaHome />
            <Link href="/">Home</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center space-x-2 rounded-full px-2 py-1 pb-2 pt-2 hover:bg-gray-700">
            <FaCompass />
            <Link href="/feed">Explore</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center space-x-2 rounded-full px-2 py-1 pb-2 pt-2 hover:bg-gray-700">
            <FaBell />
            <Link href="/notifications">Notifications</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center space-x-2 rounded-full px-2 py-1 pb-2 pt-2 hover:bg-gray-700">
            <FaEnvelope />
            <Link href="/messages">Messages</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center space-x-2 rounded-full px-2 py-1 pb-2 pt-2 hover:bg-gray-700">
            <FaSave />
            <Link href="/saved">Saved</Link>
          </div>
        </li>
        <li>
          <div className="flex items-center space-x-2 rounded-full px-2 py-1 pb-2 pt-2 hover:bg-gray-700">
            <FaUserFriends />
            <Link href="/friends">Friends</Link>
          </div>
        </li>
      </ul>

      {/* Post & User Profile Buttons */}
      <div className="flex flex-col items-stretch space-y-4">
        <button className="rounded-full bg-white px-6 py-2 text-center text-xl font-bold text-black hover:bg-white/90">
          Post
        </button>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-2 rounded rounded-full p-2 hover:bg-gray-700">
            <Image
              src={session?.user.image || "/default.jpeg"}
              alt="User Profile Image"
              width={40}
              height={40}
              className="rounded-full"
            />

            <span>{session?.user.name}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

//add profile link
//add pages and there places