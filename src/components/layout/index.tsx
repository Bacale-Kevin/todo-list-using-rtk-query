import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type SidebarLayoutProps = {
  children?: React.ReactNode;
};

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <Header />
      <Sidebar />

      <div className="col-span-10 bg-gray-100">{children}</div>
    </div>
  );
};

export default SidebarLayout;
