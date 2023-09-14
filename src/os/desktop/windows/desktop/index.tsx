'use client';

import { settings } from "@/configs/windows";
import { cn } from "@/lib/utils";
import React from "react";
import { useDesktopApps } from "../../core/desktop/hooks";
import { DesktopIcon } from "@/components/icon";

type Props = {};

export const Desktop = (props: Props) => {
  const apps = useDesktopApps();
  return (
    <div
      className={cn(
        "h-[100vh] bg-center bg-cover bg-[url(https://images.frandroid.com/wp-content/uploads/2019/12/windows-10-wallpaper.jpg)] overflow-hidden",
        "flex flex-col"
      )}
    >
      <div
        className={cn(
          "box-border w-full h-full flex-1 p-8",
          "grid grid-flow-col grid-cols-[repeat(auto-fill,74px)] grid-rows-[repeat(auto-fill,70px)] gap-[28px_1px] place-content-start"
        )}
        style={{
          maxWidth: "100%",
          contain: "strict",
        }}
      >
        {apps.map((app) => (
          <DesktopIcon key={app.name} data={app} />
        ))}
      </div>
      {/* <div
          className="inline-grid w-full h-full"
          style={
            {
              "--size": 110,
              gridTemplateColumns: "repeat(var(--size), max-content)",
            } as React.CSSProperties
          }
        >
          {[...Array(1000)].map((i) => (
            <div key={i} className="h-full w-16 bg-black"></div>
          ))}
        </div> */}
      <div
        className="w-full"
        style={{
          height: settings.taskbarHeight,
        }}
      />
    </div>
  );
};
