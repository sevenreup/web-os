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
      <div className="flex items-center">
        <AppIcon />
      </div>
      <div>second</div>
    </div>
  );
};

export default Taskbar;
