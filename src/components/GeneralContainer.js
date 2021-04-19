import React from "react";

function GeneralContainer(props) {
    return (
      <div className={props.containerClass}>
        {props.children}
      </div>
    );
}

export default GeneralContainer;

