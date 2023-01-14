import axios from "axios";

export const getReport = async (set) => {
  await axios.get("http://localhost:8800/report").then(({ data }) => {
    set(data);
  });
};