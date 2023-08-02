import * as React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import constant from "../../constant";
function MeetOurTeam(props: any) {
  return (
             <div className="meet-team">
              <div className="container-custom1">
              <h2 className="for-mob text-center mb-2">{props.c_meetOurTeamHeading}</h2>
                <div className="flex flex-wrap gap-6 w-full">
   
      {props.c_meetTeam &&
        props.c_meetTeam.map((res: any, index: number) => {
          return (
                 <div className="team-page">
                    <div className="">
                      <LazyLoadImage
                        src={res.image[0].url}
                        key={res.image[0].url}
                        width={"100%"}
                        height={518}
                        alt={`meetteam-${index}`}
                      />
                    </div>
                    <div className="mb-4 mt-2">
                      <h2 className="meet-title">{res.title}</h2>
                      <div className="">
                        <div
                          className="about-content-inner"
                          dangerouslySetInnerHTML={{
                            __html: constant.convertToRtf(res.description),
                          }}
                        />
                    </div>
                  </div>
                  </div>
              
          );
        })}
          </div>
              </div>
            </div>
  );
}

export default MeetOurTeam;
