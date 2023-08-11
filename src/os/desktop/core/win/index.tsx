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
  getMaxZIndex,
  removeOneAndSetDescriptors,
} from "./util/descriptors";
import { WinOptions } from "@/models/window";
import { useSystemManager } from "../os/hooks";
import { ShortcutData } from "@/models/shortcut";

type Props = {} & PropsWithChildren<{}>;

const genericRenderer = (data: ShortcutData) => {
  return <ChromeWindow data={data} />;
};

export const WindowManager = ({ children }: Props) => {
  const [descriptors, setDescriptors] = useState<IDescriptor[]>([]);
  const { findApp } = useSystemManager();

  const winManagerContextValue = useMemo(
    () =>
      ({
        openNewWindow: (data, { equals, ...options }: WinOptions = {}) => {
          const app = findApp(data.payload ?? "");
          let shouldFocus: IDescriptor | undefined = undefined;
          if (app != undefined) {
            const hasMulti = app.options?.multiInstance ?? true;

            if (!hasMulti) {
              shouldFocus = descriptors.find(
                (descriptor) => descriptor.payload.target === data.payload
              );
            }
          }

          if (shouldFocus) {
            return setDescriptors(
              focusedDescriptor(descriptors, shouldFocus.id)
            );
          } else {
            setDescriptors((descriptors) => {
              return descriptors.concat({
                id: Math.random().toString(),
                zIndex: getMaxZIndex(descriptors),
                ...options,
                payload: data,
              });
            });
          }
        },
      } as WindowManagerContextType),
    [descriptors, findApp]
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
  render: (data: ShortcutData) => React.ReactNode;
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
      {render(descriptor.payload)}
    </WindowProvider>
  );
};
