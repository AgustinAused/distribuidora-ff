import axios from 'axios';

const sendContactForm = async (formData) => {
    try {
        const response = await axios.post('http://localhost:8000/contact', formData);
        alert(response.data.message);
    } catch (error) {
        console.error('Error al enviar el formulario:', error.response?.data?.detail || error.message);
        alert('No se pudo enviar el mensaje. Inténtalo más tarde.');
    }
};