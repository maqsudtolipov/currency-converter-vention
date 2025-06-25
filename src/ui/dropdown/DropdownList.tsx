import { type ReactNode, useContext } from "react";
import styles from "./DropdownList.module.scss";
import { DropdownContext } from "./Dropdown.tsx";
import useOutsideClick from "../../hooks/useOutsideClick.ts";

const DropdownList = ({ children }: { children: ReactNode }) => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("DropdownList must be used within the Dropdown");
  }

  const { isOpen, closeDropdown } = context;
  const ref = useOutsideClick<HTMLUListElement>(closeDropdown);

  const style = `${styles.list} ${isOpen ? "" : styles.listHidden}`;

  return (
    <ul ref={ref} className={style}>
      {children}
    </ul>
  );
};

export default DropdownList;
