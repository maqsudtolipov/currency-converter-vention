import { DropdownContext } from "./Dropdown.tsx";
import { useContext } from "react";
import styles from "./DropdownItem.module.scss";

interface DropdownItemProps {
  flag: string;
  currency: string;
}

const DropdownItem = ({ flag, currency }: DropdownItemProps) => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("DropdownList must be used within the Dropdown");
  }

  return (
    <li className={styles.item}>
      {flag} - {currency}
    </li>
  );
};

export default DropdownItem;
