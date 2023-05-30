import { StrictPropsWithChildren } from 'components/common/commonType';

function HeadLineContentWrapper({ children }: StrictPropsWithChildren) {
  return (
    <section className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">{children}</section>
  );
}

export default HeadLineContentWrapper;
