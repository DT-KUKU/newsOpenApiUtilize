import { headLineListAPI } from 'apis/headline';
import { IHeadLineApi, IHeadLineCard } from 'components/newsHeadline/headLineType';
import { useEffect, useRef, useState } from 'react';

interface IInterSectionObserver {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setHeadLine: React.Dispatch<React.SetStateAction<IHeadLineCard[]>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  topic: string;
  country: string;
  page: number;
}

function useInterSectionObserver({ setHeadLine, topic, country, page, setPage, setLoading }: IInterSectionObserver) {
  const target = useRef(null);
  const [hasNextPage, setHasNextPage] = useState(true);

  const getHeadLineListApiHandler = async () => {
    try {
      setLoading(true);
      const headlineResponse: IHeadLineApi = await headLineListAPI({ topic, country, page });
      setHeadLine((prev) => [...prev, ...headlineResponse.articles]);
      if (page + 1 === headlineResponse.total_pages) setHasNextPage(false);
      setPage((prev) => {
        return prev + 1;
      });
    } catch (e: any) {
      if (e.request.status === 401) {
        alert('API 사용량이 만료되었습니다.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (page !== 1) {
      setPage(1);
      setHeadLine([]);
      setHasNextPage(true);
    }
  }, [topic, country]);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          getHeadLineListApiHandler();
        }
      },
      { threshold: 0 },
    );
    if (target.current && hasNextPage) {
      io.observe(target.current);
    }
    return () => io.disconnect();
  }, [hasNextPage, topic, country, page]);

  return [target] as const;
}

export default useInterSectionObserver;
