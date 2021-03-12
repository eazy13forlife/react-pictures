import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fixSpan } from "../../actions/";

const ImageCard = ({ image, description, id }) => {
  const dispatch = useDispatch();
  const imageRef = useRef();
  const spanNumber = useSelector((state) => {
    return state.spans[id];
  });

  useEffect(() => {
    const setSpans = () => {
      const height = imageRef.current.clientHeight;
      const numberOfSpans = Math.ceil(height / 1) + 10;
      dispatch(fixSpan(id, numberOfSpans));
    };
    imageRef.current.addEventListener("load", setSpans);
  }, [dispatch, id]);

  return (
    <div className="image" style={{ gridRowEnd: `span ${spanNumber}` }}>
      <img src={image} alt="description" ref={imageRef} />
    </div>
  );
};

export default ImageCard;
