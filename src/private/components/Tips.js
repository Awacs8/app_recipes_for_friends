import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTips } from "../../services/api_service";
import TipsList from "./TipsList";

const Tips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    getTips().then((response) => {
      setTips(response.data.tips);
    });
  }, []);

  return (
    <div className="tips">
      <h2>saznaj nove trikove ili podeli svoje sa nama</h2>
      <Link to="/addtip">
        <button>dodaj savet</button>
      </Link>
      <TipsList tips={tips} />
    </div>
  );
};

export default Tips;
