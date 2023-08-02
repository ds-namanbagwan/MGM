import { Link } from "@yext/pages/components";
import * as React from "react";
import direction from "../../images/direction.svg";


type Cta = {
  buttonText: string;
  address :object;
  latitude?: number;
  longitude?: number;
  googlePlaceId?:any
};

const GetDirection = (props: any) => {
  const { 
    buttonText, 
    latitude,
	  address,
    googlePlaceId,
    longitude ,
    detailpage
  } = props;

  
  const getDirectionUrl = () => {
    var origin: any = null;
    if (address.city) {
      origin = address.city;
    } else if (address.region) {
      origin = address.region;
    }  else {
      origin = address.countryCode;
    }
    if (navigator.geolocation) {
      const error = (error: any) => {
        var getDirectionUrl =
        "https://www.google.com/maps/dir/?api=1&destination=" +
       latitude +
        "," +
        longitude +
        "&origin=" +
        origin +"," +'UK';

      window.open(getDirectionUrl, "_blank");
      };
      navigator.geolocation.getCurrentPosition(
        function (position) {
          let currentLatitude = position.coords.latitude;
          let currentLongitude = position.coords.longitude;
	  let destinationsString = address.line1;
	  if(typeof address.line2 != 'undefined' && address.line2){
		  destinationsString += `, ${address.line2}`;
	  }
	  if(typeof address.city != 'undefined' && address.city){
		  destinationsString += `, ${address.city}`;
	  }
	  if(typeof address.region != 'undefined' && address.region){
		  destinationsString += `, ${address.region}`;
	  }
	  if(typeof address.countryCode != 'undefined' && address.countryCode){
		  destinationsString += `, ${address.countryCode}`;
	  }
    let destination = "";
	  if(typeof googlePlaceId != 'undefined' && googlePlaceId){
		  destination = "&destination_place_id=" +googlePlaceId; 
	  }
          let getDirectionUrl = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(destinationsString)+destination+ "&origin=" +
            currentLatitude + "," + currentLongitude;
          window.open(getDirectionUrl, "_blank");
        },
        error,
        {
          timeout: 10000,
        }
      );
    }
  };
  return (
    <>   
     <Link
                      data-ya-track="getdirections"
                      eventName={`getdirections`}
                      className="btn notHighligh"
                      onClick={getDirectionUrl}
                      href="#javascript"
                      rel="noopener noreferrer"
                    >
                      {!detailpage &&
                      <img src={direction} alt="getdiorection" height={21} width={23}/>
                                                      }
                        {buttonText}
                    </Link>
    </>

  );
};

export default GetDirection;
