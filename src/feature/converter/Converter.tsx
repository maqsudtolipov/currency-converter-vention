import styles from "./Converter.module.scss";
import Display from "./components/Display.tsx";
import InputFields from "./components/InputFields.tsx";

const Converter = () => {
  return (
    <div className={styles.converter}>
      <InputFields />
      <Display />
    </div>
  );
};

export default Converter;
