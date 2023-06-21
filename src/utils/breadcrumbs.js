import React from "react";
import { Link, useLocation } from "react-router-dom";

const path = {
  lecture: "Lecture",
  "all-course": "All courses",
  "first-cloud-journey": "First Cloud Journey",
};
const Breadcrumbs = (props) => {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");
  // crumbs.splice(-1)
  // console.log(location)
  return (
    <>
      {crumbs && (
        <div className="breadcrumbs">
          <ol style={{ margin: "0px" }}>
            <li>
              <div className="ui-breadcrumbs">
                <Link style={{ cursor: "pointer" }} to={"/"}>
                  Home
                </Link>
              </div>
            </li>
            {crumbs.map((crumb) => {
              currentLink += `/${crumb}`;
              console.log(crumb);
              return (
                <li key={crumb}>
                  <div className="ui-breadcrumbs">
                    <div style={{ padding: "0 1rem" }}>
                      <span className="icon-size-normal disable-color">
                        <i className="fa-solid fa-chevron-right"></i>
                      </span>
                    </div>
                    <Link style={{ cursor: "pointer" }} to={currentLink}>
                      {path[crumb]}
                    </Link>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </>
  );
};

export default Breadcrumbs;
