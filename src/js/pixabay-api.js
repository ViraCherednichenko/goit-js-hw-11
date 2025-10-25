import axios from "axios";
const PIXABAY_KEY = "52890208-7e9e33748fa955c38ee9e6aa5";
const perPage = 40;

const api = axios.create({
  baseURL: "https://pixabay.com/api/",
  timeout: 10000,
  params: {
    key: PIXABAY_KEY,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: perPage,
  },
});

export async function getImagesByQuery(query) {
  const response = await api.get("/", { params: { q: query } });
  return response.data;
}

