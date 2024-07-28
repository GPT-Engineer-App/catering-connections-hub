import { Home, Menu, ShoppingCart, User } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Menu",
    to: "/menu",
    icon: <Menu className="h-4 w-4" />,
    page: <div>Menu Page</div>, // Placeholder for Menu page
  },
  {
    title: "Orders",
    to: "/orders",
    icon: <ShoppingCart className="h-4 w-4" />,
    page: <div>Orders Page</div>, // Placeholder for Orders page
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <User className="h-4 w-4" />,
    page: <div>Profile Page</div>, // Placeholder for Profile page
  },
];