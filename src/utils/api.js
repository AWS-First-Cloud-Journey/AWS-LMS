import axios from "axios";
const api = "https://wzw0yg6cm0.execute-api.ap-southeast-1.amazonaws.com/dev";

export const getCourseById = async (id) => {
  try {
    const response = await axios({
      method: "get",
      url: `${api}/course/${id}/`,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getVidById = async (id) => {
  try {
    const response = await axios({
      method: "get",
      url: `${api}/course/resrc/${id}`,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const uploadLecture = async (data) => {
  try {
    const response = await axios({
      method: "post",
      url: `${api}/course/lec`,
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(response)
    return response;
  } catch (err) {
    throw err;
  }
};

export const getAllLecture = async () => {
  try {
    const response = await axios({
      method: "get",
      url: `${api}/course/lec`,
    });
    console.log(response)
    return response;
  } catch (err) {
    throw err;
  }
};
