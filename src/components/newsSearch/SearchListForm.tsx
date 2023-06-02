import { searchNewsListAPI } from 'apis/searchNews';
import Loading from 'components/common/Loading';
import PaginationButtonList from 'components/newsSearch/PaginationButtonList';
import SelectBox from 'components/common/SelectBox';
import useInput from 'hooks/useInput';
import usePagination from 'hooks/usePagination';
import useSelect from 'hooks/useSelect';
import { useState } from 'react';
import { NEWS_PAGENATION_SIZE, NEWS_SORT } from 'utils/constData';
import { ISearchNewsCard, SearchNewsApi } from './newsSearchType';
import SearchInputForm from './SearchInputForm';
import SearchListContents from './SearchListContents';

function SearchListForm() {
  const [newsList, setNewsList] = useState<ISearchNewsCard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalPage, setTotalPage] = useState<number>(500);
  const [search, setSearch] = useInput('');
  const [searchIn, setSearchIn] = useSelect<string>('title_summary');
  const [topic, setTopic] = useSelect<string>('news');
  const [country, setCountry] = useSelect<string>('US');
  const [sort, setSort] = useSelect<string>('relevancy');
  const [pageSize, setPageSize] = useSelect<number>(5);
  const [page, setPage, nextPage, prevPage] = usePagination({ totalPage: totalPage });

  const searchNewsListApiHandler = async () => {
    try {
      setLoading((prev) => !prev);
      const newsListResponse: SearchNewsApi = await searchNewsListAPI({ topic, search, country, page, searchIn, sort });
      setNewsList(newsListResponse.articles);
      setTotalPage(newsListResponse.total_pages);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading((prev) => !prev);
    }
  };

  const searchSortChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e);
    setPage(1);
    searchNewsListApiHandler();
  };

  const searchPageSizeChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(e);
    setPage(1);
    searchNewsListApiHandler();
  };

  const searchOnSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (search) searchNewsListApiHandler();
    // else alert('키워드를 입력해주세요.');
  };

  return (
    <div className="w-full h-full">
      <SearchInputForm
        search={search}
        searchIn={searchIn}
        country={country}
        topic={topic}
        searchInputChangeHandler={setSearch}
        searchInChangeHandler={setSearchIn}
        searchCountryChangeHandler={setCountry}
        searchTopicChangeHandler={setTopic}
        searchOnSubmitHandler={searchOnSubmitHandler}
      />
      <SelectBox value={sort} options={NEWS_SORT} onChange={searchSortChangeHandler} />
      <SelectBox value={pageSize} options={NEWS_PAGENATION_SIZE} onChange={searchPageSizeChangeHandler} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <SearchListContents post={newsList} />
          <PaginationButtonList prev={prevPage} page={page} setPage={setPage} next={nextPage} totalPage={totalPage} />
        </>
      )}

      {/* {newsList.length > 0 && <PaginationButtonList />} */}
    </div>
  );
}

export default SearchListForm;
