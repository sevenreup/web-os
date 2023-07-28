import { minMax, randomOffset } from "@/util/math";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { WindowContext } from "./contexts/win";
import WinMenuBar from "./window/menu_bar";
import { useOnDrag } from "@/hooks/use-on-drag";
import { useOnResize } from "@/hooks/use-on-resize";
import { arePropertiesEquals } from "@/util/object";

type Properties = {
  top: number;
  left: number;
  width: number;
  height: number;
  cursor: string;
  fullscreen: boolean;
};

type Props = {} & React.PropsWithChildren<{}>;

const WinMinSize = 250;

const Win = ({ children }: Props) => {
  const { zIndex, focus, close } = useContext(WindowContext);
  const [resizing, setResizing] = useState(false);
  const [{ top, left, width, height, cursor, fullscreen }, setProperties] =
    useState<Properties>(() => {
      const height = window.innerHeight / 2;
      const width = window.innerWidth / 2.5;
      const randX = randomOffset(window.innerWidth - width, 20);
      const randY = randomOffset(window.innerHeight - height, 20);
      return {
        width,
        height,
        top: Math.floor((window.innerHeight - height) / 2) + randY,
        left: Math.floor((window.innerWidth - width) / 2) + randX,
        cursor: "auto",
        fullscreen: false,
      };
    });

  const onDragMove = useCallback((e: MouseEvent) => {
    setProperties((properties) => ({
      ...properties,
      top: minMax(
        0,
        properties.top + e.movementY,
        window.innerHeight - properties.height
      ),
      left: minMax(
        0,
        properties.left + e.movementX,
        window.innerWidth - properties.width
      ),
    }));
  }, []);

  const onResize = useCallback(
    (offset: { top: number; left: number; bottom: number; right: number }) => {
      setProperties((properties) => {
        let top = properties.top + offset.top;
        let left = properties.left + offset.left;
        let height = properties.height + offset.bottom - offset.top;
        let width = properties.width + offset.right - offset.left;

        // keep top side in the window
        if (top < 0) {
          height += top;
          top = 0;
        }

        // keep left side in the window
        if (left < 0) {
          width += left;
          left = 0;
        }

        // respect min height
        if (height < WinMinSize) {
          if (offset.top) {
            top -= WinMinSize - height;
          }
          height = WinMinSize;
        }

        // respect min width
        if (width < WinMinSize) {
          if (offset.left) {
            left -= WinMinSize - width;
          }
          width = WinMinSize;
        }

        // keep left side in the window
        if (left + width > window.innerWidth) {
          width = window.innerWidth - left;
        }

        // keep bottom side in the window
        if (top + height > window.innerHeight) {
          height = window.innerHeight - top;
        }

        const updated = { ...properties, top, left, width, height };

        return arePropertiesEquals(properties, updated) ? properties : updated;
      });
    },
    []
  );

  const onMouseDown = useCallback(() => focus(), [focus]);

  const onCursorChange = useCallback(
    (cursor: string) =>
      setProperties((properties) => ({ ...properties, cursor })),
    []
  );

  const toggleFullScreen = useCallback(() => {
    setProperties((properties) => ({
      ...properties,
      fullscreen: !properties.fullscreen,
    }));
  }, []);

  // Resize the box when the window size change (reduce it size, and move its position)
  useEffect(() => {
    const onWindowResize = () => {
      setProperties((properties) => {
        let { top, left, width, height } = properties;
        if (left + width > window.innerWidth) {
          width = window.innerWidth - left;
          if (width < WinMinSize) {
            left = Math.max(0, left - (WinMinSize - width));
            width = WinMinSize;
          }
        }
        if (top + height > window.innerHeight) {
          height = window.innerHeight - top;
          if (height < WinMinSize) {
            top = Math.max(0, top - (WinMinSize - height));
            height = WinMinSize;
          }
        }
        const updated = { ...properties, top, left, width, height };
        return arePropertiesEquals(properties, updated) ? properties : updated;
      });
    };

    window.addEventListener("resize", onWindowResize);
    return () => window.removeEventListener("resize", onWindowResize);
  }, []);

  return (
    <div
      className="absolute pointer-events-auto rounded-sm bg-background flex flex-col border border-red-800"
      style={
        fullscreen
          ? { inset: 5, zIndex }
          : { top, left, width, height, cursor, zIndex }
      }
      {...useOnResize({
        onCursorChange,
        onResize,
        onChange: setResizing,
        resizable: !fullscreen,
        onMouseDown,
      })}
    >
      <WinMenuBar
        title={"This is a title"}
        fullscreen={fullscreen}
        onDoubleClick={toggleFullScreen}
        onCloseClick={close}
        onFullScreenClick={toggleFullScreen}
        {...useOnDrag({ draggable: !fullscreen && !resizing, onDragMove })}
      />
      {children}
    </div>
  );
};

export default Win;
