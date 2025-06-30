import SwitchBtn from "../SwitchBtn.tsx";
import { useConverterContext } from "../../../feature/converter/hooks/useConverterContext.ts";

const ConverterSwitchBtn = () => {
  const context = useConverterContext();

  const { switchCurrency } = context;

  return <SwitchBtn onSwitch={switchCurrency} />;
};

export default ConverterSwitchBtn;
