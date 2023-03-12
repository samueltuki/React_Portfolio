import React from "react";

function Skills() {
  return (
    <div>
      <h2 className="text-center py-5 display-4 text-danger">Skill-Bar</h2>

      <div className="container">
        <div className="progress skillbar">
          <div
            className="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: "4%" }}
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            JAVASCRIPT
          </div>
        </div>

        <div className="progress skillbar">
          <div
            className="progress-bar progress-bar-striped bg-success"
            role="progressbar"
            style={{ width: "38%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            CSS
          </div>
        </div>

        <div className="progress skillbar">
          <div
            className="progress-bar progress-bar-striped bg-info"
            role="progressbar"
            style={{ width: "58%" }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            HTML
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
