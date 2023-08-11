import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React from "react";
import {
  FaCaretRight as RightIcon,
  FaPowerOff as PowerOffIcon,
} from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

const StartMenu = (props: Props) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col p-6">
        <Input placeholder="Search for apps, settings and documents" />
        <MenuHeading />
        <div className="grid grid-cols-6 gap-4">
          {[...Array(16)].map((_, i) => (
            <button
              key={i}
              className={cn(
                "flex flex-col gap-2 p-2 items-center justify-center",
                "w-[96px] h-[84px]",
                "hover:bg-slate-400 rounded-md"
              )}
            >
              <img
                src={`https://picsum.photos/seed/${i}/100/100`}
                alt=""
                className="w-8"
              />
              <span className="w-full text-center text-[12px] whitespace-nowrap">Home</span>
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="p-6">
          <MenuHeading />
          <div className="grid grid-cols-2 gap-4">
            {[...Array(6)].map((_, i) => (
              <button
                key={i}
                className={cn(
                  "flex flex-row gap-2 text-left p-2",
                  "hover:bg-slate-400 rounded-md "
                )}
              >
                <img
                  src={`https://picsum.photos/seed/${i}/100/100`}
                  alt=""
                  className="h-12 w-12"
                />
                <div className="flex flex-col">
                  <span>Intellij IDEA</span>
                  <span>Recently Added</span>
                </div>
              </button>
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
