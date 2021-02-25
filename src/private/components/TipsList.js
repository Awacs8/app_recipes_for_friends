import React from "react";
const TipsList = ({ tips }) => {
  return (
    <div className="tips_list">
      {tips.map((tip) => (
        <div key={tip._id}>
          <h4>{tip.title}</h4>
          <p>{tip.content}</p>
        </div>
      ))}
    </div>
  );
};
export default TipsList;
