import Input from "../ui/Input.tsx";
import Dropdown from "../ui/Dropdown.tsx";
import SwitchBtn from "../ui/SwitchBtn.tsx";

const Converter = () => {
  return (
    <div>
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
