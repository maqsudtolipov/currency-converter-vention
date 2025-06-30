import styles from "../Converter.module.scss";
import ConverterInput from "../../../ui/input/instances/ConverterInput.tsx";
import ConverterSwitchBtn from "../../../ui/switchBtn/instances/ConverterSwitchBtn.tsx";
import DropdownFrom from "../../../ui/dropdown/instances/DropdownFrom.tsx";
import DropdownTo from "../../../ui/dropdown/instances/DropdownTo.tsx";

const InputFields = () => {
  return (
    <div className={styles.inputField}>
      <ConverterInput />
      <div className={styles.dropdownsContainer}>
        <DropdownFrom />
        <ConverterSwitchBtn />
        <DropdownTo />
      </div>
    </div>
  );
};

export default InputFields;
