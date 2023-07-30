"use client";

import { WindowManager } from "@/os/desktop/core/win";
import React, { PropsWithChildren } from "react";
import { useMediaQuery } from "react-responsive";

type Props = {} & PropsWithChildren<{}>;

const MainWrapper = ({ children }: Props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  if (isTabletOrMobile) {
    return <div>{children}</div>;
  }

  return <WindowManager>{children}</WindowManager>;
};

export default MainWrapper;
