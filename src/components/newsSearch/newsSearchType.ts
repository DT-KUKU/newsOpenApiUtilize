export interface SearchNewsApi {
  status: string;
  total_hits: number;
  page: number;
  total_pages: number;
  page_size: number;
  articles: [
    {
      title: string;
      author: string;
      published_date: string;
      published_date_precision: string;
      link: string;
      clean_url: string;
      excerpt: string;
      summary: string;
      rights: string;
      rank: number;
      topic: string;
      country: string;
      language: string;
      authors: string[];
      media: string;
      is_opinion: boolean;
      _id: string;
    },
  ];
}

export interface ISearchNewsCard {
  title: string;
  author: string;
  published_date: string;
  summary: string;
  rights: string;
  media: string;
  rank: number;
  link: string;
}

export interface ISearchInputFormProps {
  search: string;
  searchIn: string | number;
  topic: string | number;
  country: string | number;
  searchOnSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  searchInputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchInChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  searchTopicChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  searchCountryChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface IPaginationButton {
  page: number;
  totalPage: number;
  setPage: (num: number) => void;
  next: () => void;
  prev: () => void;
}
