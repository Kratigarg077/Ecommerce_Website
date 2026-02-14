import axios from "axios";

const API_URL = "http://localhost:3000/users";

// Get all users
export const getUsers = () => axios.get(API_URL);

// Update user
export const updateUser = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);

// Create user
export const createUser = (data) =>
  axios.post(API_URL, data);
