import Dropdown from "../Dropdown.tsx";
import DropdownItem from "../DropdownItem.tsx";
import DropdownList from "../DropdownList.tsx";
import DropdownTrigger from "../DropdownTrigger.tsx";

const FromDropdown = () => {
  return (
    <Dropdown>
      <DropdownTrigger>Click me</DropdownTrigger>
      <DropdownList>
        <DropdownItem flag="🇺🇸" currency="USD US Dollar" />
        <DropdownItem flag="🇪🇺" currency="EUR Euro" />
        <DropdownItem flag="🇺🇿" currency="UZS Uzbekistan Som" />
        <DropdownItem flag="🟠" currency="BTC Bitcoin" />
        <DropdownItem flag="🟢" currency="USDT US Tather" />
      </DropdownList>
    </Dropdown>
  );
};

export default FromDropdown;
