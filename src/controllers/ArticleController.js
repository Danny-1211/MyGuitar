import axios from 'axios';

const BASE = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}`;

export const getArticles = async () => {
  const res = await axios.get(`${BASE}/articles`);
  return res.data.articles;
};

export const getArticleById = async (id) => {
  const res = await axios.get(`${BASE}/article/${id}`);
  return res.data.article;
};
