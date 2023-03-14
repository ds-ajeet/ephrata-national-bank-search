import * as React from "react";
// import Footeraccordian from "./Footeraccordian";
// import Scroll from "./Scroll"

type props = {
    houseLender?:any;
    office?:any;
}

export default function Footer(data : props) {
  // Variables for House Lending Sections
    const houseLenderData = data.houseLender;
    const houseLenderHeading = houseLenderData.heading;
    const houseLenderCopyrightText = houseLenderData.copyrightText;
    const houseLenderSubMenus = houseLenderData.otherMenus.map((res: any) => {
      return (
        <>
          <a href={res.lendingLink}>{res.lendingLabel} | </a>
        </>
      );
    });
// Variables for House Lending Sections
    // Variables for Office data 
     const officeData = data.office
      const officeHeading = officeData.heading;
      const officeLocation = officeData.address;
      const officeNumber  = officeData.phoneNumber;

    
    const [isSmallScreen, setIsSmallScreen] = React.useState(false);
    React.useEffect(() => {
       const mediaQuery = window.matchMedia("(max-width:1023px)");
       mediaQuery.addListener(handleMediaQueryChange);
       handleMediaQueryChange(mediaQuery);
   
       return () => {
         mediaQuery.removeListener(handleMediaQueryChange);
       };
     }, []);
     
   const handleMediaQueryChange = (mediaQuery: any) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
    return (
      <>
        <div className="FooterDiv flex flex-row">
          <div className="LendingHouse">
            <img
              src="https://www.epnb.com/wp-content/themes/epnb/img/logo/equal-housing-lender.svg"
              height={"70"}
              width={"70"}
            ></img>
            <h3>{houseLenderHeading}</h3>
            <p>{houseLenderSubMenus}</p>
            <p>{houseLenderCopyrightText}</p>
          </div>
          <div className="Office">
            <img
              src="https://www.epnb.com/wp-content/themes/epnb/img/logo/logo-without-tagline.svg"
              height={"70"}
              width={"150"}
            ></img>
            <h3>{officeHeading}</h3>
            <p>{officeLocation}</p>
            <p>
              Toll Free : <a href={"tel:" + officeNumber}>{officeNumber}</a>
            </p>
          </div>
          <div className="SocialMediaLinks">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">Connect with us</h6>
            <p className="flex justify-right items-right   border-gray-300">
              <a target="_blank" href="#">
                <img
                  src="https://communityfibre.co.uk/_next/image?url=https%3A%2F%2Fcdn.buttercms.com%2F8JYcEJbtSvS1YPOASYrM&w=1920&q=75"
                  alt="footericon"
                ></img>
              </a>

              <a target="_blank" href="#" className="ml-2 mr-4 text-gray-600">
                <img
                  src="https://communityfibre.co.uk/_next/image?url=https%3A%2F%2Fcdn.buttercms.com%2FmFQC6pvGSlyZAAB1zkN2&w=1920&q=75"
                  alt="footericon"
                ></img>
              </a>

              <a target="_blank" href="#" className=" text-gray-600">
                <img
                  src="https://communityfibre.co.uk/_next/image?url=https%3A%2F%2Fcdn.buttercms.com%2F6rzZHRkToOEbGHVd83z2&w=1920&h=1&q=75"
                  alt="footericon"
                ></img>
              </a>
              <a target="_blank" href="#" className="ml-2 mr-4 text-gray-600">
                <img
                  src="https://communityfibre.co.uk/_next/image?url=https%3A%2F%2Fcdn.buttercms.com%2FcNBUqv3VRJEGmRdUbgG7&w=1920&q=75"
                  alt="footericon"
                ></img>
              </a>
            </p>
          </div>
        </div>
      </>
    );

}