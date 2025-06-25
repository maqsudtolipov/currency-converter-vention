import { RiArrowLeftRightFill } from "react-icons/ri";
import styles from "./SwitchBtn.module.scss";

const SwitchBtn = () => {
  return (
    <div role="button" className={styles.switch}>
      <RiArrowLeftRightFill />
    </div>
  );
};

export default SwitchBtn;
