"use client";

import { DesktopWrapper } from "@/os/desktop/core/desktop";
import { Desktop } from "@/os/desktop/windows/desktop";
import Taskbar from "@/os/desktop/windows/desktop/taskbar";
import { Homescreen } from "@/os/mobile";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  if (isTabletOrMobile) {
    return <Homescreen />;
  }

  return (
    <DesktopWrapper>
      <main className="m-0 p-0 overflow-y-hidden">
        <Desktop />
        <Taskbar />
      </main>
    </DesktopWrapper>
  );
}
