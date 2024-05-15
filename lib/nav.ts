import { Book, Bot, Code2, LifeBuoy, Settings2, SquareTerminal, SquareUser } from "lucide-react";
import { NavItem } from "./types";

export const mainNavItems: NavItem[] = [
    { icon: SquareTerminal, label: "Playground", path: "/" },
    { icon: Bot, label: "Models", path: "/models" },
    { icon: Code2, label: "API", path: "/api" },
    { icon: Book, label: "Documentation", path: "/docs" },
    { icon: Settings2, label: "Settings", path: "/settings" },
  ];
  
  export const bottomNavItems: NavItem[] = [
    { icon: LifeBuoy, label: "Help", path: "/help" },
    { icon: SquareUser, label: "Account", path: "/account" },
  ];