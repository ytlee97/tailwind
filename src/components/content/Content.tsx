import React from "react";

function Content({ children }) {
  return (
    <div className="flex flex-col w-screen h-screen bg-[#1F1F1F]">
      {children}
    </div>
  );
}

export default Content;
