import React from "react";
import { SystemManagerContextType, SystemManagerProvider } from "./context";
import { App } from "../models/app";

type Props = {} & React.PropsWithChildren<{}>;

const systemApps = new Map<string, App>([
  [
    "explorer",
    {
      title: "Explorer",
      icon: "explorer",
      render: () => <div>Explorer</div>,
    } as App,
  ],
  [
    "settings",
    {
      title: "Settings",
      icon: "settings",
      render: () => <div>Settings</div>,
      options: {
        multiInstance: false,
      },
    } as App,
  ],
]);

const userApps = new Map<string, App>([
  [
    "figma",
    {
      title: "Figma",
      icon: "figma",
      render: () => <div>Explorer</div>,
    } as App,
  ],
  [
    "chrome",
    {
      title: "chrome",
      icon: "Chrome",
      render: () => <div>Settings</div>,
    } as App,
  ],
]);

const SystemManager = ({ children }: Props) => {
  const systemManagerContextValue = React.useMemo<SystemManagerContextType>(
    () => ({
      systemApps: systemApps,
      userApps: userApps,
      findApp: (target: string) => {
        if (target.includes("apps/user/")) {
          const app = target.split("apps/user/")[1];
          return userApps.get(app);
        } else {
          const app = target.split("apps/system/")[1];
          return systemApps.get(app);
        }
      },
    }),
    []
  );
  return (
    <SystemManagerProvider value={systemManagerContextValue}>
      {children}
    </SystemManagerProvider>
  );
};

export default SystemManager;
