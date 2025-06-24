import Input from "../ui/Input.tsx";
import Dropdown from "../ui/Dropdown.tsx";
import SwitchBtn from "../ui/SwitchBtn.tsx";
import styles from "./Converter.module.scss";

const Converter = () => {
  return (
    <div className={styles.converter}>
      <div>
        <Input />
        <Dropdown />
        <SwitchBtn />
        <Dropdown />
      </div>
      <div>Display</div>
    </div>
  );
};

export default Converter;
