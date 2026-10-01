import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext(null);

const ORDER_STORAGE_KEY = "bookmyproblem_orders";

const getOrdersFromStorage = () => {
  try {
    const saved = localStorage.getItem(ORDER_STORAGE_KEY);
    if (!saved) return [];

    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Orders load error:", error);
    return [];
  }
};

const getCurrentCustomer = () => {
  try {
    const savedCustomer = localStorage.getItem(
      "bookmyproblem_current_customer"
    );

    if (!savedCustomer) return null;

    return JSON.parse(savedCustomer);
  } catch (error) {
    console.error("Customer load error:", error);
    return null;
  }
};

const generateOrderId = () => {
  const orders = getOrdersFromStorage();

  let maxNumber = 1000;

  orders.forEach((order) => {
    const match = String(order.orderId || "").match(/BMP-REQ-(\d+)/);

    if (match) {
      const number = Number(match[1]);

      if (number > maxNumber) {
        maxNumber = number;
      }
    }
  });

  return `BMP-REQ-${maxNumber + 1}`;
};

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(getOrdersFromStorage);

  const saveOrders = (updatedOrders) => {
    setOrders(updatedOrders);

    localStorage.setItem(
      ORDER_STORAGE_KEY,
      JSON.stringify(updatedOrders)
    );
  };

  const createOrder = ({
    cartItems,
    paymentMethod,
    location,
  }) => {
    const customer = getCurrentCustomer();

    const orderId = generateOrderId();

    const services = cartItems.map((item) => ({
      id: item.id,
      title: item.title || item.name || "Service",
      name: item.name || item.title || "Service",
      quantity: Number(item.quantity || 1),
      price: Number(item.price || 0),
      image: item.image || "",
      bookingDate: item.bookingDate || "",
      bookingTime: item.bookingTime || "",
    }));

    const total = services.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const newOrder = {
      orderId,

      customerId:
        customer?.id ||
        customer?._id ||
        customer?.email ||
        "guest",

      customer: {
        name:
          customer?.name ||
          customer?.fullName ||
          customer?.username ||
          "Customer",

        email: customer?.email || "",

        phone:
          customer?.phone ||
          customer?.mobile ||
          "",
      },

      services,

      location:
        location ||
        localStorage.getItem("bookmyproblem_location") ||
        "",

      total,

      paymentMethod,

      paymentStatus:
        paymentMethod === "Cash on Service"
          ? "Pending"
          : "Pending",

      status: "Confirmed",

      createdAt: new Date().toISOString(),

      professional: null,

      timeline: [
        {
          status: "Request Submitted",
          completed: true,
        },
        {
          status: "Request Confirmed",
          completed: true,
        },
        {
          status: "Professional Assigned",
          completed: false,
        },
        {
          status: "On The Way",
          completed: false,
        },
        {
          status: "In Progress",
          completed: false,
        },
        {
          status: "Completed",
          completed: false,
        },
      ],
    };

    const updatedOrders = [newOrder, ...orders];

    saveOrders(updatedOrders);

    return newOrder;
  };

  const getCustomerOrders = () => {
    const customer = getCurrentCustomer();

    if (!customer) {
      return [];
    }

    const customerId =
      customer.id ||
      customer._id ||
      customer.email ||
      "guest";

    return orders.filter(
      (order) => order.customerId === customerId
    );
  };

  const getOrderById = (orderId) => {
    return orders.find(
      (order) => order.orderId === orderId
    );
  };

  const cancelOrder = (orderId) => {
    const updatedOrders = orders.map((order) => {
      if (order.orderId !== orderId) {
        return order;
      }

      return {
        ...order,
        status: "Cancelled",
      };
    });

    saveOrders(updatedOrders);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        createOrder,
        getCustomerOrders,
        getOrderById,
        cancelOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error(
      "useOrder must be used inside OrderProvider"
    );
  }

  return context;
};