import React from "react";
import { Field, reduxForm } from "redux-form";
import { useDispatch } from "react-redux";
import { fetchPictures, setSearchTerm } from "../../actions/";

import "./Searchbar.css";

const renderInput = ({ input, meta }) => {
  return (
    <div className={`field ${meta.error && meta.touched ? "error" : ""}`}>
      <input type="text" {...input} />
      <i className="exclamation large icon"></i>
      {renderErrorMessage(meta)}
    </div>
  );
};

const renderErrorMessage = (meta) => {
  if (meta.error && meta.touched) {
    return <p className="error-message">{meta.error}</p>;
  }
};

const SearchBar = (props) => {
  const dispatch = useDispatch();

  const onSubmit = (formValues) => {
    dispatch(fetchPictures(formValues.searchString));
    dispatch(setSearchTerm(formValues.searchString));
  };

  return (
    <form
      action="urlofthepageontheservethatthisformwillgoto"
      methood="POST"
      onSubmit={props.handleSubmit(onSubmit)}
    >
      <Field name="searchString" component={renderInput} />
      <button>Submit</button>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.searchString) {
    errors["searchString"] = "Please enter a search value";
  }
  return errors;
};

export default reduxForm({
  form: "SearchBar",
  validate: validate,
})(SearchBar);
