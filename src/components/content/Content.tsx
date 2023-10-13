import React from "react";

function Content({ children }) {
  return (
    <div className="w-screen h-screen bg-[#1F1F1F]">
      {children}
      <div className="resize-x bg-red-100 w-10 h-10"></div>
    </div>
  );
}

export default Content;
