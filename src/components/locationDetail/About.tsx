import * as React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import RtfConverter from "@yext/rtf-converter";
import { useState } from "react";
import { LexicalRichText } from "@yext/react-components";


const ReadMore = ({ children }: any) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const beforeConverter = text.slice(0, 250);
  return (
    <div className="text">
      {isReadMore ? <div
        className="about-content-inner"
        dangerouslySetInnerHTML={{
          __html: RtfConverter.toHTML(
            beforeConverter
          ),
        }}
      /> : <div
        className="about-content-inner"
        dangerouslySetInnerHTML={{
          __html: RtfConverter.toHTML(
            text
          ),
        }}
      />}
      <span onClick={toggleReadMore} className="read-or-hide cursor-pointer underline">
        <button className="underline"> {isReadMore ? "...show more" : " show less"}</button>
      </span>
    </div>
  );
};

export default function About(props: any) {
  return (
    <div className="about-sec about-page">
      <div className="container-custom">
        <div className="about-inner-sec">
          <div className="w-full lg:w-2/5 xl:w-[47%] relative  left-0">
            <div className="h-full lg:h-[28.938rem]">
              {props.c_aboutInformation.image
                ? props.c_aboutInformation.image.map((element: any) => (
                  <LazyLoadImage
                    src={element.url}
                    key={element.url}
                    width={"100%"}
                    height={518}
                    alt="photo"
                  />
                ))
                : ""}
            </div>
          </div>
          <div className="about-content">
            <div className="mb-4">
              <h2>{props.c_aboutInformation.title}</h2>
              <div className="">
                {/* <ReadMore>              */}
                {/* <LexicalRichText serializedAST={JSON?.stringify(props.c_aboutInformation.description1?.json)} /> */}
                {/* </ReadMore>           */}
                <h1>YEXT AI DATA GENERATE </h1>
                {props?.c_autodatagenerate}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
