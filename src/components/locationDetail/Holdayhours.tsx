import * as React from "react";
import  {  OpenStausFunctions } from "../commons/openClose";
/**
 * Function used to Format the Date in D/M/Y
 * @param dateObject 
 * @param formatOption 
 * @param separator 
 * @returns 
 */
function formatDate(dateObject:any, formatOption:any, separator:any) {
  function format(m:any) {
    return new Intl.DateTimeFormat('en', m).format(dateObject);
  }
  return formatOption.map(format).join(separator);
} 

const Holidayhours =(props:any)=>{
  return(
    <>
    {props.hours.map((res:any)=>{
      const weeks=[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      
      const d = new Date(res.date);
      let day = d.getDay();
      let formatOption;
      
      formatOption = [ {day: '2-digit'},{month: '2-digit'},{year: 'numeric'}];  
      var d1 = new Date();
      var d2 = new Date(res.date);
      d1.setHours(0);d1.setMinutes(0);d1.setSeconds(0);d1.setMilliseconds(0);
      if(d2 > d1){
        return(
          <div className="pop-up-holyhrs">
          <div>{formatDate(new Date(res.date), formatOption, '-') }</div> 
          <div>
          {props.c_specific_day?props.c_specific_day.map((specificDay:any)=>{
            
            return(
              <>
              {specificDay.holidayDate == res.date?<span className="specificday">{specificDay.holidayName}</span>:''}
              </>
              )
            }
            ):<div>-</div>
          }   
          </div>    
          <div>{weeks[day]}</div> 
          {res.isClosed? <div><span className="cl-time">
          Closed
          </span></div>:<>   
          {res.openIntervals&&res.openIntervals.map((openinterval: any, index: Number) => {
            return (
              <div>
              <span className="op-time">
              {OpenStausFunctions.formatTime(openinterval.start)}
              </span>{" "}
              <span className="spac-bx"> - </span> 
              {" "}
              <span className="cl-time">
              {OpenStausFunctions.formatTime(openinterval.end)}
              </span>
              </div>
              );
            })
          }</>
        }
        </div>
        )
      }
    })
  }         
  </>
  )
}
export default Holidayhours;