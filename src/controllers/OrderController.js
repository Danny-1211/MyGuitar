import axios from 'axios';

const BASE = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}`;

export const createOrder = async (form) => {
  const res = await axios.post(`${BASE}/order`, { data: form });
  return res.data;
};

export const getOrderById = async (orderId) => {
  const res = await axios.get(`${BASE}/order/${orderId}`);
  return res.data.order;
};

export const payOrder = async (orderId) => {
  const res = await axios.post(`${BASE}/pay/${orderId}`);
  return res.data;
};
