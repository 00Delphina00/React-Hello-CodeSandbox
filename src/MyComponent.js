import React from "react";

const DelphinaComponent = props => {
  return (
    <div>
      <h2>Name:{props.delphina.myName}</h2>
      <strong>
        <p>Age: {props.delphina.myAge}</p>
        <p>Location: {props.delphina.location}</p>
        <p>Favorite Band: {props.delphina.favoriteBand}</p>
        <p>Favorite Book: {props.delphina.favoriteBook}</p>
      </strong>
    </div>
  );
};
export default DelphinaComponent;
