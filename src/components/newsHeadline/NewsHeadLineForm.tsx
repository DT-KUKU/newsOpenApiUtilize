import Loading from 'components/common/Loading';
import SelectBox from 'components/common/SelectBox';
import useInterSectionObserver from 'hooks/useInterSectionObserver';
import useSelect from 'hooks/useSelect';
import { useState } from 'react';
import { DUMMY, HEADLINE_COUNTRIES, HEADLINE_TOPICS } from 'utils/constData';
import HeadLineCardContent from './HeadLineCardContent';
import { IHeadLineCard } from './headLineType';

function NewsHeadLineForm() {
  const [headLineList, setHeadLine] = useState<IHeadLineCard[]>(DUMMY);
  const [loading, setLoading] = useState<boolean>(false);
  const [topic, setTopic] = useSelect<string>('news');
  const [countries, setCountries] = useSelect<string>('US');
  const [page, setPage] = useState<number>(1);
  const [target] = useInterSectionObserver({
    page: page,
    topic: topic,
    country: countries,
    setLoading: setLoading,
    setHeadLine: setHeadLine,
    setPage: setPage,
  });

  return (
    <div className="w-full h-full">
      <div className="flex justify-center w-full gap-10 ">
        <SelectBox value={topic} onChange={setTopic} options={HEADLINE_TOPICS} />
        <SelectBox value={countries} onChange={setCountries} options={HEADLINE_COUNTRIES} />
      </div>
      {headLineList.length > 0 ? <HeadLineCardContent headLineList={headLineList} /> : <p>사용량이 초과되었습니다.</p>}
      <div className="h-3" ref={target}>
        {loading && <Loading />}
      </div>
    </div>
  );
}

export default NewsHeadLineForm;
