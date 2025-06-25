import Dropdown from "../Dropdown.tsx";
import DropdownItem from "../DropdownItem.tsx";
import DropdownList from "../DropdownList.tsx";
import DropdownTrigger from "../DropdownTrigger.tsx";
import DropdownSelected from "../DropdownSelected.tsx";
import styles from "./Dropdown.module.scss";
import { RiArrowDownSLine } from "react-icons/ri";

const ToDropdown = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <div className={`${styles.customTrigger} ${styles.customTriggerTo}`}>
          <div>
            <p className={styles.customTriggerLabel}>From</p>
            <DropdownSelected className={styles.customTriggerText} />
          </div>
          <div>
            <RiArrowDownSLine className={styles.icon} />
          </div>
        </div>
      </DropdownTrigger>

      <DropdownList>
        <DropdownItem keyId="USD" flag="🇺🇸" currency="USD US Dollar" />
        <DropdownItem keyId="EUR" flag="🇪🇺" currency="EUR Euro" />
        <DropdownItem keyId="UZS" flag="🇺🇿" currency="UZS Uzbekistan Som" />
        <DropdownItem keyId="BTC" flag="🟠" currency="BTC Bitcoin" />
        <DropdownItem keyId="USDT" flag="🟢" currency="USDT US Tather" />
      </DropdownList>
    </Dropdown>
  );
};

export default ToDropdown;
