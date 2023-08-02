/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { CTA, Link } from "@yext/pages/components";
import { Image } from "../../types/search/locations";
// Initialize variables to store slider type and centering for different screen sizes
// Define the type for the Brands prop
type Items = {
  map: any;
  heading?: string;
  image: Image;
  text: string;
  shopButton: CTA;
  length: number;
};

type Availabledata = {
  title: string;
  c_availableItems: Items;
  c_availableStockInformation?: string;
};
let desktopSliderType = "";
let tabSliderType = "";
let mobileSliderType = "";

let desktopSliderCenter = "";
let tabSliderCenter = "";
let mobileSliderCenter = "";
/**
 * Component for Brand
 * @param products
 * @returns HTML element
 */

function AvailableItem(c_availableItems: Availabledata) {
  
  // Get the length of the brands array to determine the slider type and centering
  const length = c_availableItems?.c_availableItems.length;
  // Determine slider type and centering for desktop screens
  desktopSliderType = length > 4 ? "loop" : "slide";
  desktopSliderCenter = length > 4 ? "" : "center-4";

  // Determine slider type and centering for tablet screens
  tabSliderType = length > 2 ? "loop" : "slide";
  tabSliderCenter = length > 2 ? "" : "center-2";

  // Determine slider type and centering for mobile screens
  mobileSliderType = length > 1 ? "loop" : "slide";
  mobileSliderCenter = length > 1 ? "" : "center-1";

  // Determine whether to show arrows based on the number of brands
  const arrowsStatus = length > 3 ? true : false;

  return (
    <>
      <div className="container-custom1 available-item">
        <h2>{c_availableItems?.title}</h2>

        <div
          className={`product-list ${desktopSliderCenter} ${tabSliderCenter} ${mobileSliderCenter}`}
        >
          <div className="">
            <Splide
              options={{
                rewind: true,
                type: "desktopSliderType",
                perPage: 4,
                perMove: 1,
                // arrows: arrowsStatus,
                arrows: arrowsStatus,
                drag: false,
                pagination: false,
                lazyLoad: "Brand",
                breakpoints: {
                  1279: {
                    perPage: 3,
                    drag: false,
                    type: "tabSliderType",
                  },
                  766: {
                    perPage: 2,
                    type: "mobileSliderType",
                  },
                  576: {
                    perPage: 1,
                    type: "mobileSliderType",
                  },
                },
              }}
            >
              {c_availableItems &&
                c_availableItems?.c_availableItems?.map(
                  (item: any, index: number) => {
                    
                    return (
                      <SplideSlide key={index}>
                        <div className="inner-stock">
                          {item.image && <img src={item.image.url} alt="" />}
                          {item.heading && <h3>{item.heading}</h3>}
                          {item.text && <p>{item.text}</p>}
                          <ul>
                            {item.stockItems &&
                              item.stockItems.map((data: any) => {
                                return (
                                  <>
                                    <li>
                                      <Link href={data?.link}>{data?.label}</Link>
                                    </li>
                                  </>
                                );
                              })}
                          </ul>
                          <div className="btn-stock">
                            {" "}
                            <Link
                              data-ya-track="available"
                              eventName={`availableStock`}
                              href={item?.shopButton?.link}>
                              {item.shopButton.label}
                            </Link>
                          </div>
                        </div>
                      </SplideSlide>
                    );
                  }
                )}
            </Splide>
          </div>
        </div>
      </div>
    </>
  );
}

export default AvailableItem;
