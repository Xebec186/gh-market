import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PageNotFound from "./components/PageNotFound";
import RegistrationPage from "./pages/RegistrationPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
import CheckoutPage from "./pages/CheckoutPage";
import SellerDashboard from "./pages/SellerDashboard";
import ProfileTab from "./components/ProfileTab";
import OrdersTab from "./components/OrdersTab";
import CartTab from "./components/CartTab";
import WishlistTab from "./components/WishlistTab";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:category" element={<ProductsPage />} />
        <Route
          path="/products/:category/:productId"
          element={<ProductPage />}
        />
        <Route path="/profile" element={<ProfileTab />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/orders" element={<OrdersTab />} />
        <Route path="/cart" element={<CartTab />} />
        <Route path="/wishlist" element={<WishlistTab />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
