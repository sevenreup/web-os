import React, { MouseEventHandler } from "react";

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
        {!fullscreen && <button onClick={onFullScreenClick}>Full</button>}
        {fullscreen && <button onClick={onFullScreenClick}>Small</button>}
        <button onClick={onCloseClick}>close</button>
      </div>
    </div>
  );
};

export default WinMenuBar;
