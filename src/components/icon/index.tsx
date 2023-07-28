"use client";

import React, { useContext } from "react";
import { WinManagerContext } from "../win/contexts/manager";

type Props = {};

const AppIcon = (props: Props) => {
  const { openNewWindow } = useContext(WinManagerContext);

  return (
    <button
      onClick={() => {
        openNewWindow();
      }}
    >
      Open window
    </button>
  );
};

export default AppIcon;
