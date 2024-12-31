import apiClient from './index';

export const sendContactForm = async (formData) => {
  try {
    const response = await apiClient.post("/contact/", formData);
    return response.data;
  } catch (error) {
    console.error("Error en sendContactForm:", error);
    throw error;
  }
};