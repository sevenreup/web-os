"use client";

import React, { useContext } from "react";
import { WinManagerContext } from "../win/contexts/manager";
import { Button } from "../ui/button";

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
