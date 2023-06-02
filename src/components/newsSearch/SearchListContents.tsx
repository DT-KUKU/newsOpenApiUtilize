import SqureCard from 'components/common/SqureCard';
import { ISearchNewsCard } from './newsSearchType';

function SearchListContents({ post }: { post: ISearchNewsCard[] }) {
  return (
    <div className="w-full">
      {post.map((news) => {
        return (
          <SqureCard href={news.link}>
            <p>{news.author}</p>
            <p>{news.title}</p>
            <p className="max-w-[20rem]">{news.summary}</p>
            <img src={news.media} width={50} height={50} />
            <p>{news.published_date}</p>
            <p>{news.rights}</p>
            <p>{news.rank}</p>
          </SqureCard>
        );
      })}
    </div>
  );
}

export default SearchListContents;
