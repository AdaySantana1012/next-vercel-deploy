import Link from "next/link";
import React, { FC } from "react";

export interface ActiveLinkProps {
  text: string;
  href: string;
}

export const ActiveLink: FC<ActiveLinkProps> = ({ text, href }) => {
  return <Link href={href}>{text}</Link>;
};
