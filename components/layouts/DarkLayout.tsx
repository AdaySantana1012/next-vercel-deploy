import React, { ReactNode, FC } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export const DarkLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgb(98 31 31 / 30%)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark-layout</h3>
      <div>{children}</div>
    </div>
  );
};
