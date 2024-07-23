import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const getCharacters = async (page: number, name: string = '') => {
  const response = await api.get(`/character?page=${page}&name=${name}`);
  return response.data;
};

export const getCharacterById = async (id: number) => {
  const response = await api.get(`/character/${id}`);
  return response.data;
};
