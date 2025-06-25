import { useContext } from "react";
import { DropdownContext } from "./Dropdown.tsx";

const DropdownSelected = ({ className }: { className?: string }) => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("DropdownSelected must be used within the Dropdown");
  }

  const { highlightedItem } = context;

  return highlightedItem ? (
    <div className={className}>
      {highlightedItem.flag} {highlightedItem.name}
    </div>
  ) : null;
};

export default DropdownSelected;
