import { createContext } from "react";

export const AppContext = createContext({
  loading: true,
  action: {},
  burger: false,
  modal: false,
  width: undefined,
  headerHandler: () => {},
  linkHandler: () => {},
});
