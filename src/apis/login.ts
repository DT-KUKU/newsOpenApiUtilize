import axios from 'axios';

export async function userLogin({ id, password }: { id: string; password: string }) {
  const response = await axios.post('https://codestates-news.com/login', { id, password });
  return response.data;
}
