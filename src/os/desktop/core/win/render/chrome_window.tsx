import React from "react";
import Win from "../window";

type Props = {
  data: WindowData;
};

const ChromeWindow = ({ data }: Props) => {
  return (
    <Win title={data.title} img={data.icon}>
      ChromeWindow
    </Win>
  );
};

export default ChromeWindow;
