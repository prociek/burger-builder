import React from "react";

import Modal from "../../components/IU/Modal/Modal";
import Auxiliary from "../Auxiliary/Auxiliary";
import useHttpErrorHandler from "../../hooks/http-error-handler";

const withError = (WrappedComponent, axios) => {
  return props => {
    const [error, confirmError] = useHttpErrorHandler(axios);
    return (
      <Auxiliary>
        <Modal purchase={error} modalClosed={confirmError}>
          {error && error.message}
        </Modal>
        <WrappedComponent {...props} />
      </Auxiliary>
    );
  };
};

export default withError;
