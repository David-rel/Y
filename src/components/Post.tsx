import { FaHeart, FaBookmark, FaComment } from "react-icons/fa"; // Importing the required icons

type PostProps = {
  photoUrl: string;
  name: string;
  date: string;
  content: string;
};


function Post({ photoUrl, name, date, content }: PostProps) {
  return (
    <div className="border-b border-gray-400 p-4">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={photoUrl} alt="User" className="h-10 w-10 rounded-full" />
          <span className="font-bold">{name}</span>
        </div>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <p className="mb-4">{content}</p>
      <div className="flex space-x-4">
        <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-400">
          <span>Follow</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-400">
          <FaHeart />
          <span>Like</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-400">
          <FaComment />
          <span>Comment</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-400">
          <FaBookmark />
          <span>Save</span>
        </button>
      </div>
    </div>
  );
}

export default Post;
