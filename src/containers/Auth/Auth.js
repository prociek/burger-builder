import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Input from "../../components/IU/Input/Input";
import Button from "../../components/IU/Button/Button";
import Spinner from "../../components/IU/Spinner/Spinner";
import classes from "./Auth.module.css";
import { authenticate, setAuthRedirectPath } from "../../store/actions";
import { checkValidation } from "../../shared/utility";

const Auth = props => {
  const [controls, setControls] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Your e-mail"
      },
      value: "",
      validation: {
        required: true,
        isEmail: true
      },
      isValid: false,
      touched: false
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Password"
      },
      value: "",
      validation: {
        required: true,
        minLength: 6
      },
      isValid: false,
      touched: false
    }
  });
  const { building, onSetAuthRedirectPath } = props;

  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    if (!building) {
      onSetAuthRedirectPath("/");
    } else {
      onSetAuthRedirectPath("/checkout");
    }
  }, [building, onSetAuthRedirectPath]);

  const switchModeHandler = () => {
    setIsSignUp(prevState => {
      return !prevState;
    });
  };

  const onChangeHandler = e => {
    const newInput = {
      ...controls[e.target.name],
      value: e.target.value,
      isValid: checkValidation(
        e.target.value,
        controls[e.target.name].validation
      ),
      touched: true
    };
    const newControls = { ...controls, [e.target.name]: newInput };
    setControls(newControls);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onAuthenicate(
      controls.email.value,
      controls.password.value,
      isSignUp
    );
  };

  let inputs = [];
  for (let key in controls) {
    inputs.push(
      <Input
        key={key}
        name={key}
        elementType={controls[key].elementType}
        elementConfig={controls[key].elementConfig}
        value={controls[key].value}
        isValid={!controls[key].isValid}
        touched={controls[key].touched}
        changed={onChangeHandler}
      />
    );
  }
  return (
    <section className={classes.Auth}>
      {props.loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {props.isAuth && <Redirect to={props.redirectPath} />}
          <form onSubmit={handleSubmit}>
            <h4>Welcome!</h4>
            {inputs}
            {props.error && (
              <p style={{ textAlign: "center", color: "red" }}>
                {props.error.message.toLowerCase().split("_").join(" ")}
              </p>
            )}
            <Button type="submit" btnType="Success">
              {isSignUp ? "Sign Up" : "Log in"}
            </Button>
          </form>
          <small>
            {isSignUp ? "Have alredy account" : "Don't have a account?"}
          </small>
          <Button type="button" clicked={switchModeHandler} btnType="Primary">
            {isSignUp ? "log in" : "sign up"}
          </Button>
        </React.Fragment>
      )}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.user.loading,
    error: state.user.error,
    isAuth: state.user.token != null,
    building: state.burger.building,
    redirectPath: state.user.redirectPath
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuthenicate: (email, password, isSignUp) =>
      dispatch(authenticate(email, password, isSignUp)),
    onSetAuthRedirectPath: path => dispatch(setAuthRedirectPath(path))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
