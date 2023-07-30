"use client";

import React, { useContext } from "react";
import { Button } from "../ui/button";
import { WinManagerContext } from "@/os/desktop/core/win/contexts/manager";
import Image from "next/image";

type Props = {
  data: ShortcutData;
};

const AppIcon = ({ data }: Props) => {
  const { openNewWindow } = useContext(WinManagerContext);

  return (
    <Button
      onClick={() => {
        openNewWindow(data);
      }}
      variant="ghost"
    >
      {/* {data.title} */}
      <Image src={data.icon ?? ""} alt={data.title} height={26} width={26} />
    </Button>
  );
};

export default AppIcon;
