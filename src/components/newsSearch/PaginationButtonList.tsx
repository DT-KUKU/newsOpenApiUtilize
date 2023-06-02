import { IPaginationButton } from './newsSearchType';

function PaginationButtonList({ page, totalPage, next, prev, setPage }: IPaginationButton) {
  const pageCount = Math.ceil(totalPage / 10);
  return (
    <nav>
      <button onClick={prev} disabled={page === 1}>
        {'<'}
      </button>
      {Array(pageCount)
        .fill(0)
        .map((_, idx) => {
          return (
            <button key={idx + 1} onClick={() => setPage(idx + 1)}>
              {idx + 1}
            </button>
          );
        })}
      <button disabled={page === totalPage} onClick={() => next()}>
        {'>'}
      </button>
    </nav>
  );
}

export default PaginationButtonList;
