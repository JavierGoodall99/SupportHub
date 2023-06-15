import React from "react";
import { Dropdown } from "@nextui-org/react";

export default function TypeDropdown() {
  const [selected, setSelected] = React.useState(new Set(["Type"]));

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
        <Dropdown.Item key="Classify">Classify</Dropdown.Item>
        <Dropdown.Item key="Incident">Incident</Dropdown.Item>
        <Dropdown.Item key="Request">Request</Dropdown.Item>
        <Dropdown.Item key="Bug">Bug</Dropdown.Item>
        <Dropdown.Item key="Wish">Wish</Dropdown.Item>
        <Dropdown.Item key="Managment">Managment</Dropdown.Item>
        <Dropdown.Item key="Project">Project</Dropdown.Item>
        <Dropdown.Item key="Quotation">Quotation</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
