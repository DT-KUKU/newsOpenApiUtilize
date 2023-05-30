import { headLineInfinityScrollAPI } from 'apis/headline';
import { IHeadLineApi, IInterSectionObserverProps } from 'components/newsHeadline/headLineType';
import { useEffect, useRef, useState } from 'react';

function useInterSectionObserver({ setHeadLine, topic, country, page, setPage }: IInterSectionObserverProps) {
  const target = useRef(null);
  const [hasNextPage, setHasNextPage] = useState(true);

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
          console.log('ObserverPage', page, hasNextPage);
          headLineInfinityScrollAPI({ topic, country, page })
            .then((headline: IHeadLineApi) => {
              setHeadLine((prev) => [...prev, ...headline.articles]);
              if (page + 1 === headline.total_pages) setHasNextPage(false);
              setPage((prev) => {
                return prev + 1;
              });
            })
            .catch(() => {
              alert('사용량을 초과하였습니다.');
            });
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
