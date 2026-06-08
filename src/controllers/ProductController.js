import axios from 'axios';

const BASE = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}`;

export const getProducts = async (category) => {
  const params = category && category !== '全部商品' ? { category } : {};
  const res = await axios.get(`${BASE}/products`, { params });
  return res.data.products;
};

export const getAllProducts = async () => {
  const res = await axios.get(`${BASE}/products/all`);
  return res.data.products;
};

export const getProductById = async (id) => {
  const res = await axios.get(`${BASE}/product/${id}`);
  return res.data.product;
};

export const getSameProducts = async (category) => {
  const res = await axios.get(`${BASE}/products`, { params: { category } });
  return res.data.products;
};
