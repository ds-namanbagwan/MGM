import * as React from "react";
import { useEffect, useState } from "react";
import Footer from "./footer";
import Nav from "./Nav";

type Props = {
    title?: string;
    _site?: any;
    global:any;
    children?: React.ReactNode;
};
 
  const PageLayout = ({
    global,
    children,
  }: Props) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const script = document.createElement("script");
    
      script.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
      script.async = true;
      const link = document.createElement("link");
      link.rel = "preload";
      link.as ="image"
      link.href = "https://dynl.mktgcdn.com/p/zqwuK0BCGsQUBPLW42hg5ieoSFZMOh3iVOSHIM2q22k/1330x627";
      document.body.appendChild(script);  
      document.head.appendChild(link);
      const mediaQuery = window.matchMedia("(max-width: 767px)");
      mediaQuery.addListener(handleMediaQueryChange);
      handleMediaQueryChange(mediaQuery);
  
      return () => {
        mediaQuery.removeListener(handleMediaQueryChange);
      };
    }, []);
  
    const handleMediaQueryChange = (mediaQuery:any) => {
      if (mediaQuery.matches) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    return (
        <>
        {typeof global!="undefined"?
            <Nav _site={global}  isSmallScreen={isSmallScreen}/>
            :''}
                {children}
        {typeof global!="undefined"?
            <Footer footer={global}  isSmallScreen={isSmallScreen}/>
            :''}
        </>
    );
  };

export default PageLayout;
  