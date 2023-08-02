import * as React from "react";
import { answersHeadlessConfig } from "../../config/answersHeadlessConfig";
import { useEffect } from "react";
import constant from "../../constant";

const SearchSnippet =(props:any)=>  {
  
  useEffect(()=>{
    const answersScriptPromise = new Promise((resolve, reject) => {
      const answersScript = document.createElement('script');
      document.body.appendChild(answersScript);
      answersScript.onload = resolve;
      answersScript.onerror = reject;
      answersScript.async = true;
      answersScript.src = 'https://assets.sitescdn.net/answers/v1/answers.min.js';
    });

    answersScriptPromise.then(() => {
      ANSWERS.init({
        apiKey: "db9fb251f6697c5529b02e93d68f6e33",
        experienceKey: "mgm-timber-as",
        businessId: "3915154",
        experienceVersion: "PRODUCTION",
        locale:'en_GB',
        onReady: function () {
          ANSWERS.addComponent('SearchBar', {
            container: ".SearchBarContainer",
            placeholderText: props.placeholder,
            redirectUrl: constant.answerRedirectUrl,
            customIconUrl: "/images/search.svg"
          });
        }
      });
    });
  },[]);


  return <div className="SearchBarContainer"></div>;
}
export default SearchSnippet



