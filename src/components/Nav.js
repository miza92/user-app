import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";

const Nav = () => {
  return (
    <div>
      <Menu stackable fixed={"top"} inverted>
      <Menu.Item>
          <img src={"icons8-user-64.png"} alt={"logo"}/>
        </Menu.Item>
        <Menu.Item name={"home"} />
        <Menu.Item name={"messages"} />
        <Menu.Menu position={"right"}>
          <Dropdown item text={"Filter"}>
            <Dropdown.Menu>
              <Dropdown.Item>Electronics</Dropdown.Item>
              <Dropdown.Item>Automotive</Dropdown.Item>
              <Dropdown.Item>Home</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Nav;
