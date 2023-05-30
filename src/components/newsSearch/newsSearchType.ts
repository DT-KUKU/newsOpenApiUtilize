import { IHeadLineApi } from 'components/newsHeadline/headLineType';

export interface ISearchNewsApiProps {
  search: string;
  topic: string;
  country: string;
  sort: string;
  page: number;
  include?: string;
}

export interface ISearchNewsCard {
  title: string;
  author: string;
  published_date: string;
  summary: string;
  rights: string;
  media: string;
  rank: number;
}

export type SearchNewsApi = IHeadLineApi;
