import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.content}>
      <div className={styles.textWrapper}>
        <h1 className={styles.heading}>Exploring the Power of Next.js</h1>
        <p className={styles.subtitle}>
          Unlock the Potential of Next.js: A Comprehensive Platform Tailored for
          Seamless Learning and Mastery. Dive into Next.js with Confidence,
          Supported by In-Depth Resources and Interactive Tutorials
        </p>
        <Button link="/portfolio" bordered>
          See our Works
        </Button>
      </div>
      <Image
        className={styles.image}
        src="/bg1.png"
        alt="background home page"
        width={400}
        height={400}
      />
    </div>
  );
}
