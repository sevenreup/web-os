import React from "react";
import Win from "../window";
import { useFindApp } from "../../os/hooks";
import { ShortcutData } from "@/models/shortcut";

type Props = {
  data: ShortcutData;
};

const ChromeWindow = ({ data }: Props) => {
  const instance = useFindApp(data);

  return (
    <Win title={data.name} img={"/img/icon/" + data.icon}>
      {instance == undefined ? <AppNotFound /> : instance?.app.render()}
    </Win>
  );
};

const AppNotFound = () => {
  return <div>404</div>;
};

export default ChromeWindow;
