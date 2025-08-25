import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const useMoodToggle = () => {
  const auth = useContext(DarkModeContext);
  return auth;
};

export default useMoodToggle;
