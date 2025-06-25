import Dropdown from "../Dropdown.tsx";
import DropdownItem from "../DropdownItem.tsx";
import DropdownList from "../DropdownList.tsx";
import DropdownTrigger from "../DropdownTrigger.tsx";

const FromDropdown = () => {
  return (
    <Dropdown>
      <DropdownTrigger>Click me</DropdownTrigger>
      <DropdownList>
        <DropdownItem flag="🇺🇸" currency="USD" />
        <DropdownItem flag="🇪🇺" currency="EUR" />
        <DropdownItem flag="🇺🇿" currency="UZS" />
        <DropdownItem flag="🟠" currency="BTC" />
        <DropdownItem flag="🟢" currency="USDT" />
      </DropdownList>
    </Dropdown>
  );
};

export default FromDropdown;
