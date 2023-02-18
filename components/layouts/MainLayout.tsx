import React, { FC, ReactNode } from "react";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { Navbar } from "../Navbar.component";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface MainLayoutProps {
  title?: string;
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="About" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={inter.className}>{title}</h1>
        {children}
      </main>
    </>
  );
};
