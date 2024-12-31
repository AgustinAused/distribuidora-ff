import axios from 'axios';

export const sendContactForm = async (formData) => {
  try {
    const response = await axios.post("/contact/", formData);
    return response;
  } catch (error) {
    console.error("Error en sendContactForm:", error);
    throw error;
  }
};