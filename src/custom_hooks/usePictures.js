import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPictures } from "../actions/";

const usePictures = (searchString) => {
  const [pictures, setPictures] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPictures(searchString));
  }, [dispatch]);
};

export default usePictures;
