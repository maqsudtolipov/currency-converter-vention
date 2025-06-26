import { RiArrowLeftRightFill } from "react-icons/ri";
import styles from "./SwitchBtn.module.scss";

interface SwitchBtnProps {
  onSwitch: () => void;
}

const SwitchBtn = ({ onSwitch }: SwitchBtnProps) => {
  return (
    <div className={styles.switch} onClick={onSwitch} role="button">
      <RiArrowLeftRightFill />
    </div>
  );
};

export default SwitchBtn;
