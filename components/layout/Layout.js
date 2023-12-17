import { useEffect } from "react";
import BackToTop from "../elements/BackToTop";
import DataBg from "../elements/DataBg";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import Header from "./Header";
import PageHead from "./PageHead";
import { layout } from "./items";

export default function Layout({
  headerCls,
  headerTop,
  headTitle,
  breadcrumbTitle,
  children,
  data,
  objKey,
}) {
  const content = data.footer_title ? data : layout;
  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);
  return (
    <>
      <PageHead headTitle={headTitle} />
      <DataBg />

      <Header headerCls={headerCls} headerTop={headerTop} data={content} />
      <main>
        {data?.banner && <Breadcrumb data={data?.banner} objKey={objKey} />}
        {children}
      </main>
      <Footer data={content} />

      <BackToTop />
    </>
  );
}
