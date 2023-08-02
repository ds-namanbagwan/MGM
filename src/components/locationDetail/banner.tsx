import * as React from "react";
import Defaultimage from "../../images/luxurystore.jpg"
import { Image } from "@yext/pages/components";
import { useEffect, useState } from "react";

export type Address = {
  line1: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};

type Banner = {
  data:any
  c_bannerCta:any,
  c_banner:any
};


const Banner = (props: Banner) => {
  const {data,c_banner,c_bannerCta} = props;
  // const [imageIsLoaded, setImageIsLoaded] = useState(false);
 
//   useEffect(() => {
//     var head = document.head;
//     var link = document.createElement("link");
//     link.rel = "preload";
//     link.as ="image"
//     link.href = "https://dynl.mktgcdn.com/p/zqwuK0BCGsQUBPLW42hg5ieoSFZMOh3iVOSHIM2q22k/1330x627";

//     document.head.appendChild(link);
// }, [])

  // const onload=()=>{
  //   setImageIsLoaded(true)
  //   console.log('yes......')
  // }

if(typeof data != 'undefined'){
  let url=data.photoGallery[0].image;
  console.log(url,"url")
  return (
      <div className="hero-section">
        <Image className="hero-image" imgOverrides={{['loading']:"eager"}} image={url} width={1330} layout="fixed"
        height={204}/>
        {/* <img className="hero-image"
        
          src={data.photoGallery?data.photoGallery[0].image.url:Defaultimage} alt="banner" width="1" height="1" /> */}
        <div className="hero-content">
          <div className="container">
            <div className="banner-text">
              <h2>{data.c_bannerTitile?data.c_bannerTitile:''}</h2>
            </div>
          </div>
        </div>
        </div>
      );
  }else{
    return(<div className="hero-section">
    <img className="hero-image"
      src={c_banner?c_banner.image[0].url:Defaultimage} alt="banner" width="1" height="1" />
    <div className="hero-content">
      <div className="container">
        <div className="banner-text text-center">
          <h2>{c_banner.title?c_banner.title:''}</h2>
        </div>
      </div>
    
    </div>
    </div>)
  }
};
 export default Banner;
