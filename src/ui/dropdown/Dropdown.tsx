import { createContext, type ReactNode, useState } from "react";

interface Dropdown {
  isOpen: boolean;
  toggleDropdown: () => void;
  openDropdown: () => void;
  closeDropdown: () => void;
}

export const DropdownContext = createContext<Dropdown | null>(null);

const Dropdown = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };
  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);

  return (
    <DropdownContext.Provider
      value={{ isOpen, toggleDropdown, openDropdown, closeDropdown }}
    >
      <div>{children}</div>
    </DropdownContext.Provider>
  );
};

export default Dropdown;
