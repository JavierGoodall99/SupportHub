import React from "react";
import { Dropdown } from "@nextui-org/react";
// import '../App.css'

export default function PriorityDropdown() {
  const [selected, setSelected] = React.useState(new Set(["Priority"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button flat className="DropDownBar" color="primary" css={{ tt: "capitalize" }}>
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="primary"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Dropdown.Item key="Criticism">Criticism</Dropdown.Item>
        <Dropdown.Item key="High">High</Dropdown.Item>
        <Dropdown.Item key="Normal">Normal</Dropdown.Item>
        <Dropdown.Item key="Low">Low</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
