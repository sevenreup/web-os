import React from "react";
import { SystemManagerContextType, SystemManagerProvider } from "./context";
import { App } from "../models/app";

type Props = {} & React.PropsWithChildren<{}>;

const appInstances = [
  {
    id: "apps/system/explorer",
    render: () => <div>Explorer</div>,
  } as App,
  {
    id: "apps/system/settings",
    render: () => <div>Settings</div>,
    options: {
      multiInstance: false,
    },
  } as App,
  {
    id: "apps/user/figma",
    render: () => <div>Explorer</div>,
  } as App,
  {
    id: "apps/user/chrome",
    render: () => <div>Settings</div>,
  } as App,
];

const SystemManager = ({ children }: Props) => {
  const systemManagerContextValue = React.useMemo<SystemManagerContextType>(
    () => ({
      apps: appInstances,
      findApp: (target: string) => {
        var app = appInstances.find((app) => app.id === target);
        return app;
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
