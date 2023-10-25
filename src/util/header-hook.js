import { useState } from "react";

export const useHeader = () => {
  const [burger, setBurger] = useState(false);
  const [modal, setModal] = useState(false);
  const [barTop, setBarTop] = useState("bars");
  const [barBottom, setBarBottom] = useState("bars");
  const [burgerDiv, setBurgerDiv] = useState("");

  const headerHandler = () => {
    setBurger(!burger);
    setModal(!modal);

    if (!modal) {
      setBurgerDiv("burger-div-border");
      setBarTop("bars animate-top");
      setBarBottom("bars animate-bottom");
      document.body.setAttribute("class", "remove-scroll");
    } else {
      setBurgerDiv("");
      setBarTop("bars");
      setBarBottom("bars");
      document.body.removeAttribute("class");
    }
  };

  const linkHandler = () => {
    setBurger(false);
    setModal(false);
    setBurgerDiv("");
    setBarTop("bars");
    setBarBottom("bars");

    document.body.removeAttribute("class");
  };

  return {
    burger,
    modal,
    barTop,
    burgerDiv,
    barBottom,
    headerHandler,
    linkHandler,
  };
};
