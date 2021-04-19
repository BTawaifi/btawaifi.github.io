import React from "react";

class ExpandableCard extends React.Component {
  state = {
    open: false,
  };

  handleClick = (e) => {
    if (
      !e.target.classList.contains("lower") &&
      !e.target.classList.contains("TechnologyListItem")
      // e.target.classList.contains("upper") ||
      //e.target.classList.contains("card-expandable expand") ||
      // e.target.classList.contains("clickable-upper") || e.target.classList.contains("bi-caret-down-fill")|| e.target.classList.contains("bi-caret-up-fill")
    ) {
      if (this.state.open) {
        this.setState({
          open: false,
        });
      } else {
        this.setState({
          open: true,
        });
      }
    }
  };

  render() {
    return (
      <div
        className={"card-expandable " + (this.state.open ? "expand" : "")}
        onClick={this.handleClick}
      >
        <div className="upper">
          <p className="clickable-upper">{this.props.Title}</p>
          <h3 className="clickable-upper">
            {this.state.open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-up-fill caret-animate"
                viewBox="0 0 16 16"
                filecrx=""
                transform="rotate(180)"
              >
                <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
                filecrx=""
                transform="rotate(90)"
              >
                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            )}
          </h3>
        </div>

        <div className="lower">
          {this.props.TechnologyList.map((item, i) => (
            <p key={i} className="TechnologyListItem">
              {item}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default ExpandableCard;
