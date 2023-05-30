import { searchNewsListAPI } from 'apis/searchNews';
import SelectBox from 'components/common/SelectBox';
import { useState } from 'react';
import {
  HEADLINE_COUNTRIES,
  HEADLINE_TOPICS,
  NEWS_KEYWORD_INCLUDE,
  NEWS_PAGENATION_SIZE,
  NEWS_SORT,
} from 'utils/constData';
import { ISearchNewsCard, SearchNewsApi } from './newsSearchType';
import SearchInput from './SearchInput';
import SearchSelectWrapper from './SearchSelectWrapper';

function SearchInputForm({ setNewsList }: { setNewsList: React.Dispatch<React.SetStateAction<ISearchNewsCard[]>> }) {
  const [search, setSearch] = useState<string>('');
  const [include, setInclude] = useState<string>('both');
  const [topic, setTopic] = useState<string>('news');
  const [country, setCountry] = useState<string>('US');
  const [sort, setSort] = useState<string>('relevancy');
  const [pageSize, setPageSize] = useState<number>(5);
  const [page, setPage] = useState<number>(1);

  const includeChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInclude(e.target.value);
  };
  const topicChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTopic(e.target.value);
  };
  const countryChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };
  const sortChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };
  const pageSizeChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(e.target.value));
  };
  const searchInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const searchOnSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search_in = include === 'both' ? '' : include;
    await searchNewsListAPI({ topic, country, search, sort, page: 1, include: search_in }).then(
      (news: SearchNewsApi) => {
        setNewsList(news.articles);
        setPage(1);
      },
    );
  };
  return (
    <form className="flex flex-col items-center space-y-5" onSubmit={searchOnSubmitHandler}>
      <SearchInput value={search} onChange={searchInputChangeHandler} />
      <SearchSelectWrapper>
        <SelectBox defaultValue={include} onChange={includeChangeHandler} options={NEWS_KEYWORD_INCLUDE} />
        <SelectBox defaultValue={topic} onChange={topicChangeHandler} options={HEADLINE_TOPICS} />
        <SelectBox defaultValue={country} onChange={countryChangeHandler} options={HEADLINE_COUNTRIES} />
        <SelectBox defaultValue={sort} onChange={sortChangeHandler} options={NEWS_SORT} />
        <SelectBox defaultValue={pageSize} onChange={pageSizeChangeHandler} options={NEWS_PAGENATION_SIZE} />
      </SearchSelectWrapper>
      <button className="w-40 h-10 text-white bg-black rounded-md flex-cc">검색</button>
    </form>
  );
}

export default SearchInputForm;
