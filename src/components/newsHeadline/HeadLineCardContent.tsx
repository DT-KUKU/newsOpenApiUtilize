import SqureCard from 'components/common/SqureCard';
import { IHeadLineCard } from './headLineType';

function HeadLineCardContent({ headLineList }: { headLineList: IHeadLineCard[] }) {
  return (
    <section className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {headLineList.map((headline, idx) => {
        return (
          <SqureCard key={idx} href={headline.link}>
            <div>
              <p>{headline.title}</p>
              <p>{headline.author}</p>
              <p>{headline.published_date}</p>
              <img src={headline.media} width={50} height={50} />
              <p>{headline.rights}</p>
            </div>
          </SqureCard>
        );
      })}
    </section>
  );
}

export default HeadLineCardContent;
