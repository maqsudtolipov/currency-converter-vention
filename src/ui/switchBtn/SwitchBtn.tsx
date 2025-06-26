import { RiArrowLeftRightFill } from "react-icons/ri";
import styles from "./SwitchBtn.module.scss";
import { useContext } from "react";
import { ConverterContext } from "../../feature/converter/ConverterContext.tsx";

const SwitchBtn = () => {
  const context = useContext(ConverterContext);
  if (!context)
    throw new Error("SwitchBtn must be used inside the ConverterContext");

  const { switchCurrency } = context;

  return (
    <div className={styles.switch} onClick={switchCurrency} role="button">
      <RiArrowLeftRightFill />
    </div>
  );
};

export default SwitchBtn;
