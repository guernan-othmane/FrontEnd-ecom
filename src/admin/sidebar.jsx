import React, { useState } from "react";
import {
  ShopOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  OrderedListOutlined,
  TagsOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

import { Layout, Menu, Button, theme } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items = [
    {
      key: "1",
      icon: <ShopOutlined />,
      label: "Products",
      to: "/products",
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: "Users",
      to: "/users",
    },
    {
      key: "3",
      icon: <OrderedListOutlined />,
      label: "Orders",
      to: "/orders",
    },
    {
      key: "4",
      icon: <TagsOutlined />,
      label: "Categories",
      to: "/categories",
    },
  ];

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: "100vh", position: "fixed" }}
      >
        <div className="demo-logo-vertical" />

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          selectedKeys={["1"]} // Ajout de cette ligne pour indiquer l'élément actif dans le menu
        >
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.to}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: "200px" }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
      </Layout>
    </Layout>
  );
};

export default Sidebar;
