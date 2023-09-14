/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { FaChevronUp as UpIcon } from "react-icons/fa";
import Battery from "./battery";

type Props = {};

export const SystemCenter = ({}: Props) => {
  const clickDispatch = (event: any) => {};

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row gap-2 items-center">
      <div
        className="px-2 prtclk handcr hvlight flex"
        onClick={clickDispatch}
        data-action="BANDTOGG"
      >
        <UpIcon width={10} />
      </div>
      <div
        className="flex flex-row gap-2 items-center"
        onClick={clickDispatch}
        data-action="PANETOGG"
      >
        <Icon className="taskIcon" src="wifi" width={16} />
        <Icon className="taskIcon" src={"audio0"} width={16} />
        <Battery />
      </div>
      <div
        className="taskDate m-1 handcr prtclk rounded hvlight"
        onClick={clickDispatch}
        data-action="CALNTOGG"
      >
        <div>
          {time.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}
        </div>
        <div>
          {time.toLocaleDateString("en-US", {
            year: "2-digit",
            month: "2-digit",
            day: "numeric",
          })}
        </div>
      </div>
      <Icon className="graybd my-4" src="" width={6} click="SHOWDSK" />
    </div>
  );
};

const Icon = ({
  src,
}: {
  src: string;
  className?: string;
  width?: number;
  click?: string;
}) => {
  return (
    <Button size="icon" variant="ghost" className="">
      <img src={"/img/icon/ui/" + src + ".png"} />
    </Button>
  );
};
