/* eslint-disable @next/next/no-img-element */
'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React from "react";
import {
  FaCaretRight as RightIcon,
  FaPowerOff as PowerOffIcon,
} from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTaskbarGroups } from "@/os/desktop/core/desktop/hooks";
import { WinStartMenuGroups } from "@/os/desktop/core/models/app";
import { ShortcutData } from "@/models/shortcut";
import { useOpenApp } from "@/os/desktop/core/win/util/hooks";

type Props = {
  close: () => void
};

const StartMenu = ({close}: Props) => {
  const { pinned, recent } = useTaskbarGroups() as WinStartMenuGroups;
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col p-6">
        <Input placeholder="Search for apps, settings and documents" />
        <MenuHeading />
        <div className="grid grid-cols-6 grid-rows-3 gap-4">
          {pinned.map((app, i) => (
            <AppShortcut key={i} app={app} close={close}/>
          ))}
        </div>
      </div>
      <div>
        <div className="p-6">
          <MenuHeading />
          <div className="grid grid-cols-2 grid-rows-3 gap-4">
            {recent.map((app, i) => (
              <AppRecent key={i} app={app}  close={close}/>
            ))}
          </div>
        </div>

        <div className="flex flex-row justify-between border-t-2 border-indigo-500 p-4">
          <div className="flex flex-row items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>Christopher Phiri</span>
          </div>
          <Button>
            <PowerOffIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

type ShortProps = {
  app: ShortcutData, close: () => void
}

const AppShortcut = ({ app, close }:ShortProps) => {
  const { open } = useOpenApp(app);
  return (
    <button
      className={cn(
        "flex flex-col gap-2 p-2 items-center justify-center",
        "w-[96px] h-[84px]",
        "hover:bg-slate-400 rounded-md"
      )}
      onClick={() => {
        open()
        close()
      }}
    >
      <img src={"/img/icon/" + app.icon} alt="" className="w-8" />
      <span className="w-full text-center text-[12px] whitespace-nowrap">
        {app.name}
      </span>
    </button>
  );
};

const AppRecent = ({ app, close }: ShortProps) => {
  const { open } = useOpenApp(app);
  return (
    <button
      className={cn(
        "flex flex-row gap-2 text-left p-2",
        "hover:bg-slate-400 rounded-md "
      )}
      onClick={() => {
        open()
        close()
      }}
    >
      <img src={"/img/icon/" + app.icon} alt="" className="w-8" />
      <div className="flex flex-col">
        <span className="text-sm">{app.name}</span>
        <span className="text-xs">Recently Added</span>
      </div>
    </button>
  );
};

const MenuHeading = () => {
  return (
    <div className="flex flex-row justify-between items-center p-4">
      <div>Pinned</div>
      <Button>
        More
        <RightIcon />
      </Button>
    </div>
  );
};

export default StartMenu;
