import axios from 'axios';

interface IHeadLineList {
  topic: string;
  country: string;
  page: number;
}

export async function headLineListAPI({ country, topic, page }: IHeadLineList) {
  const response = await axios.get('/v2/latest_headlines', {
    params: {
      countries: country,
      topic: topic,
      page: page,
    },
  });
  return response.data;
}
