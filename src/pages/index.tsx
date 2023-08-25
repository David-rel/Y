import { useSession } from "next-auth/react";
import FrontPage from "~/components/FrontPage";
import Sidebar from "~/components/Sidebar";
import CenterContent from "~/components/CenterContent";
import DevNotes from "~/components/DevNotes"; // Import the new component

export default function Home() {
  const { data: sessionData } = useSession();

  return (
    <div
      className={
        sessionData ? "min-w-screen flex min-h-screen bg-black text-white" : ""
      }
    >
      {sessionData ? (
        <div className="flex w-screen">
          <Sidebar />
          <CenterContent />
          <DevNotes />
        </div>
      ) : (
        <div>
          <FrontPage />
        </div>
      )}
    </div>
  );
}
