import { useEffect } from "react";
import sal from "sal.js";
import "sal.js/dist/sal.css";

export const Sal = () => {
  useEffect(() => {
    sal({
      threshold: 0.2,
      root: null, 
    });
  }, []);

  return null;
};