import React, { useContext, useState, useEffect } from "react";
import { Context } from "./Context";
// HOOKS
import useFilter from "./hooks/useFilter";
import $ from "jquery";
import { Link } from "react-router-dom";
const Home = () => {

  // GET TYPES ARRAY
  const { state, dispatch } = useContext(Context);
  // STATE TYPES SETUP
  const [types, setTypes] = useState([]);
  useFilter(state, dispatch);

  // SET TYPES BY FILTERING IT WITH CURRENT SELECTED VALUE IN FILTERTYPE
  useEffect(() => {
    setTypes(state.types);
  }, [state.types]);

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
              to={`/${type.toLowerCase()}`}
              onMouseEnter={(e) => mouseenterHandle(e)}
              onMouseLeave={(e) => mouseleaveHandle(e)}
            >
              <div className="urlName">{type}</div>
              <div className="urlImgDiv">
                <div className="urlUpDiv">
                  <img
                    src={require(`./assets/imgs/links/${type}/image1x1.jpg`)}
                    alt=""
                    className="urlUpImg"
                  />
                </div>
                <div className="urlDownDiv">
                  <img
                    src={require(`./assets/imgs/links/${type}/image1x2.jpg`)}
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

export default Home;
