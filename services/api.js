import axios from "axios";
import { toast } from "react-toastify";

const API = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://tutorialized.amaniart.net",
  withCredentials: false,
});

export const injectScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    script.addEventListener("load", resolve);
    script.addEventListener("error", () => reject("Error loading script."));
    script.addEventListener("abort", () => reject("Script loading aborted."));
    document.head.appendChild(script);
  });
};

export const verifyPaystack = async ({ ref }) => {
  try {
    const { data } = await API.get(`/orders/verify/${ref}`);
    const { message } = data;

    toast.success(`${message} Uploaded Successfuly`, {
      progressClassName: "progress-bar",
    });

    let currentUrl = window.location.pathname;
    window.location.replace(currentUrl);
  } catch (e) {
    const { message } = e.response.data;

    toast.error(message, {
      progressClassName: "progress-bar",
    });
  }
};

export default API;
