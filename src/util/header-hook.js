import { useState } from "react";

export const useHeader = () => {
  const [burger, setBurger] = useState(false);
  const [modal, setModal] = useState(false);

  const headerHandler = () => {
    setBurger(!burger);
    setModal(!modal);

    !modal
      ? document.body.setAttribute("class", "remove-scroll")
      : document.body.removeAttribute("class");
  };

  const linkHandler = () => {
    setBurger(false);
    setModal(false);

    document.body.removeAttribute("class");
  };

  return { burger, modal, headerHandler, linkHandler };
};
