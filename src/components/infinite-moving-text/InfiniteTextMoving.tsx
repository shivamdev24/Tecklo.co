import React from "react";

function InfiniteTextMoving() {
  return (
    <div className="container">
      <div className="flex overflow-hidden  p-2 justify-center items-center">
        <div
          className="flex gap-4 animate-infinite-scroll uppercase font-bold"
          style={{
            fontFamily: "'Lilita One', sans-serif",
            fontWeight: 400,
          }}
        >
          <div className="whitespace-nowrap text-5xl md:text-[10rem] bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Your vision, our mission.
          </div>
          <div className="whitespace-nowrap  text-5xl md:text-[10rem] bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            From concept to creation.
          </div>
          <div className="whitespace-nowrap text-5xl md:text-[10rem] bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Your vision, our mission.
          </div>
          <div className="whitespace-nowrap  text-5xl md:text-[10rem] bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            From concept to creation.
          </div>
          <div className="whitespace-nowrap text-5xl md:text-[10rem] bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Your vision, our mission.
          </div>
          <div className="whitespace-nowrap  text-5xl md:text-[10rem] bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            From concept to creation.
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfiniteTextMoving;
