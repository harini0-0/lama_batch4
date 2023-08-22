import { myAxios } from "./helper";


export const loginUser = async (userId, password) => {
  return await myAxios
    .post("/auth/login", {userId, password})
    .then((response) => response.data);
};

export const getUser = (userId) => {
  return myAxios.get(`/users/${userId}`).then((resp) => resp.data);
};