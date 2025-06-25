import Input from "../../ui/input/Input.tsx";
import styles from "./Converter.module.scss";
import FromDropdown from "../../ui/dropdown/instances/FromDropdown.tsx";
import ToDropdown from "../../ui/dropdown/instances/ToDropdown.tsx";
import SwitchBtn from "../../ui/switchBtn/SwitchBtn.tsx";
import Display from "./components/Display.tsx";

const Converter = () => {
  return (
    <div className={styles.converter}>
      <div className={styles.inputField}>
        <Input />
        <FromDropdown />
        <SwitchBtn />
        <ToDropdown />
      </div>
      <Display />
    </div>
  );
};

export default Converter;
