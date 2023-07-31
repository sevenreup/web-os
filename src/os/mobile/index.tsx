import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { SiGooglelens as GoogleLensIcon } from "react-icons/si";
import { BiSolidMicrophone as MicrophoneIcon } from "react-icons/bi";
import { BottomSheet } from "react-spring-bottom-sheet";
import { AndroidIcon } from "./android/components/icons";
import { cn } from "@/lib/utils";
import SwipeDetector from "./core/swipe";
import DesktopGrid from "./core/grid";

type Props = {};

export const Homescreen = (props: Props) => {
  const [open, setOpen] = useState(false);

  function onDismiss() {
    setOpen(false);
  }

  return (
    <>
      <SwipeDetector
        className="m-0 p-0 overflow-y-hidden touch-none"
        onSwipeDown={() => {}}
        onSwipeUp={() => {
          setOpen(true);
        }}
      >
        <div
          className={cn(
            "h-[100vh] w-full bg-background text-base justify-center items-center text-center p-4",
            "flex flex-col",
            "bg-center bg-cover bg-[url(https://images.frandroid.com/wp-content/uploads/2019/12/windows-10-wallpaper.jpg)]"
          )}
        >
          <DesktopGrid className="w-full h-full" />
          <div className="flex flex-col gap-4 justify-end items-end p-2">
            <div className="flex flex-row gap-2 w-full justify-between">
              {["google", "chrome", "photos", "whatsapp", "camera"].map(
                (item) => {
                  return <AndroidIcon key={item} appId={item} />;
                }
              )}
            </div>
            <SearchBar />
          </div>
        </div>
      </SwipeDetector>

      <BottomSheet open={open} onDismiss={onDismiss}>
        Cool drawer here
      </BottomSheet>
    </>
  );
};

const SearchBar = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <GoogleIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </div>
      <input
        type="text"
        id="voice-search"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-16 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search or search something..."
        required
      />
      <div className="absolute inset-y-0 right-0 flex flex-row gap-0 items-center justify-end">
        <Button
          type="button"
          className="flex items-center"
          size="icon"
          variant="ghost"
        >
          <MicrophoneIcon />
        </Button>
        <Button
          type="button"
          className="flex items-center"
          size="icon"
          variant="ghost"
        >
          <GoogleLensIcon />
        </Button>
      </div>
    </div>
  );
};
