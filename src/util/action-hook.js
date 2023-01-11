import { useState, useEffect } from "react";
import axios from "axios";

export const useAction = () => {
  const [action, setAction] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchAction = async () => {
    const res = await axios(
      "https://vetmedika-api.herokuapp.com/api/action/get/active"
    );
    setAction(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchAction();
  }, []);

  return { action, loading };
};
