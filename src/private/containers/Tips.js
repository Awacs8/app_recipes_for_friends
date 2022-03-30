import React, { useState, useEffect } from "react";
import "../../utils&assets/css/tips.css";
import { Link } from "react-router-dom";
import { getTips } from "../../services/api_service";
import TipsList from "../components/TipsList";
import { ReactComponent as Plus } from "../../utils&assets/img/plus.svg";

const Tips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    getTips().then((response) => {
      setTips(response.data);
    });
  }, []);

  return (
    <>
      <h2>Saznaj nove trikove ili podeli svoje sa nama</h2>

      <div className="tips">
        <Link to="/addtip">
          <button>
            <Plus />
          </button>
        </Link>
        <TipsList tips={tips} />
      </div>
    </>
  );
};

export default Tips;
