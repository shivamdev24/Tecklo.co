import React from "react";

function InfiniteTextMoving() {
  return (
    <div className="container">
      <div className="flex overflow-hidden  p-2 justify-center items-center">
        <div
          className="flex gap-4 animate-infinite-scroll uppercase font-extrabold"
          style={{
            fontFamily: "'Lilita One', sans-serif",
            fontWeight: 400,
          }}
        >
          <div className="whitespace-nowrap text-5  xl md:text-[10rem] bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            natus atque facilis ex perspiciatis numquam dolore accusamus
            assumenda tempora. Eaque.
          </div>
          <div className="whitespace-nowrap  text-5xl md:text-[10rem] bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            nesciunt molestiae quidem reprehenderit quod laboriosam ducimus esse
            hic officiis non.
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfiniteTextMoving;
