import Dropdown from "../Dropdown.tsx";
import DropdownItem from "../DropdownItem.tsx";
import DropdownList from "../DropdownList.tsx";
import DropdownTrigger from "../DropdownTrigger.tsx";
import DropdownSelected from "../DropdownSelected.tsx";
import styles from "./Dropdown.module.scss";
import { RiArrowDownSLine } from "react-icons/ri";
import dropdownCurrencies from "../../../data/dropdownCurrencies.ts";
import { useConverterContext } from "../../../feature/converter/hooks/useConverterContext.ts";

const DropdownFrom = () => {
  const context = useConverterContext();

  const { setFromCurrency, fromCurrency } = context;
  const something = dropdownCurrencies.find(
    (item) => item.code === fromCurrency,
  );

  return (
    <Dropdown externalItem={something}>
      <DropdownTrigger className={styles.container}>
        <div className={`${styles.customTrigger} ${styles.customTriggerFrom}`}>
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
        {dropdownCurrencies.map((item) => (
          <DropdownItem
            key={item.code}
            keyId={item.code}
            flag={item.flag}
            currency={item.name}
            onSelect={setFromCurrency}
          />
        ))}
      </DropdownList>
    </Dropdown>
  );
};

export default DropdownFrom;
