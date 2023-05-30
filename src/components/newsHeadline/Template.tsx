import SelectBox from 'components/common/SelectBox';
import useInterSectionObserver from 'hooks/useInterSectionObserver';
import { useState } from 'react';
import { DUMMY, HEADLINE_COUNTRIES, HEADLINE_TOPICS } from 'utils/constData';
import HeadLineCardContent from './HeadLineCardContent';
import HeadLineContentWrapper from './HeadLineContentWrapper';
import HeadLineSelectWrapper from './HeadLineSelectWrapper';
import { IHeadLineCard } from './headLineType';

function Template() {
  const [headLineList, setHeadLine] = useState<IHeadLineCard[]>(DUMMY);
  const [topic, setTopic] = useState<string>('news');
  const [countries, setCountries] = useState<string>('US');
  const [page, setPage] = useState<number>(1);
  const [target] = useInterSectionObserver({
    page: page,
    topic: topic,
    country: countries,
    setHeadLine: setHeadLine,
    setPage: setPage,
  });

  const topicChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTopic(e.target.value);
  };

  const countryChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountries(e.target.value);
  };

  return (
    <div className="w-full h-full">
      <HeadLineSelectWrapper>
        <SelectBox defaultValue={topic} onChange={topicChangeHandler} options={HEADLINE_TOPICS} />
        <SelectBox defaultValue={countries} onChange={countryChangeHandler} options={HEADLINE_COUNTRIES} />
      </HeadLineSelectWrapper>

      <HeadLineContentWrapper>
        {headLineList.length > 0 ? (
          headLineList.map((el, idx) => {
            return <HeadLineCardContent key={idx} cardInfo={el} />;
          })
        ) : (
          <p>API 사용량을 전부 사용했습니다.</p>
        )}
      </HeadLineContentWrapper>
      <div className="h-3" ref={target} />
    </div>
  );
}

export default Template;
