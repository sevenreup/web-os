import { cn } from "@/lib/utils";
import React, {  } from "react";
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
import { getTaskbarApps } from "../../util/apps";
import { SystemCenter } from "./system-center";

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
            className="w-[600px] h-[min(100%-24px,720px)] mx-4 my-2 p-0 border-0 window-bg"
          >
            <StartMenu close={closeStartMenu} />
          </PopoverContent>
        </Popover>
        {getTaskbarApps().map((app) => (
          <AppIcon key={app.name} data={app} />
        ))}
      </div>
      <SystemCenter />
    </div>
  );
};

export default Taskbar;
