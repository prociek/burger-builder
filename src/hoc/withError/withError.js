import React from "react";

import Modal from "../../components/IU/Modal/Modal";
import Aux from "../Auxiliary/Auxiliary";
import useHttpErrorHandler from "../../hooks/http-error-handler";

const withError = (WrappedComponent, axios) => {
  return props => {
    const [error, confirmError] = useHttpErrorHandler(axios);
    return (
      <Aux>
        <Modal purchase={error} modalClosed={confirmError}>
          {error && error.message}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};

export default withError;
