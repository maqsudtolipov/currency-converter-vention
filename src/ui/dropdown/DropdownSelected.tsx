import { useContext } from "react";
import { DropdownContext } from "./Dropdown.tsx";

const DropdownSelected = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("DropdownSelected must be used within the Dropdown");
  }

  const { highlightedItem } = context;

  return <div>{highlightedItem}</div>;
};

export default DropdownSelected;
