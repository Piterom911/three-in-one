import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

type TProps = {
  children: React.ReactNode;
  creator: string;
  addInfo: string;
};

function Footer({ children, creator, addInfo }: TProps) {
  return (
    <footer className={`container ${styles.footer}`}>
      <h6>
        {children}
        <p>{creator}</p>
        <span>{addInfo}</span>
      </h6>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link href="/">
            <Image
              className={styles.icon}
              src="/inst.png"
              alt="Our Instagram"
              width={15}
              height={15}
            />
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/">
            <Image
              className={styles.icon}
              src="/twitter.png"
              alt="Our Twitter"
              width={15}
              height={15}
            />
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/">
            <Image
              className={styles.icon}
              src="/vk.png"
              alt="Our VK"
              width={15}
              height={15}
            />
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/">
            <Image
              className={styles.icon}
              src="/yt.png"
              alt="Our YouTube"
              width={15}
              height={15}
            />
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
