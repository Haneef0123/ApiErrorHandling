import React from "react";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { apiActions } from "./store/api-slice";

const useQuery = ({ url }) => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const [apiData, setApiData] = React.useState();

  React.useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then(({ code, status, ...apiData }) => {
        if (code > 400) {
          // history.replace(history.location.pathname, {  //this method can also be used , here we make use of router properties instead of redux.
          //   errorStatusCode: code,
          // });
          dispatch(apiActions.setErrorStatus(code));
        } else {
          setApiData(apiData);
        }
      });
  }, [
    url,
    // , history
  ]);

  return { data: apiData };
};

export default useQuery;
