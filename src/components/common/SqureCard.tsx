import { ComponentProps } from 'react';
import { StrictPropsWithChildren } from './commonType';

function SqureCard({ children, href }: StrictPropsWithChildren<ComponentProps<'a'>>) {
  return (
    <a
      href={href}
      target="_blank"
      className='flex items-center justify-center px-3 py-3 transition-transform ease-in-out border-2 rounded-md shadow-md cursor-pointer border-neutral-300 hover:border-neutral-400 hover:scale-105"'
    >
      {children}
    </a>
  );
}

export default SqureCard;
