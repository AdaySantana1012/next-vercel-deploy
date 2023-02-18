import React from "react";
import { ActiveLink, ActiveLinkProps } from "./layouts/ActiveLink";

const menuItems: ActiveLinkProps[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "about",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <nav>
      {menuItems.map(({ text, href }, index) => (
        <ActiveLink key={index} text={text} href={href} />
      ))}
    </nav>
  );
};
