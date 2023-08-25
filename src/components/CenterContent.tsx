import React, { useState } from "react";
import { FaCamera } from "react-icons/fa"; // Importing the camera icon
import Post from "./Post";
import { useSession } from "next-auth/react";

function CenterContent({ className }: { className?: string }) {
  const [postContent, setPostContent] = useState("");
  const { data: session } = useSession();

  const handlePost = () => {
    console.log(postContent);
    setPostContent(""); // Clear the input after posting
  };

  return (
    <div className="w-full">
      <div className="w-full border-r border-gray-400">
        <h1 className="p-4 pb-4 text-4xl font-bold text-white">
          Welcome to the New X, Y
        </h1>
        <div className=" border-b border-gray-400 p-4 pb-4">
          {" "}
          {/* Moved borders here */}
          <div className="mb-4">
            <textarea
              className="w-full resize-none rounded-md border bg-gray-300 p-2 text-black"
              placeholder="What's on your mind?"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
          </div>
          <div className="mb-4 flex justify-between">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500 text-white hover:bg-gray-400">
              <FaCamera />
            </button>
            <button
              onClick={handlePost}
              className="rounded-full bg-white px-12 py-2 text-xl font-bold text-black hover:bg-white/90"
            >
              Post
            </button>
          </div>
        </div>
      </div>
      <div className=" min-h-screen w-2full border-r border-gray-400">
        <Post
          photoUrl={session?.user.image || "/default.jpg"} // Fallback to a default image
          name={session?.user.name || "Anonymous"} // Fallback to "Anonymous"
          date="August 25, 2023"
          content="This is a sample post content. Replace with actual content."
        />
      </div>
    </div>
  );
}

export default CenterContent;
