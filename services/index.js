import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

export const createChord = async (data) => {
  try {
    const response = await api.post("/chord", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
