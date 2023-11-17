import Link from "next/link";
import React from "react";
import styles from "./header.module.css";

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
    <header className={`${styles.header}`}>
      <nav className={`container ${styles.nav}`}>
        <Link className={`${styles.logo}`} href="/">
          <svg
            className={styles.logoIcon}
            aria-label="Vercel logomark"
            height="22"
            role="img"
            contentStyleType="width:auto;overflow:visible"
            // style="width:auto;overflow:visible"
            viewBox="0 0 74 64"
          >
            <path
              d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
              fill="#ffffff"
            ></path>
          </svg>
          <span>MyApp</span>
        </Link>
        <ul className={styles.navigationList}>
          {navs.map(({ link, name }) => {
            return (
              <li key={link}>
                <Link href={link}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
