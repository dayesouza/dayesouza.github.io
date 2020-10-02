import React from "react";
import Photo from "./photo/photo";
import { Links } from "./links/links";

export default function HomeComponent(props) {
  return (
    <div className="white-board">
      <div className="flex-row h-100">
        <div className="flex-1">
          <Photo />
        </div>
        <div className="flex-1">
          <div className="flex-column space-between h-100">
            <h1 className="greeting"> Hi! I'm Dayenne</h1>
            <span>
              A fun Brazilian full-stack developer who loves to travel,
              front-end, UI/UX and Cloud.
            </span>
            <Links />
          </div>
        </div>
      </div>
    </div>
  );
}
