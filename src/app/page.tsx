"use client";
import { DesktopWrapper } from "@/os/desktop/core/desktop";
import Taskbar from "@/os/desktop/windows/desktop/taskbar";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  if (isTabletOrMobile) {
    return (
      <div className="h-[100vh] w-full bg-background text-base flex justify-center items-center text-center p-4">
        Mobile view not yet implemented, use on a bigger screen or on laptop
        (Creating an android/IOS view)
      </div>
    );
  }

  return (
    <DesktopWrapper>
      <main className="m-0 p-0 overflow-y-hidden">
        <div className="h-[100vh] bg-center bg-cover bg-[url(https://images.frandroid.com/wp-content/uploads/2019/12/windows-10-wallpaper.jpg)]">
          {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
        </div>
        <Taskbar />
      </main>
    </DesktopWrapper>
  );
}
