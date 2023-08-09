import * as React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Image } from "@yext/pages/components";

export default function FeaturesBrand(props: any, index: number) {

  const photos2 = props.c_featuredbrandSection && props.c_featuredbrandSection.map((element: any) => (

    // eslint-disable-next-line react/jsx-key
    <SplideSlide>
      <div className="img-splide">
        <a href={element.link.link}>
          <Image image={element.images} height={element.images.height} width={element.images.width} imgOverrides={{ ['alt']: `branches-${index}` }} />
        </a>
      </div>
    </SplideSlide>
  ));

  return (
    <>
      <h1 className="text-center text-xxl pb-3">{props.name}</h1>
      <div className="Features-brand">
        <Splide id="splide-feturedbrand"
          options={{
            rewind: false,
            type: "splide",
            perPage: 6,
            perMove: 1,
            arrows: true,
            drag: true,
            pagination: false,
            lazyLoad: "nearby",
            breakpoints: {
              1024: {
                perPage: 3,
                drag: true,
                pagination: false,
                arrows: true,
                padding: '20px',
                type: "splide",
              },
              767: {
                perPage: 2,
                drag: true,
                pagination: false,
                arrows: true,
                type: "splide",
              },
              565: {
                perPage: 1,
                drag: true,
                pagination: false,
                arrows: true,
                type: "splide",
              },
            },
          }}>
          {photos2}
        </Splide>
      </div>
    </>
  )
}
