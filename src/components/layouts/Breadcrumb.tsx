import * as React from "react";
import { stagingBaseurl} from "../../sites-global/global";
import { Link } from "@yext/pages/components";
import { breadcrumbhome} from "../../sites-global/global";
import { StaticData } from "../../sites-global/staticData";
import constant from "../../constant";
type data = {
  name: any;
  parents: any;
  baseUrl: any;
  address: any;
  _site:any;
  parentstate: any;
  parentcountry: any;
};

const BreadCrumbs = (props: data) => {
  const [list, setList] = React.useState(null);
  let breadcrumbs;
  const data: any = [];
  React.useEffect(() => {
    setURL(props.parents, props.baseUrl);
  }, [setList]);



  /* This setURl function push our Breadcrumb data in (data array) coming from props */
  const setURL = (parents: any, baseUrl: any) => {
    if (parents) {
      if (Array.isArray(parents)) {
        for (let i = 0; i < parents.length; i++) {
          if (parents[i].meta.entityType.id == "ce_country") {
            parents[i].slug = parents[i].slug;
            data.push({
              name: parents[i].c_addressCountryDisplayName,
              slug: parents[i].slug,
              count: parents[i].dm_directoryChildrenCount,
            });
          } else if (parents[i].meta.entityType.id == "ce_region") {
            data.push({
              name: parents[i].name,
              slug: `${parents[i - 1].slug}/${parents[i].slug}`,
              count: parents[i].dm_directoryChildrenCount,
            });
            parents[i].name = parents[i].name;
            parents[i].slug = `${parents[i - 1].slug}/${parents[i].slug}`;
          }

          if (parents[i].meta.entityType.id == "ce_city") {
            parents[i].name = parents[i].name;
            parents[i].slug = `${parents[i - 1].slug}/${parents[i].slug}`;
            data.push({
              name: parents[i].name,
              slug: parents[i].slug,
              count: parents[i].dm_directoryChildrenCount,
            });
          }
        }
      } else {
        if (parents.meta.entityType.id == "ce_city") {
          parents.name = parents.name;
          parents.slug = `${props.parentcountry?.slug}/${props.parentstate?.slug}/${parents.slug}`;
          data.push({
            name: parents.name,
            slug: parents.slug,
            count: parents.dm_directoryChildrenCount,
          });
        }
      }

      breadcrumbs = data.map((crumb: any) => (
        <li key={crumb.slug}>
          {crumb.count == 1 ? (
            <Link
              href="javascript:void(0)"
              className="cursor-not-allowed"
              data-ya-track="Breadcrumbs"
              eventName={`Breadcrumbs`}
              rel="noopener noreferrer"
            >
              {" "}
              {crumb.name}
            </Link>
          ) : (
            <Link
              href={baseUrl + crumb.slug + ""}
              data-ya-track="Breadcrumbs"
              eventName={`Breadcrumbs`}
              rel="noopener noreferrer"
            >
              {" "}
              {crumb.name}
            </Link>
          )}
        </li>
      ));
      setList(breadcrumbs);
    } else {
      setList(null);
    }
  };
  
  return (
    <div className="breadcrumb">
      <div className="container-custom ">
        <ul className="flex">
          <li>
            <Link
              className="home"
              href={constant.originalSiteUrl?constant.originalSiteUrl:"/"}
              data-ya-track="Breadcrumbs"
              eventName={`Breadcrumbs`}
              rel="noopener noreferrer"
            >
               <div dangerouslySetInnerHTML={{__html: breadcrumbhome}}/>
            </Link>
          </li>
          <li>
            <Link
              className="Store Locator"
              href={stagingBaseurl?stagingBaseurl:"/"}
              data-ya-track="Breadcrumbs"
              eventName={`Breadcrumbs`}
              rel="noopener noreferrer"
            >
             {StaticData.locator_breadcrumb}
            </Link>
          </li>{/*  */}
          {list ? (
            list
          ) : (
            <>
              {props.address && props.address.city ? (
                <>
                
                <li className="inline-block">
                  {" "}
                  <Link
                    href={props.baseUrl + props.address.city + ""}
                    data-ya-track="Breadcrumbs"
                    eventName={`Breadcrumbs`}
                    rel="noopener noreferrer"
                  >
                    {props.address.city ? props.address.city : ""}
                  </Link>
                </li></>
              ) : (
                <></>
              )}
            </>
          )}
          {!props.parents &&
          <li> <Link
          href={"/gb"}
          data-ya-track="Breadcrumbs"
          eventName={`Breadcrumbs`}
          rel="noopener noreferrer"
        >
          United Kingdom
        </Link></li>
            }
          <li>{props && props.name}</li>
        </ul>
      </div>
    </div>
  );
};
export default BreadCrumbs;
