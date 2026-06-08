import axios from 'axios';

const BASE = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}`;

export const getCart = async () => {
  const res = await axios.get(`${BASE}/cart`);
  return res.data.data;
};

export const addToCart = async (productId, qty) => {
  const res = await axios.post(`${BASE}/cart`, { data: { product_id: productId, qty } });
  return res.data;
};

export const updateCartItem = async (cartItemId, productId, qty) => {
  const res = await axios.put(`${BASE}/cart/${cartItemId}`, { data: { product_id: productId, qty } });
  return res.data;
};

export const deleteCartItem = async (itemId) => {
  const res = await axios.delete(`${BASE}/cart/${itemId}`);
  return res.data;
};

export const deleteAllCart = async () => {
  const res = await axios.delete(`${BASE}/carts`);
  return res.data;
};

export const applyCoupon = async (code) => {
  const res = await axios.post(`${BASE}/coupon`, { data: { code } });
  return res.data;
};
