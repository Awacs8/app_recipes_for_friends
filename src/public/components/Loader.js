import React from "react";
import loader from "../../utils&assets/img/loading.gif";

export const Loader = () => {
  return (
    <div className="loader">
      <img src={loader} alt="loading..." />
    </div>
  );
};
