import { useState } from 'react';

function usePagination({ totalPage }: { totalPage: number }) {
  const [page, setPage] = useState<number>(1);
  const maxPage = totalPage;

  const setPageHandler = (num: number) => {
    setPage(num);
  };

  const nextPageHandler = () => {
    setPage((prev) => {
      if (prev + 1 >= maxPage) {
        return prev;
      }
      return prev + 1;
    });
  };

  const prevPageHandler = () => {
    setPage((prev) => {
      if (!(prev - 1)) {
        return prev;
      }
      return prev - 1;
    });
  };
  return [page, setPageHandler, nextPageHandler, prevPageHandler] as const;
}

export default usePagination;
