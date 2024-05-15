import { Triangle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavItem } from "@/lib/types";
import { mainNavItems, bottomNavItems } from "@/lib/nav";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const NavButton = ({ icon: Icon, label, path }: NavItem) => {
  return (
    <Link href={path}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg"
            aria-label={label}
          >
            <Icon className="size-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={5}>
          {label}
        </TooltipContent>
      </Tooltip>
    </Link>
  );
};

export default function Sidebar() {
  return (
    <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
      <div className="border-b p-2">
        <Link href="/">
          <Button variant="outline" size="icon" aria-label="Home">
            <Triangle className="size-5 fill-foreground" />
          </Button>
        </Link>
      </div>
      <nav className="grid gap-1 p-2">
        {mainNavItems.map((item) => (
          <NavButton key={item.label} {...item} />
        ))}
      </nav>
      <nav className="mt-auto grid gap-1 p-2">
        {bottomNavItems.map((item) => (
          <NavButton key={item.label} {...item} />
        ))}
      </nav>
    </aside>
  );
}
