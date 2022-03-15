import React, { useState } from "react";
import { ReactComponent as Plus } from "../../utils&assets/img/plus.svg";

const AddPreparationStep = ({ addStep }) => {
  const [preparation_step, setPreparation_step] = useState("");

  return (
    <>
      <label htmlFor="preparation_step">Način pripreme: </label>
      <br />
      <textarea
        type="text"
        id="preparation_step"
        name="preparation_step"
        value={preparation_step}
        onChange={(e) => setPreparation_step(e.target.value)}
      />
      <br />
      <button
        onClick={(e) => {
          addStep(e, preparation_step);
          setPreparation_step("");
        }}
      >
        <Plus />
      </button>
    </>
  );
};

export default AddPreparationStep;
