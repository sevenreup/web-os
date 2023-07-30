import { ReactNode } from "react";

export interface App {
  title: string;
  icon: string;
  render: () => ReactNode;
  options?: {
    multiInstance: boolean;
  };
}
