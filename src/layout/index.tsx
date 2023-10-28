import { LayoutProps } from "@/utils/type-pagecomponent";
import React from "react";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
