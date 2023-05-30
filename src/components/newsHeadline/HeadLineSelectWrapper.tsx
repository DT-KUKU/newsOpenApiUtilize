import { StrictPropsWithChildren } from 'components/common/commonType';

function HeadLineSelectWrapper({ children }: StrictPropsWithChildren) {
  return <div className="flex justify-center w-full gap-10 ">{children}</div>;
}

export default HeadLineSelectWrapper;
