import apiClient from './index';

// Crear un producto
export const createProduct = async (productData) => {
  const response = await apiClient.post('/products', productData);
  return response.data;
};

// Obtener un producto por autopart_id
export const getProductByAutopartId = async (autopartId) => {
  const response = await apiClient.get(`/products/${autopartId}`);
  return response.data;
};

// Obtener todos los productos
export const getAllProducts = async () => {
  const response = await apiClient.get('/products');
  return response.data;
};

// Actualizar un producto
export const updateProduct = async (autopartId, productData) => {
  const response = await apiClient.put(`/products/${autopartId}`, productData);
  return response.data;
};

// Eliminar un producto
export const deleteProduct = async (autopartId) => {
  const response = await apiClient.delete(`/products/${autopartId}`);
  return response.data;
};
