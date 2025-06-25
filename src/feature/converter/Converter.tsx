import Input from "../../ui/input/Input.tsx";
import styles from "./Converter.module.scss";
import FromDropdown from "../../ui/dropdown/instances/FromDropdown.tsx";
import ToDropdown from "../../ui/dropdown/instances/ToDropdown.tsx";
import SwitchBtn from "../../ui/switchBtn/SwitchBtn.tsx";
import Display from "./components/Display.tsx";
import ConverterContextProvider from "./ConverterContext.tsx";

const Converter = () => {
  return (
    <ConverterContextProvider>
      <div className={styles.converter}>
        <div className={styles.inputField}>
          <Input />
          <FromDropdown />
          <SwitchBtn />
          <ToDropdown />
        </div>
        <Display />
      </div>
    </ConverterContextProvider>
  );
};

export default Converter;
