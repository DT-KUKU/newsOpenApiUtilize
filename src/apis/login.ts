import axios from 'axios';

export async function userLoginAPI({ id, password }: { id: string; password: string }) {
  try {
    const response = await axios.post('https://codestates-news.com/login', { id, password });
    return response.data;
  } catch (e) {
    console.error(e);
  }
}
