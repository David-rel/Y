import React, { useState } from "react";
import { FaCamera } from "react-icons/fa"; // Importing the camera icon
import Post from "./Post";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";

type User = {
  id: string;
  name: string;
  email: string;
  emailVerified: Date | null;
  image: string | null;
  // Add other fields of the User model as required
};

type PostType = {
  createdAt: string;
  updatedAt: string;
  content: string;
  photo1: string | null;
  photo2: string | null;
  photo3: string | null;
  photo4: string | null;
  photo5: string | null;
  id: string;
  userId: string;
  user: User; // Add this line to include the user data
};

function CenterContent({}: { className?: string }) {
  const [postContent, setPostContent] = useState("");
  const { data, isLoading, isError, refetch } =
    api.post.all.useQuery<PostType[]>();

  console.log(data);
  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      refetch(); // Refetch the posts list after successfully creating a new post
      setPostContent(""); // Clear the input after posting
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    const postData = {
      content: postContent,
    };
    createPost.mutate(postData);
    setPostContent(""); // Clear the input after posting
  };

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  return (
    <div className="w-full">
      <div className="w-full border-r border-gray-400">
        <h1 className="p-4 pb-4 text-4xl font-bold text-white">
          Welcome to the New X, Y
        </h1>
        <form
          className="border-b border-gray-400 p-4 pb-4"
          onSubmit={handleSubmit}
        >
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
            <button className="rounded-full bg-white px-12 py-2 text-xl font-bold text-black hover:bg-white/90">
              Post
            </button>
          </div>
        </form>
      </div>
      <div className=" w-2full min-h-screen border-r border-gray-400">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading posts.</p>}
        {data &&
          data.map((post, index) => {
            return (
              <>
                <Post
                  key={post.id}
                  photoUrl={post.user.image || "/default.jpg"} // Fallback to a default image
                  name={post.user.name || "Anonymous"} // Fallback to "Anonymous"
                  date={formatDate(post.createdAt)}
                  content={post.content || ""}
                />
              </>
            );
          })}
      </div>
    </div>
  );
}

export default CenterContent;

