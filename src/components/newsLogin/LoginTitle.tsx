import { StrictPropsWithChildren } from 'components/common/commonType';

function LoginTitle({ children }: StrictPropsWithChildren) {
  return <p className="text-3xl">{children}</p>;
}

export default LoginTitle;
