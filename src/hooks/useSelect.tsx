import { useCallback, useState } from 'react';

function useSelect<T extends string | number>(initial: T) {
  const [useSelect, setUseSelect] = useState<T>(initial);

  const useSelectChangeHandler = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    if (typeof initial === 'string') setUseSelect(e.target.value as T);
    if (typeof initial === 'number') setUseSelect(Number(e.target.value) as T);
  }, []);

  return [useSelect, useSelectChangeHandler] as const;
}
export default useSelect;
