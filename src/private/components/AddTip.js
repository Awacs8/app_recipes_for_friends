import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { sendTips } from "../../services/api_service";

const AddTip = () => {
  const [tip, setTip] = useState({ title: "", content: "" });
  const [info, setInfo] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setTip({ ...tip, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTip = { ...tip, id: uuidv4() };
    sendTips(newTip).then(() => {
      setInfo("hvala! :)");
      setTip({ title: "", content: "" });
    });
  };

  return (
    <div className="add_tip">
      <h2>podeli svoj savet</h2>
      <Link to="/tips">
        <button>lista saveta</button>
      </Link>
      <form>
        <label htmlFor="title">naslov:</label>
        <input
          type="text"
          name="title"
          value={tip.title}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="tip">savet:</label>
        <textarea name="content" value={tip.content} onChange={handleChange} />
        <button onClick={handleSubmit}>dodaj na listu</button>
        <sup>{info}</sup>
      </form>
    </div>
  );
};

export default AddTip;
