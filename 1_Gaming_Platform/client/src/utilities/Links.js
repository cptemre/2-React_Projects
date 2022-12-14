import React, { useContext, useState, useEffect } from "react";
import { Context } from "../utilities/Context";
import $ from "jquery";
import { Link } from "react-router-dom";

const Links = () => {
  // GET TYPES ARRAY
  const { path, link } = useContext(Context);
  // STATE LINKS SETUP
  const [types, setTypes] = useState([]);
  const [imgPath, setImgPath] = useState("");
  // SET TYPES BY FILTERING IT WITH CURRENT SELECTED VALUE IN FILTERTYPE
  useEffect(() => {
    setTypes(link);
  }, [link]);
  useEffect(() => {
    setImgPath(path);
  }, [path]);

  //#region MOUSE FUNCTIONS

  // MOUSE ENTER IMG UP AND DOWN ANIMATION
  const mouseenterHandle = (e) => {
    const urlUpDiv = $(e.currentTarget)
      .children(".urlImgDiv")
      .children(".urlUpDiv");
    const urlDownDiv = $(e.currentTarget)
      .children(".urlImgDiv")
      .children(".urlDownDiv");
    $(urlUpDiv).animate({ top: "-2rem" });
    $(urlDownDiv).animate({ top: "2rem" });
  };

  // MOUSE LEAVE IMG UP AND DOWN ANIMATION
  const mouseleaveHandle = (e) => {
    const urlUpDiv = $(e.currentTarget)
      .children(".urlImgDiv")
      .children(".urlUpDiv");
    const urlDownDiv = $(e.currentTarget)
      .children(".urlImgDiv")
      .children(".urlDownDiv");
    $(urlUpDiv).animate({ top: "0" });
    $(urlDownDiv).animate({ top: "0" });
  };

  //#endregion MOUSE FUNCTIONS

  return (
    <main id="main">
      {types.map((type) => {
        return (
          <div key={type} id={type} className="urlDiv">
            <Link
              to={`${type.toLowerCase().replace(/ /gi, "_")}`}
              onMouseEnter={(e) => mouseenterHandle(e)}
              onMouseLeave={(e) => mouseleaveHandle(e)}
            >
              <div className="urlName">{type}</div>
              <div className="urlImgDiv">
                <div className="urlUpDiv">
                  <img
                    src={require(`../assets/imgs/links/${imgPath}${type}/image1x1.jpg`)}
                    alt=""
                    className="urlUpImg"
                  />
                </div>
                <div className="urlDownDiv">
                  <img
                    src={require(`../assets/imgs/links/${imgPath}${type}/image1x2.jpg`)}
                    alt=""
                    className="urlDownImg"
                  />
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </main>
  );
};

export default Links;
