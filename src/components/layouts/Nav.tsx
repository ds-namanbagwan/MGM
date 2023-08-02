import * as React from "react";
import Menu from "./Menu";
import { logo } from "../../sites-global/global";
import Linking from "../commons/Link";
import { Image } from "@yext/pages/components";
import constant from "../../constant";
const Nav = (props: any) => {
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  });
  const toggle = () => {
    (document.getElementById("body") as HTMLInputElement).classList.toggle(
      "menu-opened"
    );
  };
  const RemoveMenu = () => {
    (document.getElementById("body") as HTMLInputElement).classList.remove(
      "menu-opened"
    );
  };

  return (
    <>
      <div className="site-header">
        <div className="container-custom">
          {!props.isSmallScreen && (
            <div
              className="trustpilot-widget"
              data-locale="en-GB"
              data-template-id="5419b732fbfb950b10de65e5"
              data-businessunit-id="5843003c0000ff0005988644"
              data-style-height="24px"
              data-style-width="100%"
              data-theme="light"
            >
              <a
                href="https://uk.trustpilot.com/review/mgmtimber.co.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trustpilot
              </a>
            </div>
          )}
          <div className="header-top">
            <div className="middle-head">
              <button
                type="button"
                className="menu-btn"
                id="menu-btn"
                onClick={toggle}
                aria-label="Menu"
              >
                <div className="menu-icon-box">
                  <div className="menu-icon-inner"></div>
                </div>
              </button>

              <div className="logo-inner">
                {props._site.c_logo ? (
                  <a
                    href={
                      props._site.c_logo.clickthroughUrl
                        ? props._site.c_logo.clickthroughUrl
                        :constant.originalSiteUrl
                    }
                  >
                    <Image
                      image={props._site.c_logo.image.url}
                      height={props._site.c_logo.image.height} 
                      width={props._site.c_logo.image.width}
                    />
                  </a>
                ) : <a href={constant.originalSiteUrl}>
                  <div dangerouslySetInnerHTML={{ __html: logo }} /></a>
                }
              </div>
              <div className="link-left">
                <ul className="top-hdr-links">
                  <li className="px-0 sm:px-4 inline">
                    <div
                      className="store-inner"
                      key={props._site.c_jobListCTA.label}
                    >
                      <i className="icon-wishlist ki ki-wishlist text-3xl"></i>
                      <Linking props={props._site.c_jobListCTA} />
                    </div>
                    <div
                      className="store-inner"
                      key={props._site.c_jobListCTA.label}
                    >
                     <i className="icon-location ki ki-location text-3xl"></i>
                      <Linking props={props._site.c_branchLocatorCTA} />
                    </div>
                    {/* <Linking props={toplinks}/> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="main-nav" onClick={RemoveMenu}>
          <div className="container-custom">
            <Menu menu={props._site} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
