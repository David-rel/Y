import { useSession } from "next-auth/react";
import FrontPage from "~/components/FrontPage";
import Sidebar from "~/components/Sidebar";

export default function Home() {
  const { data: sessionData } = useSession();

  return (
    <div className={sessionData ? "min-h-screen bg-black text-white" : ""}>
      {sessionData ? (
        <div>
          <Sidebar />
          {/* ... any other components/content you want to display alongside Sidebar */}
        </div>
      ) : (
        <div>
          <FrontPage />
        </div>
      )}
    </div>
  );
}
