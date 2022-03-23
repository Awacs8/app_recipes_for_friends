import React from "react";
import loader from "../../utils&assets/img/loading.gif";
import "../../utils&assets/css/loader.css";

export const Loader = () => {
  return (
    <div className="loader">
      <img src={loader} alt="loading..." />
    </div>
  );
};
