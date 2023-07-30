import { createContext } from "react";
import { App } from "../models/app";

export type SystemManagerContextType = {
  systemApps: Map<string, App>;
  userApps: Map<string, App>;
};

export const SystemManagerContext = createContext<SystemManagerContextType>({
  systemApps: new Map<string, App>(),
  userApps: new Map<string, App>(),
});

export const SystemManagerProvider = SystemManagerContext.Provider;
