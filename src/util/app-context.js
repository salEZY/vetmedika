import { createContext } from "react";

export const AppContext = createContext({
  loading: true,
  action: {},
  burger: false,
  barTop: "bars",
  barBottom: "bars",
  burgerDiv: "",
  modal: false,
  width: undefined,
  headerHandler: () => {},
  linkHandler: () => {},
});
