import React, { useEffect, useState, useRef } from "react";

const ImageCard = ({ image, description }) => {
  const [span, setSpan] = useState(0);
  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.addEventListener("load", setSpans);
  }, []);

  const setSpans = () => {
    const height = imageRef.current.clientHeight;
    const numberOfSpans = Math.ceil(height / 1) + 10;
    setSpan(numberOfSpans);
  };
  return (
    <div className="image" style={{ gridRowEnd: `span ${span}` }}>
      <img src={image} alt="description" ref={imageRef} />
    </div>
  );
};

export default ImageCard;
