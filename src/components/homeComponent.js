import React from "react";
import Photo from "./photo/photo";
import { Links } from "./links/Links";

export default function HomeComponent(props) {
  return (
    <div className="whiteBoard">
      <div className="flex-row flex-home h-100">
        <div className="flex-1">
          <Photo />
        </div>
        <div className="flex-1">
          <div className="flex-column space-between greeting h-100">
            <h1 className="greeting__name"> Hi! I'm Dayenne</h1>
            <span className="greeting__details">
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
