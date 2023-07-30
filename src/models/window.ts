interface WindowData {
  title: string;
  icon?: string;
}

export type WinPayloadEqualFunction = (
  payloadA: WindowData,
  payloadB: WindowData
) => boolean;

export type WinOptions = {
  equals?: WinPayloadEqualFunction;
};
