import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb } from "@fortawesome/free-solid-svg-icons";

const ColorsMap = {
  0: <FontAwesomeIcon icon={faBomb} style={{ color: "deepskyblue", fontSize: "40px" }} />,
  1: <FontAwesomeIcon icon={faBomb} style={{ color: "green", fontSize: "40px" }} />,
  2: <FontAwesomeIcon icon={faBomb} style={{ color: "yellow", fontSize: "40px" }} />,
  3: <FontAwesomeIcon icon={faBomb} style={{ color: "red", fontSize: "40px" }} />,
  4: <FontAwesomeIcon icon={faBomb} style={{ color: "black", fontSize: "40px" }} />,
  5: <FontAwesomeIcon icon={faBomb} style={{ color: "orange", fontSize: "40px" }} />,
  6: <FontAwesomeIcon icon={faBomb} style={{ color: "purple", fontSize: "40px" }} />,
  7: <FontAwesomeIcon icon={faBomb} style={{ color: "brown", fontSize: "40px" }} />,
};

export default ColorsMap;