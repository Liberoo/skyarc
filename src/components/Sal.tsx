import { useEffect } from "react";
import sal from "sal.js";
import "sal.js/dist/sal.css";

export const Sal = () => {
  useEffect(() => {
    sal({
      threshold: 0.1,

    });
  }, []);

  return null;
};