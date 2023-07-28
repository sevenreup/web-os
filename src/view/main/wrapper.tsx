"use client";

import { WindowManager} from "@/components/win";
import React, { PropsWithChildren } from "react";

type Props = {} & PropsWithChildren<{}>;

const MainWrapper = ({ children }: Props) => {

  return (
    <WindowManager>
      {children}
    </WindowManager>
  );
};

export default MainWrapper;
