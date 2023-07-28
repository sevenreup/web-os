"use client";

import { IDescriptor } from "@/models/descriptor";
import { PropsWithChildren, useMemo, useState } from "react";
import {
  WinManagerProvider,
  WindowManagerContextType,
} from "./contexts/manager";
import { WindowContextType, WindowProvider } from "./contexts/win";
import ChromeWindow from "./render/chrome_window";
import {
  focusedDescriptor,
  removeOneAndSetDescriptors,
} from "./util/descriptors";

type Props = {} & PropsWithChildren<{}>;

const genericRenderer = () => {
  return <ChromeWindow />;
};

export const WindowManager = ({ children }: Props) => {
  const [descriptors, setDescriptors] = useState<IDescriptor[]>([]);
  const winManagerContextValue = useMemo(
    () =>
      ({
        openNewWindow: () => {
          console.log("openNewWindow");
          setDescriptors((descriptors) => {
            return descriptors.concat({
              id: Math.random().toString(),
              zIndex: 0,
            });
          });
        },
      } as WindowManagerContextType),
    []
  );

  const windowHandlers: Omit<WindowWrapperProps, "descriptor" | "render"> =
    useMemo(
      () => ({
        close: (id: string) => {
          removeOneAndSetDescriptors(setDescriptors, id);
        },
        focus: (id: string) => {
          setDescriptors((descriptors) => focusedDescriptor(descriptors, id));
        },
      }),
      []
    );

  return (
    <WinManagerProvider value={winManagerContextValue}>
      {children}
      {descriptors.map((descriptor) => {
        return (
          <WindowWrapper
            key={descriptor.id}
            render={genericRenderer}
            descriptor={descriptor}
            {...windowHandlers}
          />
        );
      })}
    </WinManagerProvider>
  );
};

type WindowWrapperProps = {
  descriptor: IDescriptor;
  close: (id: string) => void;
  focus: (id: string) => void;
  render: () => React.ReactNode;
};

const WindowWrapper = ({
  render,
  close,
  focus,
  descriptor,
}: WindowWrapperProps) => {
  const contextValue = useMemo(
    () =>
      ({
        zIndex: descriptor.zIndex,
        close: close.bind(null, descriptor.id),
        focus: focus.bind(null, descriptor.id),
      } as WindowContextType),
    [descriptor, close, focus]
  );

  return (
    <WindowProvider key={descriptor.id} value={contextValue}>
      {render()}
    </WindowProvider>
  );
};
