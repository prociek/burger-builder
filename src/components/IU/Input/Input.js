import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  let inputElement = null;
  let attachedClasses = [classes.Input];
  if (props.isValid && props.touched) {
    attachedClasses.push(classes.Invalid);
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={attachedClasses.join(" ")}
          {...props.elementConfig}
          name={props.name}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          name={props.name}
          className={attachedClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          name={props.name}
          className={attachedClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.display}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = <input {...props} />;
  }
  return (
    <div className={classes.InputElement}>
      <label className={classes.Label} htmlFor={props.name}>
        {props.name}
      </label>
      {inputElement}
    </div>
  );
};

export default Input;
