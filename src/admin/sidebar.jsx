import React from "react";
import { Link } from "react-router-dom";
import {
  TagsOutlined,
  UserOutlined,
  ShopOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;
// const items = [
//   {
//     key: "2",
//     icon: <ShopOutlined />,
//      // Libellé pour "products"
//   },
//   {
//     key: "3",
//     icon: <UserOutlined />,
//     label: "users", // Libellé pour "users"
//   },
//   {
//     key: "4",
//     icon: <TagsOutlined />,
//     label: "categories", // Libellé pour "categories"
//   },
//   {
//     key: "5",
//     icon: <OrderedListOutlined />,
//     label: "orders", // Libellé pour "orders"
//   },
// ];
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{
          maxHeight: "100vh",
          minHeight: "100vh", // Hauteur minimale de la barre latérale à 100% de la hauteur de la vue
          position: "fixed", // Position fixe pour rester en place lors du défilement
          left: 0, // Alignement à gauche de la page
        }}
      >
        <div className="demo-logo-vertical" />
        <div className="demo-logo-vertical" />
        <Menu
          style={{
            marginTop: "5rem",
          }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1" icon={<ShopOutlined />}>
            <Link
              to="/products"
              style={{
                textDecoration: "none",
              }}
            >
              Products
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link
              to="/users"
              style={{
                textDecoration: "none",
              }}
            >
              Users
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<TagsOutlined />}>
            <Link
              to="/categories"
              style={{
                textDecoration: "none",
              }}
            >
              {" "}
              Categories{" "}
            </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<OrderedListOutlined />}>
            <Link
              to="/orders"
              style={{
                textDecoration: "none",
              }}
            >
              Orders
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            marginTop: 64, // Ajoute une marge en haut égale à la hauteur de la barre de navigation
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          ></div>
        </Content>
        {/* <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};
export default App;
