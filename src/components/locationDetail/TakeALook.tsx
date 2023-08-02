import * as React from 'react'
import {Image} from "@yext/pages/components";

function TakeALook(props:any) {
    // console.log(props,"props")
  return (<>
  <h2 className="text-center text-xxl pb-3">{props.c_branchHeading}</h2>
    <div className='block md:flex flex-row w-full gap-6'>
         {props.c_branchImage&& props.c_branchImage.map((element:any,index:number)=>{
            return (
                <div className="Branches w-full">
                 <Image image={element} height={element.height} width={element.width} imgOverrides={{['alt']:`branches-${index}`}} /> 
                {/* <img src={element.url} /> */}
                </div>
            )
         })}
           
    </div>
    </>
  )
}

export default TakeALook