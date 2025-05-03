import React from "react";

function Hogcard({ hogs, handleshow, showDetails }) {
  return hogs.map((hog) => {
    const isShowing = showDetails === hog.name;
    return (
      <div key={hog.name} onClick={() => handleshow(hog.name)} className="pigTile">
        <h3>{hog.name}</h3>
        <img src={hog.image} alt={hog.name} className="hog-img"/>
        {isShowing ? (
          <div className="minPigTile">
            <p><strong>specialty: </strong>{hog.specialty}</p>
            <p><strong>weight: </strong>{hog.weight}</p>
            <p><strong>greased: </strong>{hog.greased ? "Yes" : "No"}</p>
            <p><strong>highest medal achieved: </strong>{hog["highest medal achieved"]}</p>
          </div>
        ) : null}
      </div>
    );
  });
}

export default Hogcard;
