import { useState, useEffect } from "react";
import axios from "axios";

export const useAction = () => {
  const [action, setAction] = useState({});

  const fetchAction = async () => {
    const res = await axios("http://localhost:6060/api/action/get/active");
    setAction(res.data);
  };

  useEffect(() => {
    fetchAction();
  }, []);

  return { action };
};
