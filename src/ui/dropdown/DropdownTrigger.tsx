import { type ReactNode, useContext } from "react";
import { DropdownContext } from "./Dropdown.tsx";

const DropdownTrigger = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("DropdownTrigger must be used within the Dropdown");
  }

  return (
    <div
      className={`relative ${className}`}
      onClick={(event) => {
        event.stopPropagation();
        context.toggleDropdown();
      }}
    >
      {children}
    </div>
  );
};

export default DropdownTrigger;
