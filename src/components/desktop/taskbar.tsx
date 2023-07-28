import { cn } from "@/lib/utils";
import React from "react";
import AppIcon from "../icon";
import { settings } from "@/configs/windows";

type Props = {};

const Taskbar = (props: Props) => {
  return (
    <div
      className={cn(
        "fixed bottom-0 w-full bg-green-400",
        "flex justify-between p-4"
      )}
      style={{
        height: settings.taskbarHeight,
      }}
    >
      <div className="flex flex-row items-center gap-2">
        <AppIcon
          data={{
            title: "Chrome",
            icon: "https://www.google.com/chrome/static/images/chrome-logo.svg?cache=72f5d9c",
            target: "https://www.google.com/chrome/",
          }}
        />
        <AppIcon
          data={{
            title: "Settings",
            icon: "https://www.google.com/chrome/static/images/chrome-logo.svg?cache=72f5d9c",
            target: "https://www.google.com/chrome/",
          }}
        />
        <AppIcon
          data={{
            title: "Figma",
            icon: "https://www.google.com/chrome/static/images/chrome-logo.svg?cache=72f5d9c",
            target: "https://www.google.com/chrome/",
          }}
        />
      </div>
      <div>second</div>
    </div>
  );
};

export default Taskbar;
