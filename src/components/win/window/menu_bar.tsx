import { Button } from "@/components/ui/button";
import React, { MouseEventHandler } from "react";
import {
  VscChromeMaximize as MaximizeIcon,
  VscChromeMinimize as MinimizeIcon,
  VscChromeRestore as RestoreIcon,
  VscClose as CloseIcon,
} from "react-icons/vsc";

type Props = {
  img?: string;
  title: string;
  fullscreen: boolean;
  onFullScreenClick: () => void;
  onDoubleClick: () => void;
  onCloseClick: () => void;
  onMouseDown: MouseEventHandler;
};

const WinMenuBar = ({
  img,
  title,
  fullscreen,
  onFullScreenClick,
  onDoubleClick,
  onCloseClick,
  onMouseDown,
}: Props) => {
  return (
    <div
      onDoubleClick={onDoubleClick}
      onMouseDown={onMouseDown}
      className="flex flex-row items-center justify-between p-2 bg-gray-800 text-white"
    >
      <div>
        {Boolean(img) && <img src={img} alt={title} />}
        <h1 className="whitespace-nowrap">{title}</h1>
      </div>
      <div />
      <div className="flex flex-row gap-2">
        <Button onClick={onFullScreenClick} size="icon" variant="ghost">
          <MinimizeIcon />
        </Button>
        {!fullscreen && (
          <Button onClick={onFullScreenClick} size="icon" variant="ghost">
            <MaximizeIcon />
          </Button>
        )}
        {fullscreen && (
          <Button onClick={onFullScreenClick} size="icon" variant="ghost">
            <RestoreIcon />
          </Button>
        )}
        <Button onClick={onCloseClick} size="icon" variant="ghost">
          <CloseIcon />
        </Button>
      </div>
    </div>
  );
};

export default WinMenuBar;
