import React from "react";
import styles from "./grid.module.css";
import { cn } from "@/lib/utils";
import { AndroidIcon } from "../../android/components/icons";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const DesktopGrid = ({ className, ...props }: Props) => {
  return (
    <div className={cn(className, styles.grid)} {...props}>
      {Array.from(Array(20)).map((_, i) => {
        return (
          <div key={i} className={cn(styles.gridItem)}>
            <AndroidIcon appId="ss" title="App" />
          </div>
        );
      })}
    </div>
  );
};

export default DesktopGrid;
