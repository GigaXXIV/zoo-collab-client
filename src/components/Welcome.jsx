import React from "react";

export default function Welcome() {
  return (
    <div className="welcome">
      <div>
        <div>
          <h3>ZOO</h3>
        </div>
        <div>
          <p>
            Subscribe today to receive your 10% discount and come have some fun!
            Don't forget, kids join free on an adult membership!
          </p>
          <div className="button-position">
            <button className="subbutton">Subscribe!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
