import React, { useEffect, useState } from "react";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import Order from "./Order";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const Orders = () => {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  const userRefDoc = collection(db, "users", user?.uid, "orders");
  const userRefDocQuery = query(userRefDoc, orderBy("created", "desc"));

  useEffect(() => {
    if (user && user?.uid) {
      const unsubscribeMessages = onSnapshot(userRefDocQuery, (snapshot) => {
        const ordersData = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setOrders(ordersData);
      });

      return () => {
        unsubscribeMessages();
      };
    }
  }, [user, userRefDocQuery]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders_order">
        {orders.length > 0 ? (
          orders.map((order) => <Order key={order.id} order={order} />)
        ) : (
          <p>No orders available</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
