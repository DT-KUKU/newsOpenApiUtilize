import { ComponentProps } from 'react';

function SelectBox({ value, options, onChange }: ComponentProps<'select'> & { options: { value: string | number }[] }) {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option, idx) => {
        return (
          <option key={idx} value={option.value}>
            {option.value}
          </option>
        );
      })}
    </select>
  );
}

export default SelectBox;
