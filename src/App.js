import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Contact from "./pages/ContactForm";
import ForgotPassword from "./pages/ForgotPassword";
// import NavBarAdmin from "./admin/navbar";
import Products from "./admin/Products/products.jsx";
import Users from "./admin/Users/users.jsx";
import Sidebar from "./admin/sidebar";
import Dashboard from "./admin/Dashboard/dashboard";
import NewProduct from "./admin/Products/newProduct";
import NewUser from "./admin/Users/newUser.jsx";
import EditProduct from "./admin/Products/editProduct.jsx";
import EditUser from "./admin/Users/editUser.jsx";
import Orders from "./admin/Orders/orders.jsx";
import EditOrder from  "./admin/Orders/editOrder.jsx";
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();
  const isDashboardPage = location.pathname === "/dashboard";
  const isNewProduct = location.pathname ===  "/new-product";
  const isNewUser = location.pathname ===  "/new-user";
  const isProductsPage = location.pathname === "/products";
  const isOrdersPage = location.pathname === "/orders";
  const isEditOrder = location.pathname === "/edit-order/:id";

  const isUsersPage = location.pathname === "/users";
  const isEditProduct = location.pathname === "/edit-product/:id";
  const isEditUser = location.pathname === "/edit-user/:id";


  return (
    <Suspense fallback={<Loader />}>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {(isDashboardPage || isProductsPage || isNewProduct || isEditProduct || isUsersPage || isNewUser || isEditUser || isOrdersPage || isEditOrder) && <Sidebar />}
      {!isDashboardPage && !isProductsPage && !isNewProduct && !isEditProduct && !isNewUser && !isUsersPage && !isEditUser && !isOrdersPage && !isEditOrder && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/new-product" element={<NewProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/new-user" element={<NewUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/edit-order/:id" element={<EditOrder />} />
      </Routes>
      {!isDashboardPage && !isProductsPage && !isNewProduct && !isUsersPage && !isEditProduct && !isNewUser&& !isEditUser && !isOrdersPage && !isEditOrder && <Footer />}
    </Suspense>
  );
}

export default App;
