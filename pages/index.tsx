import { MainLayout } from "../components/layouts/MainLayout";
import { Inter } from "@next/font/google";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <Link href="/about" className={styles.card}>
          <h2 className={inter.className}>
            About <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and&nbsp;API.
          </p>
        </Link>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="Home Page">{page}</MainLayout>;
};
