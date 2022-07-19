import React from "react";

export default function Advertisement(props) {
  return (
    <div className="container">
      <div className="advertisement-bg">
        <p className="advertisement-heading">Advertisement</p>
        <img
          style={props.pad}
          src={props.src}
          alt="An advertising board"
          width={props.width}
        />
      </div>
    </div>
  );
}
