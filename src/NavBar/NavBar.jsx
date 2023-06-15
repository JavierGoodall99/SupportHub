import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Link, Text, User, Dropdown } from "@nextui-org/react";
import Layout from "./Layout";
import AcmeLogo from "./AcmeLogo";
import '../Home'

export default function App() {
  const navigate = useNavigate();
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <div className="NavBar">
      <Layout>
        <Navbar
          isBordered
          variant="sticky"
          style={{
            boxShadow: "none",
          }}
        >
          <Navbar.Toggle showIn="xs" />
          <Navbar.Brand
            css={{
              "@xs": {
                w: "12%",
              },
            }}
          >
            <AcmeLogo />
            <Text b color="inherit" hideIn="xs" size={30}>
            <Link href="/"><a className="custom-link">DataBalk</a></Link>
            </Text>
          </Navbar.Brand>
          <Navbar.Content
            enableCursorHighlight
            activeColor="warning"
            hideIn="xs"
            variant="highlight"
          >
            {/* <Navbar.Link href="#">Features</Navbar.Link>
            <Navbar.Link href="#">Customers</Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Company</Navbar.Link> */}
          </Navbar.Content>
          <Navbar.Content
            css={{
              "@xs": {
                w: "12%",
                jc: "flex-end",
              },
            }}
          >
            <Dropdown placement="bottom-right">
              <Navbar.Item>
                <Dropdown.Trigger>
                  <User
                    bordered
                    pointer
                    as="button"
                    color="primary"
                    size="md"
                    name="Javier Goodall"
                    src="https://i.postimg.cc/7ZBQDZDk/Profile-Me.jpg"
                  />
                </Dropdown.Trigger>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="User menu actions"
                color="primary"
                onAction={(actionKey) => console.log({ actionKey })}
              >
                {/* <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                  </Text>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    javier@example.com
                  </Text>
                </Dropdown.Item> */}

                <Dropdown.Item>
                  <Link href="/Profile">My Profile</Link>
                </Dropdown.Item>

                {/*
                <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                <Dropdown.Item key="analytics" withDivider>
                  Analytics
                </Dropdown.Item>
                <Dropdown.Item key="system">System</Dropdown.Item>
                <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
                <Dropdown.Item key="help_and_feedback" withDivider>
                  Help & Feedback
                </Dropdown.Item> */}
                <Dropdown.Item key="logout" withDivider color="error">
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Content>
          <Navbar.Collapse disableAnimation>
            {collapseItems.map((item, index) => (
              <Navbar.CollapseItem
                key={item}
                activeColor="warning"
                css={{
                  color: index === collapseItems.length - 1 ? "$error" : "",
                }}
                isActive={index === 2}
              >
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href="#"
                >
                  {item}
                </Link>
              </Navbar.CollapseItem>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </Layout>
    </div>
  );
};

// export default App;
