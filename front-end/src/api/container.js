import axios from "axios";

export const getContainer = async (set) => {
  await axios.get("http://localhost:8800/").then(({ data }) => {
    set(data);
  });
};

export const deleteContainer = async (id) => {
  await axios.delete("http://localhost:8800/" + id);
};

export const postContainer = async (container) => {
  axios
    .post("http://localhost:8800/", container)
    .then(({ data }) => {
      console.log(data);
    })
    .catch(({ data }) => {
      console.log(data);
    });
};

export const putContainer = async (id, container) => {
  axios
    .put("http://localhost:8800/" + id, container)
    .then(({ data }) => {
      console.log(data);
    })
    .catch(({ data }) => {
      console.log(data);
    });
};
