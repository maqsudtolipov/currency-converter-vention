import Input from "../ui/input/Input.tsx";
import styles from "./Converter.module.scss";
import FromDropdown from "../ui/dropdown/instances/FromDropdown.tsx";
import ToDropdown from "../ui/dropdown/instances/ToDropdown.tsx";

const Converter = () => {
  return (
    <div className={styles.converter}>
      <div className={styles.display}>
        <Input />
        <FromDropdown />
        <ToDropdown />

        {/*<SwitchBtn />*/}
        {/*<Dropdown />*/}
      </div>
      <div>Display</div>
    </div>
  );
};

export default Converter;
