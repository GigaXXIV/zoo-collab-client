import React, { useRef } from "react";

export default function Welcome() {
  // useRef to control the display of Welcome
  const welcomeRef = useRef();

    // handle click on the Subscribe button
    const handleClick = (e) => {
      e.preventDefault();
      welcomeRef.current.style.display = 'none';
    }

  return (
    <div className="welcome" ref={welcomeRef}>
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
            <button className="subbutton" onClick={handleClick}>Subscribe!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
