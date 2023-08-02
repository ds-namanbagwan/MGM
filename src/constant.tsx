const constant={
    stagingBaseurl:"https://www.mgmtimber.co.uk/branch-locator",
    answerRedirectUrl:'https://greatly-moccasin-pike.pgsdemo.com',
    originalSiteUrl:"https://www.mgmtimber.co.uk/",
    brandName:"MGM-Donaldson",
    headerSearchPlaceholder:"Search entire store here...",
    noResult:"No results were found in your searched area",
    nearbyCTA:"View More Location",
     slugify(slugString: any) {
        slugString.toLowerCase().toString();
        slugString = slugString.replace(/[&\/\\#^+()$~%.'":*?<>{}!@]/g, "");
        slugString = slugString.replaceAll("  ", "-");
        slugString = slugString.replaceAll(" ", "-");
        return slugString.toLowerCase();
      },
       convertToRtf(rtf:any) {
        rtf = rtf.replace(/\\par[d]?/g, "");
        rtf = rtf.replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, "")
        rtf=rtf.replace('/','');
        rtf=rtf.replace(';','');
        rtf=rtf.replace('-','');
        return rtf.replace(/\\'[0-9a-zA-Z]{2}/g, "").trim();
    }
}
export default constant