import axiosClient from "./axios.client";

//signup
export const userSignUp = async ({ username, password }) => {
  try {
    const response = await axiosClient.post("user/signup", {
      username,
      password,
    });

    return { response };
  } catch (error) {
    return { error };
  }
};

//signin
export const userSignIn = async ({ username, password }) => {
  try {
    const response = await axiosClient.post("user/signin", {
      username,
      password,
    });

    return { response };
  } catch (error) {
    return { error };
  }
};

//checkToken
export const userCheckTkn = async () => {
  try {
    const response = await axiosClient.get("user/check-token");

    return { response };
  } catch (error) {
    return { error };
  }
};
