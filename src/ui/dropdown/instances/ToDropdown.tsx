import Dropdown from "../Dropdown.tsx";
import DropdownItem from "../DropdownItem.tsx";
import DropdownList from "../DropdownList.tsx";
import DropdownTrigger from "../DropdownTrigger.tsx";
import DropdownSelected from "../DropdownSelected.tsx";
import styles from "./Dropdown.module.scss";

const ToDropdown = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <div className={styles.customTrigger}>
          <p className={styles.customTriggerLabel}>From</p>
          <DropdownSelected className={styles.customTriggerText} />
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
