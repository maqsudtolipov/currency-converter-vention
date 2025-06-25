import { createContext, type ReactNode, useState } from "react";

interface Dropdown {
  isOpen: boolean;
  highlightedItem: string | number | undefined;
  toggleDropdown: () => void;
  openDropdown: () => void;
  closeDropdown: () => void;
  highlightItem: (key: string | number) => void;
}

export const DropdownContext = createContext<Dropdown | null>(null);

const Dropdown = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedItem, setHighlightedItem] = useState<
    number | string | undefined
  >(undefined);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);

  const highlightItem = (key: string | number) => {
    setHighlightedItem(key);
  };

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        highlightedItem,
        toggleDropdown,
        openDropdown,
        closeDropdown,
        highlightItem,
      }}
    >
      <div>{children}</div>
    </DropdownContext.Provider>
  );
};

export default Dropdown;
