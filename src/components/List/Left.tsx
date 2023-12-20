import React from "react";
import Bottom from "./Bottom";

function Left() {
  return (
    <div className="flex flex-col">
      <div className="h-full bg-red-500 overflow-clip">
        <p></p>
      </div>
      <Bottom />
    </div>
  );
}

export default Left;
