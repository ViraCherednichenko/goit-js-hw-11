import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
form.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();
  const query = e.target.elements["query"].value.trim();

  if (!query) {
    iziToast.warning({ message: "Please enter a search query!" });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);
    hideLoader();

    if (data.hits.length === 0) {
      iziToast.info({
        message: "Sorry, there are no images matching your search query. Please try again!",
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    hideLoader();
    iziToast.error({ message: "Error loading images. Try again later!" });
  }
}