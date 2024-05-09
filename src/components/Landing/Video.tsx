import React from "react";

const Video = () => {
  return (
    <iframe
      id="ytplayer"
      className={"rounded-xl z-10 border border-gray-200 w-full"}
      // type="text/html"
      width="100%"
      height="435"
      src={`https://www.youtube.com/embed/TtSc5voITXY?si=UQk2Zd5TqIdm4tjS?autoplay=0&origin=http://example.com&controls=0&rel=1`}
      // frameBorder="0"
    ></iframe>
  );
};

export default Video;
