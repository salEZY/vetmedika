import { useState, useEffect } from "react";
import axios from "axios";

export const useAction = () => {
  const [action, setAction] = useState({});

  const fetchAction = async () => {
    const res = await axios(
      "https://vetmedika-api.herokuapp.com/api/action/get/active"
    );
    setAction(res.data);
  };

  useEffect(() => {
    fetchAction();
  }, []);

  return { action };
};
