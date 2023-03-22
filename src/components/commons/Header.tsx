import * as React from "react";
import { SvgIcons } from "../../SvgIcon";

type props = {
  upperHeaderLinks: any;
  lowerHeaderLinks: any;
};
/**
 * Component for Header
 * @param headerItem
 * @returns HTML element
 */
export default function Header(data: props) {
  const upperLinks = data.upperHeaderLinks;
  const lowerLinks = data.lowerHeaderLinks;
  const [open, setOpen] = React.useState("");

  

  const handleOnClick = () => {    
    if(open != "open"){
        setOpen("open");        
    }else{
        setOpen("");
    }
  }
  const upperHeaderLabels = upperLinks
    ? upperLinks.map((res: any) => {
        // console.log(res.label,"headerLinks");
        return (
          <>
            <li>
              <a
                href={res.link}
                className="course-accordion"
                rel="noopener noreferrer"
              >
                {res.label}
              </a>
            </li>
          </>
        );
      })
    : "Site data not found";

  const lowerHeaderLabels = lowerLinks
    ? lowerLinks.map((res: any) => {
        return (
          <>
            <li>
              <a
                href={res.link}
                className="course-accordion"
                rel="noopener noreferrer"
              >
                {res.label}
              </a>
            </li>
          </>
        );
      })
    : null;

  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  });
  const toggle = () => {
    (document.getElementById("body") as HTMLInputElement).classList.toggle(
      "menu-opened"
    );
  };

  return (
    <>
      <div className="header" id="header">
        <div className="labelLinks top-bar">
          <div className="container-custom mobile-pad">
            <nav className="topbar-navigation">
              <ul className="flex justify-end items-center">
                {upperHeaderLabels}
              </ul>
            </nav>
          </div>
        </div>
        <div className="labelLinksLower lower-bar">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row justify-between lowerLabelLinks">
              <a href="javascript:void(0)" className="header-logo">
                <img
                  src="https://www.epnb.com/wp-content/themes/epnb/img/logo/logo-full-no-tag.svg"
                  title="Ephrata National Bank"
                />
              </a>
              <div className="hamburger flex justify-center items-center absolute right-0 top-[50px] lg:hidden  ">
                <a href="javascript:void(0)" onClick={handleOnClick}>{SvgIcons.hamburger}</a>                
              </div>
              <nav className={open + " primary-navigation"}>
                <ul className="flex flex-col lg:flex-row justify-end">
                  {lowerHeaderLabels}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
