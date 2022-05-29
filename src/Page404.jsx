import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { apiActions } from "./store/api-slice";

const Page404 = () => {
  const dispatch = useDispatch();
  
 return (<div>
    <h1>Four:oh:four</h1>
    <Link to="/"><button onClick={()=>
      dispatch(apiActions.setErrorStatus("") // setting the errorstatus back to empty so children can be shown instead of 404 page , when clicked on back.
      )}>back</button></Link>
  </div>)
};

export default Page404;
