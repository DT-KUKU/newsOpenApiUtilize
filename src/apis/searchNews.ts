import axios from 'axios';

interface ISearchNewsList {
  search: string;
  topic: string;
  country: string;
  sort: string;
  page: number;
  searchIn: string;
}

export async function searchNewsListAPI({ search, topic, country, sort, page, searchIn }: ISearchNewsList) {
  const response = await axios.get('/v2/search', {
    params: {
      q: search,
      sort_by: sort,
      topic: topic,
      countries: country,
      page: page,
      search_in: searchIn,
    },
  });
  return response.data;
}
