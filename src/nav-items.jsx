import { Cat } from "lucide-react";
import Index from "./pages/Index.jsx";

export const navItems = [
  {
    title: "Cat Page",
    to: "/",
    icon: <Cat className="h-4 w-4" />,
    page: <Index />,
  },
];