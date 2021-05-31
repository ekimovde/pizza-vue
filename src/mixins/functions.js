import store from "@/store/index.js";
import axios from "axios";

export function saveDataForLocalStorage(name, data) {
  localStorage.setItem(name, data);
}

export async function requestData(elementState, request, params = null) {
  try {
    let { data } = await axios.get(`http://localhost:3004/${request}`, {
      params,
    });

    store.commit("setArray", { elementState, data });
  } catch (e) {
    console.log(e);
  }
}
