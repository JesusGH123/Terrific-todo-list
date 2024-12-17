export const API_BASE_URL = import.meta.env.VITE_API_DEV_URL;
export const API_URLS = {
  GET_CHORES: `${API_BASE_URL}/chores`,
  CREATE_CHORE: `${API_BASE_URL}/chore`,
  DELETE_CHORE: `${API_BASE_URL}/chore`,
  UPDATE_CHORE: `${API_BASE_URL}/chore`
};