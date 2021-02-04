import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Input from "../../components/IU/Input/Input";
import Button from "../../components/IU/Button/Button";
import Spinner from "../../components/IU/Spinner/Spinner";
import classes from "./Auth.module.css";
import { authenticate, setAuthRedirectPath } from "../../store/actions";
import { checkValidation } from "../../shared/utility";

class Auth extends React.Component {
  state = {
    controls: {
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
    },
    isSignUp: false
  };

  componentDidMount() {
    if (!this.props.building) {
      this.props.onSetAuthRedirectPath("/");
    } else {
      this.props.onSetAuthRedirectPath("/checkout");
    }
  }

  switchModeHandler = () => {
    this.setState(prevState => {
      return { ...this.state, isSignUp: !prevState.isSignUp };
    });
  };

  onChangeHandler = e => {
    const newInput = {
      ...this.state.controls[e.target.name],
      value: e.target.value,
      isValid: checkValidation(
        e.target.value,
        this.state.controls[e.target.name].validation
      ),
      touched: true
    };
    const controls = { ...this.state.controls, [e.target.name]: newInput };
    this.setState({
      controls
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAuthenicate(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignUp
    );
  };

  render() {
    let inputs = [];
    for (let key in this.state.controls) {
      inputs.push(
        <Input
          key={key}
          name={key}
          elementType={this.state.controls[key].elementType}
          elementConfig={this.state.controls[key].elementConfig}
          value={this.state.controls[key].value}
          isValid={!this.state.controls[key].isValid}
          touched={this.state.controls[key].touched}
          changed={this.onChangeHandler}
        />
      );
    }
    return (
      <section className={classes.Auth}>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            {this.props.isAuth && <Redirect to={this.props.redirectPath} />}
            <form onSubmit={this.handleSubmit}>
              <h4>Welcome!</h4>
              {inputs}
              {this.props.error && (
                <p style={{ textAlign: "center", color: "red" }}>
                  {this.props.error.message.toLowerCase().split("_").join(" ")}
                </p>
              )}
              <Button type="submit" btnType="Success">
                {this.state.isSignUp ? "Sign Up" : "Log in"}
              </Button>
            </form>
            <small>
              {this.state.isSignUp
                ? "Have alredy account"
                : "Don't have a account?"}
            </small>
            <Button
              type="button"
              clicked={this.switchModeHandler}
              btnType="Primary"
            >
              {this.state.isSignUp ? "log in" : "sign up"}
            </Button>
          </React.Fragment>
        )}
      </section>
    );
  }
}

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
