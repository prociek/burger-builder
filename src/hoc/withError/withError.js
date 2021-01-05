import React from "react";

import Modal from "../../components/IU/Modal/Modal";
import Aux from "../Aux/Aux";

const withError = (WrappedComponent, axios) => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        initialized: false,
        error: null,
      };
    }

    componentDidMount() {
      this.requestInterceptor = axios.interceptors.request.use(
        (req) => {
          this.setState({ error: null });
          return req;
        },
        (err) => {
          this.setState({ error: err });
        }
      );

      this.responseInterceptor = axios.interceptors.response.use(
        (res) => res,
        (err) => {
          this.setState({ error: err });
        }
      );
      this.setState({ initialized: true });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);
    }

    confirmError = () => {
      this.setState({ error: null });
    };

    render() {
      if (!this.state.initialized) return null;
      return (
        <Aux>
          <Modal purchase={this.state.error} modalClosed={this.confirmError}>
            {this.state.error && this.state.error.message}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withError;
