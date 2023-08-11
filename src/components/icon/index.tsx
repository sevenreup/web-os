"use client";

import React, { useContext } from "react";
import { Button } from "../ui/button";
import { WinManagerContext } from "@/os/desktop/core/win/contexts/manager";
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

export default AppIcon;
