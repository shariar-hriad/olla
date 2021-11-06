import React from "react";
import Header from "../components/Header";

function Layout({ chidlren }) {
  return (
    <>
      <Header />
      <main>{chidlren}</main>
    </>
  );
}

export default Layout;
