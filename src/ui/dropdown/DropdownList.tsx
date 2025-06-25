import { type ReactNode, useContext } from "react";
import styles from "./DropdownList.module.scss";
import { DropdownContext } from "./Dropdown.tsx";

const DropdownList = ({ children }: { children: ReactNode }) => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("DropdownList must be used within the Dropdown");
  }

  const { isOpen } = context;
  const style = `${styles.list} ${isOpen ? "" : styles.listHidden}`;

  return <ul className={style}>{children}</ul>;
};

export default DropdownList;
