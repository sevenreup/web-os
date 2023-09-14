/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { ShortcutData } from "@/models/shortcut";
import { useOpenApp } from "@/os/desktop/core/win/util/hooks";

type Props = {
  data: ShortcutData;
};

const AppIcon = ({ data }: Props) => {
  const { open } = useOpenApp(data);
  const appUrl = data.icon ? "/img/icon/" + data.icon : "";
  return (
    <Button
      onClick={() => {
        open();
      }}
      variant="ghost"
    >
      <Image src={appUrl} alt={data.name} height={26} width={26} />
    </Button>
  );
};

export const DesktopIcon = ({ data }: Props) => {
  const { open } = useOpenApp(data);
  const appUrl = data.icon ? "/img/icon/" + data.icon : "";
  return (
    <button
      className="p-1 relative w-full "
      draggable={true}
      onClick={() => {
        open();
      }}
    >
      <button className="flex flex-col relative justify-center items-center">
        <img src={appUrl} alt="" className="w-9 object-cover" />
        <span className="w-full">{data.name}</span>
      </button>
    </button>
  );
};

export default AppIcon;
