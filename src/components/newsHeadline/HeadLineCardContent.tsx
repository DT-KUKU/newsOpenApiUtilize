import NewsCardWrapper from 'components/common/NewsCardWrapper';
import { IHeadLineCard } from './headLineType';

function HeadLineCardContent({ cardInfo }: { cardInfo: IHeadLineCard }) {
  return (
    <NewsCardWrapper href={cardInfo.link}>
      <div>
        <p>{cardInfo.title}</p>
        <p>{cardInfo.author}</p>
        <p>{cardInfo.published_date}</p>
        <img src={cardInfo.media} width={50} height={50} />
        <p>{cardInfo.rights}</p>
      </div>
    </NewsCardWrapper>
  );
}

export default HeadLineCardContent;
