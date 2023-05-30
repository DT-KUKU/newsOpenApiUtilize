import { ComponentProps } from 'react';

function SearchInput({ value, onChange }: ComponentProps<'input'>) {
  return (
    <div>
      <p>검색</p>
      <input
        className="w-full max-w-sm p-2 border-2 border-solid rounded-md outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchInput;
