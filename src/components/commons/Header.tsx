import * as React from "react";


type props = {
    upperHeaderLinks: any,
    lowerHeaderLinks : any
}
/**
* Component for Header
* @param headerItem 
* @returns HTML element
*/
export default function Header(data: props) {
    const upperLinks = data.upperHeaderLinks;
    const lowerLinks = data.lowerHeaderLinks;
    const upperHeaderLabels = upperLinks ? upperLinks.map((res: any) => {
        // console.log(res.label,"headerLinks");
        return (
            <>
                <div className="hover:text-[#9c9090] mr-5 ml-5">
                    <a href={res.link} className="course-accordion" rel="noopener noreferrer">
                        {res.label}
                    </a>
                </div>
            </>
        )
    }) : "Site data not found";

    const lowerHeaderLabels = lowerLinks ? lowerLinks.map((res:any)=>{
        return (
            <>
                <div className="hover:text-[#9c9090] mr-5 ml-5 mt-5">
                    <a href={res.link} className="course-accordion" rel="noopener noreferrer">
                        {res.label}
                    </a>
                </div>
            </>
        )
    }) : null;

    React.useEffect(() => {
        document.body.setAttribute("id", "body");
    });
    const toggle = () => {
        (document.getElementById("body") as HTMLInputElement).classList.toggle("menu-opened");
    };

    return (
        <>
            <div className="header">
            
                <nav>
                    <div className="labelLinks">
                        <div className="flex flex-row upperLabelLinks">

                            {upperHeaderLabels}
                        </div>
                    </div>
                    <div className="labelLinksLower">
                        <div className="flex flex-row lowerLabelLinks">
                            <img src="https://www.epnb.com/wp-content/themes/epnb/img/logo/logo-full-no-tag.svg" title="Ephrata National Bank"></img>
                            {lowerHeaderLabels}
                        </div>
                    </div>
                </nav>
            </div>
            
        </>
    );
}
