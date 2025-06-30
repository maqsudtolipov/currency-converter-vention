import { RiArrowLeftRightFill } from "react-icons/ri";
import styles from "./SwitchBtn.module.scss";

interface SwitchBtnProps {
  onSwitch: () => void;
}

const SwitchBtn = ({ onSwitch }: SwitchBtnProps) => {
  return (
    <button className={styles.switch} onClick={onSwitch}>
      <RiArrowLeftRightFill />
    </button>
  );
};

export default SwitchBtn;
