import { createContext } from "react";
import { App } from "../models/app";

export type SystemManagerContextType = {
  systemApps: Map<string, App>;
  userApps: Map<string, App>;
  findApp: (id: string) => App | undefined;
};

export const SystemManagerContext = createContext<SystemManagerContextType>({
  systemApps: new Map<string, App>(),
  userApps: new Map<string, App>(),
  findApp: () => undefined,
});

export const SystemManagerProvider = SystemManagerContext.Provider;
