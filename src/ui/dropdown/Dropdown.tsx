import { createContext, type ReactNode, useEffect, useState } from "react";
import styles from "./Dropdown.module.scss";

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

const Dropdown = ({
  externalItem,
  className,
  children,
}: {
  externalItem?: HighlightedItem | undefined;
  className?: string;
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedItem, setHighlightedItem] = useState<
    HighlightedItem | undefined
  >(undefined);

  useEffect(() => {
    setHighlightedItem(externalItem);
  }, [externalItem]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);

  const highlightItem = (code: string, flag: string, name: string) => {
    setHighlightedItem({ code, flag, name });
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
      <div className={`${className} ${styles.dropdown}`}>{children}</div>
    </DropdownContext.Provider>
  );
};

export default Dropdown;
