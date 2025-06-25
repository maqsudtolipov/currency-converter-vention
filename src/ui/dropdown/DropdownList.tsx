import type { ReactNode } from "react";
import styles from "./DropdownList.module.scss";

const DropdownList = ({ children }: { children: ReactNode }) => {
  return <ul className={styles.list}>{children}</ul>;
};

export default DropdownList;
