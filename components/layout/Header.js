import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import { strapiImageLoader } from "@/helpers/util";

export default function Header({ headerCls, headerTop, data }) {
  const [scroll, setScroll] = useState(0);

  const [isToggled, setToggled] = useState(false);
  const handleToggled = () => {
    setToggled(!isToggled);
    !isToggled
      ? document.body.classList.add("mobile-menu-visible")
      : document.body.classList.remove("mobile-menu-visible");
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      {headerTop && (
        <div className="header-top-wrap">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-9">
                <div className="header-top-left">
                  <ul className="list-wrap">
                    <li>Welcome to Sustainable Solar Energy Solutions</li>
                    <li>
                      <i className="fas fa-phone-alt" />
                      <Link href="tel:0123456789">(+92) 301-820-7730</Link>
                    </li>
                    <li>
                      <i className="fas fa-envelope" />
                      <Link href="mailto:info@sses.pk">info@sses.pk</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3">
                <div className="header-top-right">
                  <div className="header-lang">
                    <div className="dropdown">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img src="assets/img/icon/united-states.jpg" alt="" />{" "}
                        English
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <Link className="dropdown-item" href="/">
                          <img src="assets/img/icon/russia.jpg" alt="" />
                          Russia
                        </Link>
                        <Link className="dropdown-item" href="/">
                          <img src="assets/img/icon/india.jpg" alt="" />
                          India
                        </Link>
                        <Link className="dropdown-item" href="/">
                          <img src="assets/img/icon/bangladesh.jpg" alt="" />
                          Bangla
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="header-social">
                    <ul className="list-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-youtube" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <header>
        <div
          id="sticky-header"
          className={`menu-area  ${scroll ? "sticky-menu" : ""} ${
            headerCls ? headerCls : ""
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler" onClick={handleToggled}>
                  <i className="fas fa-bars" />
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo different-logo">
                      <Link href="/">
                        <Image
                          src={data?.logo?.url}
                          alt="Logo"
                          width={159}
                          height={63}
                          loader={strapiImageLoader}
                        />
                        {/* <img src={"/assets/img/logo/logonew.png"} alt="Logo" /> */}
                      </Link>
                    </div>
                    <div className="logo d-none">
                      <Link href="/">
                        {/* <img
                                                    height={100}
                                                    width={150}
                                                    src="/assets/img/logo/logonew.png"
                                                    alt="Logo"
                                                /> */}
                        <Image
                          src={data?.logo?.url}
                          alt="Logo"
                          width={150}
                          height={100}
                          loader={strapiImageLoader}
                        />
                      </Link>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        {data?.main_menus?.map((menu, index) => {
                          return (
                            <li key={index}>
                              <Link href={menu.link}>{menu.title}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="header-action d-none d-md-block">
                      <ul className="list-wrap">
                        {/* <li className="header-btn"><Link href="/contact" className="btn">Get a Quoute</Link></li> */}
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn" onClick={handleToggled}>
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <Link href="/">
                        <img src="/assets/img/logo/logonew.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="menu-outer">
                      <Sidebar data={data} />
                    </div>
                    <div className="social-links">
                      <ul className="clearfix list-wrap">
                        {data?.profile?.social_links
                          .sort((a, b) => a.id - b.id)
                          .map((link, index) => { 
                            return (
                              <li key={index}>
                                <Link href={link.link}>
                                  <i className={link.icon} />
                                </Link>
                              </li>
                            );
                          })}
                        {/* <li>
                          <Link href="/#">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <i className="fab fa-linkedin-in" />
                          </Link>
                        </li>
                        <li>
                          <Link href="/#">
                            <i className="fab fa-youtube" />
                          </Link>
                        </li> */}
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" />
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
