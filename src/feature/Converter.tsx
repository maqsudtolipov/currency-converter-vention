import Input from "../ui/Input.tsx";
import SwitchBtn from "../ui/SwitchBtn.tsx";
import styles from "./Converter.module.scss";
import FromDropdown from "../ui/dropdown/instances/FromDropdown.tsx";

const Converter = () => {
  return (
    <div className={styles.converter}>
      <div>
        <Input />
        <FromDropdown />

        <SwitchBtn />
        {/*<Dropdown />*/}
      </div>
      <div>Display</div>
    </div>
  );
};

export default Converter;
