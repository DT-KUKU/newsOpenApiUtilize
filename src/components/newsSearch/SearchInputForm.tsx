import SelectBox from 'components/common/SelectBox';
import { HEADLINE_COUNTRIES, HEADLINE_TOPICS, NEWS_KEYWORD_INCLUDE } from 'utils/constData';
import { ISearchInputFormProps } from './newsSearchType';
import SearchInput from './SearchInput';

function SearchInputForm({
  search,
  country,
  searchIn,
  topic,
  searchInputChangeHandler,
  searchInChangeHandler,
  searchCountryChangeHandler,
  searchTopicChangeHandler,
  searchOnSubmitHandler,
}: ISearchInputFormProps) {
  return (
    <form className="flex flex-col items-center space-y-5" onSubmit={searchOnSubmitHandler}>
      <SearchInput value={search} onChange={searchInputChangeHandler} />
      <div className="flex justify-center w-full gap-10">
        <SelectBox value={searchIn} onChange={searchInChangeHandler} options={NEWS_KEYWORD_INCLUDE} />
        <SelectBox value={topic} onChange={searchTopicChangeHandler} options={HEADLINE_TOPICS} />
        <SelectBox value={country} onChange={searchCountryChangeHandler} options={HEADLINE_COUNTRIES} />
      </div>
      <button className="w-40 h-10 text-white bg-black rounded-md flex-cc">검색</button>
    </form>
  );
}

export default SearchInputForm;
