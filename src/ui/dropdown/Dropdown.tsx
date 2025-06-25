import { createContext, type ReactNode, useState } from "react";

interface Dropdown {
  isOpen: boolean;
}

export const DropdownContext = createContext<Dropdown | null>(null);

const Dropdown = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ isOpen }}>
      <div>{children}</div>
    </DropdownContext.Provider>
  );
};

export default Dropdown;
