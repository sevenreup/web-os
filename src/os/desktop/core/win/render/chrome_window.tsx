import React from "react";
import Win from "../window";
import { useFindApp } from "../../os/hooks";

type Props = {
  data: ShortcutData;
};

const ChromeWindow = ({ data }: Props) => {
  console.log(data);

  const app = useFindApp(data);

  return (
    <Win title={data.title} img={data.icon}>
      {app == undefined ? <AppNotFound /> : app.render()}
    </Win>
  );
};

const AppNotFound = () => {
  return <div>404</div>;
};

export default ChromeWindow;
