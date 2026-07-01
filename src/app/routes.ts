import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import WishlistPage from "../pages/WishlistPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import OrderSuccessPage from "../pages/OrderSuccessPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import TrackOrderPage from "../pages/TrackOrderPage";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import BlogDetailPage from "../pages/BlogDetailPage";
import FAQPage from "../pages/FAQPage";
import ContactPage from "../pages/ContactPage";
import SearchPage from "../pages/SearchPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "shop", Component: ShopPage },
      { path: "product/:id", Component: ProductDetailPage },
      { path: "wishlist", Component: WishlistPage },
      { path: "cart", Component: CartPage },
      { path: "checkout", Component: CheckoutPage },
      { path: "order-success", Component: OrderSuccessPage },
      { path: "login", Component: LoginPage },
      { path: "register", Component: RegisterPage },
      { path: "dashboard", Component: DashboardPage },
      { path: "track-order", Component: TrackOrderPage },
      { path: "about", Component: AboutPage },
      { path: "blog", Component: BlogPage },
      { path: "blog/:id", Component: BlogDetailPage },
      { path: "faq", Component: FAQPage },
      { path: "contact", Component: ContactPage },
      { path: "search", Component: SearchPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
