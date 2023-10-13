import React from "react";
import { Tooltip } from "react-tooltip";
function Header() {
  return (
    <header
      data-tooltip-target="tolltip-bottom"
      className="flex items-center text-white h-8 bg-[#2C2D31] p-3"
    >
      <h1
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Test asdadsad"
        data-tooltip-place="bottom"
        className="font-bold text-sm"
      >
        <Tooltip id="my-tooltip" />
        ExamVue PACS Duo
      </h1>
      <div
        id="tooltip-bottom"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Tooltip on bottom
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </header>
  );
}

export default Header;
