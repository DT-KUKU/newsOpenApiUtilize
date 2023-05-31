import axios from 'axios';
import { IInterSectionObserverProps } from 'components/newsHeadline/headLineType';

export async function headLineInfinityScrollAPI({
  country,
  topic,
  page,
}: Omit<IInterSectionObserverProps, 'setHeadLine' | 'setPage'>) {
  const response = await axios.get('/v2/latest_headlines', {
    params: {
      countries: country,
      topic: topic,
      page: page,
    },
  });
  return response.data;
}
