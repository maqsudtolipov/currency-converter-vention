import { createContext, type ReactNode, useState } from "react";

interface HighlightedItem {
  code: string;
  flag: string;
  name: string;
}

interface Dropdown {
  isOpen: boolean;
  highlightedItem: HighlightedItem | undefined;
  toggleDropdown: () => void;
  openDropdown: () => void;
  closeDropdown: () => void;
  highlightItem: (code: string, flag: string, name: string) => void;
}

export const DropdownContext = createContext<Dropdown | null>(null);

const Dropdown = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedItem, setHighlightedItem] = useState<
    HighlightedItem | undefined
  >(undefined);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);

  const highlightItem = (code: string, flag: string, name: string) => {
    setHighlightedItem({ code, flag, name });
    console.log(highlightedItem);
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
