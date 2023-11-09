import Link from "next/link";
import React from "react";

type TNavs = {
  link: string;
  name: string;
};

const navs: Array<TNavs> = [
  {
    link: "/about",
    name: "About Us",
  },
  {
    link: "/blog",
    name: "Blog",
  },
  {
    link: "/contacts",
    name: "Contacts",
  },
  {
    link: "/dashboard",
    name: "Dashboard",
  },
  {
    link: "/portfolio",
    name: "Portfolio",
  },
];

function Header() {
  return (
    <nav>
      <ul>
        {navs.map(({ link, name }) => {
          return (
            <li key={link}>
              <Link href={link}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Header;
