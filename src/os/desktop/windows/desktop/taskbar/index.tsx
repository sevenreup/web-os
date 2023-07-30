import { cn } from "@/lib/utils";
import React from "react";
import AppIcon from "../../../../../components/icon";
import { settings } from "@/configs/windows";
import { useTaskbar } from "../../../core/desktop/hooks";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { SiWindows11 as WindowsIcon } from "react-icons/si";
import StartMenu from "./start-menu";

type Props = {};

const Taskbar = (props: Props) => {
  const { toggleStartMenu, closeStartMenu, startMenuOpen } = useTaskbar();

  return (
    <div
      className={cn(
        "fixed bottom-0 w-full bg-[#091418] text-white",
        "flex justify-between p-4"
      )}
      style={{
        height: settings.taskbarHeight,
      }}
    >
      <div className="flex flex-row items-center gap-2">
        <Popover open={startMenuOpen}>
          <PopoverTrigger asChild>
            <Button
              onClick={() => {
                toggleStartMenu();
              }}
              variant="ghost"
              size="icon"
            >
              <WindowsIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            onPointerDownOutside={() => {
              closeStartMenu();
            }}
          >
            <StartMenu />
          </PopoverContent>
        </Popover>
        <AppIcon
          data={{
            title: "Chrome",
            icon: "/icons/user/chrome-logo.svg",
            target: "apps/user/chrome",
          }}
        />
        <AppIcon
          data={{
            title: "Settings",
            icon: "/icons/system/settings.png",
            target: "apps/system/settings",
          }}
        />
        <AppIcon
          data={{
            title: "Figma",
            icon: "/icons/user/figma.png",
            target: "apps/user/figma",
          }}
        />
      </div>
      <div>second</div>
    </div>
  );
};

export default Taskbar;
