import styles from "../Converter.module.scss";
import ConverterInput from "../../../ui/input/instances/ConverterInput.tsx";
import FromDropdown from "../../../ui/dropdown/instances/FromDropdown.tsx";
import ConverterSwitchBtn from "../../../ui/switchBtn/instances/ConverterSwitchBtn.tsx";
import ToDropdown from "../../../ui/dropdown/instances/ToDropdown.tsx";

const InputFields = () => {
  return (
    <div className={styles.inputField}>
      <ConverterInput />
      <div className={styles.dropdownsContainer}>
        <FromDropdown />
        <ConverterSwitchBtn />
        <ToDropdown />
      </div>
    </div>
  );
};

export default InputFields;
