import { DropdownContext } from "./Dropdown.tsx";
import { useContext } from "react";
import styles from "./DropdownItem.module.scss";

interface DropdownItemProps {
  keyId: string;
  flag: string;
  currency: string;
}

const DropdownItem = ({ keyId, flag, currency }: DropdownItemProps) => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("DropdownList must be used within the Dropdown");
  }
  const { highlightedItem, highlightItem, closeDropdown } = context;

  const handleHighlight = () => {
    highlightItem(keyId, flag, currency);
    closeDropdown();
  };

  const style = `${styles.item} ${highlightedItem?.code === keyId ? styles.itemHighlighted : ""}`;

  return (
    <li className={style} onClick={handleHighlight}>
      {flag} - {currency}
    </li>
  );
};

export default DropdownItem;
