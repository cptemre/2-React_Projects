import { useEffect, useState } from "react";
import $ from "jquery";

const useFilter = (state, dispatch) => {
  const [filterID, setFilterID] = useState(0);
  const [filteredTypeList, setFilteredTypeList] = useState([]);

  // SET YOUR LIST AND FILTERID
  useEffect(() => {
    setFilteredTypeList(state.filteredTypeList);
    setFilterID(state.id);
  }, [state]);

  // SET URL, SHOW AND FILTER
  useEffect(() => {
    // PREPARE URL PART
    const url = document.URL.split("/");
    const lastURL = url[url.length - 1];
    // FILTER YOUR LIST TO STATE.FILTER
    const filter = filteredTypeList.filter((item) => item.id < filterID);
    dispatch({ type: "FILTERED", payload: filter });
    // SET URL IN DISPATCH
    dispatch({ type: "URL", payload: lastURL });
    // SHOW LOAD MORE BUTTON IF IT IS A PROPER PAGE
    if (
      state.types.includes(lastURL.toUpperCase()) &&
      lastURL.toUpperCase() !== "PLATFORMS"
    ) {
      dispatch({ type: "SHOW", payload: true });
    } else {
      dispatch({ type: "SHOW", payload: false });
    }
  }, [filterID, filteredTypeList, state.domLength]);
};

export default useFilter;
