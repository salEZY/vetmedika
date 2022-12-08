import { createContext } from "react";

export const AppContext = createContext({
  action: {},
  burger: false,
  modal: false,
  headerHandler: () => {},
  linkHandler: () => {},
});
