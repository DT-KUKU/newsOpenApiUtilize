import axios from 'axios';
import { ISearchNewsApiProps } from 'components/newsSearch/newsSearchType';

export async function searchNewsListAPI({ search, topic, country, sort, page, include }: ISearchNewsApiProps) {
  const response = await axios.get('/v2/search', {
    params: {
      q: search,
      sort_by: sort,
      topic: topic,
      countries: country,
      page: page,
      search_in: include,
    },
  });
  return response.data;
}
