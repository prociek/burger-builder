import React from "react";
import axios from "../../axios-orders";
import withError from "../../hoc/withError/withError";
import Order from "../../components/Order/Order";
import Spinner from "../../components/IU/Spinner/Spinner";

import classes from "./Orders.module.css";

class Orders extends React.Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const orders = [];
        for (let key in res.data) {
          orders.push({
            ...res.data[key],
            id: key,
          });
        }
        this.setState({ orders, loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  render() {
    return this.state.loading ? (
      <Spinner />
    ) : (
      <section className={classes.Orders}>
        <h2>Your orders: </h2>
        {this.state.orders.map((o) => (
          <Order key={o.id} {...o} />
        ))}
      </section>
    );
  }
}

export default withError(Orders, axios);
