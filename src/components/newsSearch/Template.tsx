import { useState } from 'react';
import { ISearchNewsCard } from './newsSearchType';
import SearchInputForm from './SearchInputForm';
import SearchListForm from './SearchListForm';

function Template() {
  const [newsList, setNewsList] = useState<ISearchNewsCard[]>([]);

  return (
    <div className="w-full h-full">
      <SearchInputForm setNewsList={setNewsList} />
      <SearchListForm />
    </div>
  );
}

export default Template;
