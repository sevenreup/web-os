"use client";

import React, { useContext } from "react";
import { Button } from "../ui/button";
import { WinManagerContext } from "@/os/desktop/core/win/contexts/manager";

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
    >
      {data.title}
    </Button>
  );
};

export default AppIcon;
