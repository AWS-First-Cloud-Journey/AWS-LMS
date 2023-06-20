import axios from "axios";
const api = "https://81n6e0oxg7.execute-api.ap-southeast-1.amazonaws.com/dev";

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
    return response.data;
  } catch (error) {
    throw error;
  }
};
