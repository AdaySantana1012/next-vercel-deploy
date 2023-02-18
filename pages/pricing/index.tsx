import { MainLayout } from "@/components/layouts/MainLayout";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React from "react";
import { ReactElement } from "react";
import { Inter } from "@next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function PricingPage() {
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
        <Link href="/" className={styles.card}>
          <h2 className={inter.className}>
            Index <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and&nbsp;API.
          </p>
        </Link>
      </div>
    </>
  );
}

PricingPage.getLayout = (page: ReactElement) => (
  <MainLayout title="Pricing Page">{page}</MainLayout>
);
