import axios from "axios";

export const getMove = async (set) => {
  await axios.get("http://localhost:8800/move").then(({ data }) => {
    set(data);
  });
};

export const deleteMove = async (id) => {
  await axios.delete("http://localhost:8800/move/" + id);
};

export const postMove = async (move, set) => {
  axios
    .post("http://localhost:8800/move", move)
    .then(({ data }) => {
      set(data);
    })
    .catch(({ data }) => {
      console.log(data);
    });
};

export const putMove = async (id, move) => {
  axios
    .put("http://localhost:8800/move/" + id, move)
    .then(({ data }) => {
      console.log(data);
    })
    .catch(({ data }) => {
      console.log(data);
    });
};
