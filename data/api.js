import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true
});

export const injectScript = src => {
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

export default API;

export const verifyPaystack = async ({ ref }) => {
  try {
    const { data } = await API.get(`/orders/verify/${ref}`);
    const { message } = data;
    console.log(message);

    let currentUrl = window.location.pathname;
    window.location.replace(currentUrl);
  } catch (e) {
    const { message } = e.response.data;

    toast.error(message, {
      progressClassName: "progress-bar"
    });
  }
};
