import { useContext } from "react";
import { ConverterContext } from "../../../feature/converter/ConverterContext.tsx";
import SwitchBtn from "../SwitchBtn.tsx";

const ConverterSwitchBtn = () => {
  const context = useContext(ConverterContext);
  if (!context)
    throw new Error(
      "ConverterSwitchBtn must be used inside the ConverterContext",
    );

  const { switchCurrency } = context;

  return <SwitchBtn onSwitch={switchCurrency} />;
};

export default ConverterSwitchBtn;
