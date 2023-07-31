import React from "react";
import styles from "./grid.module.css";
import { cn } from "@/lib/utils";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const DesktopGrid = ({ className, ...props }: Props) => {
  return (
    <div className={cn(className, styles.grid)} {...props}>
      {Array.from(Array(36)).map((_, i) => {
        return <div key={i} className={cn(styles.gridItem, "bg-white")} />;
      })}
    </div>
  );
};

export default DesktopGrid;
