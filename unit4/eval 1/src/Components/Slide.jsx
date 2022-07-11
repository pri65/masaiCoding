import React from "react";

function Slide({detail}) {
  return (
    <div className="slide-container" data-testid="slide">
      {detail?.map((data) => (
        <div key={data.id}>
                <h3 data-testid="title">{data.title}</h3>
      <p data-testid="description">{data.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Slide;
