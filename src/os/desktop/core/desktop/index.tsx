import React, { PropsWithChildren, use, useMemo, useState } from "react";
import { DesktopContextType, DesktopProvider } from "./context";
import { getStartApps } from "../../windows/util/apps";

type Props = {} & PropsWithChildren<{}>;

export const DesktopWrapper = ({ children }: Props) => {
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  const desktopContextValue = useMemo<DesktopContextType>(
    () => ({
      taskbar: {
        startMenuOpen: startMenuOpen,
        openStartMenu: () => {
          setStartMenuOpen(true);
        },
        closeStartMenu: () => {
          setStartMenuOpen(false);
        },
        toggleStartMenu: () => {
          setStartMenuOpen(!startMenuOpen);
        },
        toggleNotificationCenter: () => {},
        getStartMenuGroups: () => {
          const apps = getStartApps();
          return apps;
        },
      },
    }),
    [startMenuOpen]
  );
  return (
    <DesktopProvider value={desktopContextValue}>{children}</DesktopProvider>
  );
};
