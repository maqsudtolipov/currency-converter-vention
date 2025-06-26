import Dropdown from "../Dropdown.tsx";
import DropdownItem from "../DropdownItem.tsx";
import DropdownList from "../DropdownList.tsx";
import DropdownTrigger from "../DropdownTrigger.tsx";
import DropdownSelected from "../DropdownSelected.tsx";
import styles from "./Dropdown.module.scss";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";

const currencies = [
  {
    code: "USD",
    flag: "🇺🇸",
    name: "USD US Dollar",
  },
  {
    code: "UZS",
    flag: "🇺🇿",
    name: "UZS Uzbekistan Som",
  },
  {
    code: "EUR",
    flag: "🇪🇺",
    name: "EUR Euro",
  },
];

const ToDropdown = () => {
  const [toCurrency, setToCurrency] = useState<string | null>(null);
  console.log("toCurrency", toCurrency);

  return (
    <Dropdown>
      <DropdownTrigger className={styles.container}>
        <div className={`${styles.customTrigger} ${styles.customTriggerTo}`}>
          <div>
            <p className={styles.customTriggerLabel}>To</p>
            <DropdownSelected className={styles.customTriggerText} />
          </div>
          <div>
            <RiArrowDownSLine className={styles.icon} />
          </div>
        </div>
      </DropdownTrigger>

      <DropdownList>
        {currencies.map((item) => (
          <DropdownItem
            key={item.code}
            keyId={item.code}
            flag={item.flag}
            currency={item.name}
            onSelect={setToCurrency}
          />
        ))}
      </DropdownList>
    </Dropdown>
  );
};

export default ToDropdown;
