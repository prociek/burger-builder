import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "../../axios-orders";
import withError from "../../hoc/withError/withError";
import Order from "../../components/Order/Order";
import Spinner from "../../components/IU/Spinner/Spinner";
import { fetchOrders } from "../../store/actions";

import classes from "./Orders.module.css";

const Orders = ({ onFetchOrders, token, userId, loading, orders }) => {
  useEffect(() => {
    onFetchOrders(token, userId);
  }, [onFetchOrders, token, userId]);

  return loading ? (
    <Spinner />
  ) : (
    <section className={classes.Orders}>
      <h2>Your orders: </h2>
      {orders.map(o => (
        <Order key={o.id} {...o} />
      ))}
    </section>
  );
};

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.user.token,
    userId: state.user.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) => dispatch(fetchOrders(token, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withError(Orders, axios));
