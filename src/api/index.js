import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000', // URL base de tu API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Agregar interceptores si es necesario (por ejemplo, para manejar errores o tokens de autenticación)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default apiClient;
