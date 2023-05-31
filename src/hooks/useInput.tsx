import { useCallback, useState } from 'react';

function useInput(initial: string) {
  const [useValue, setUseValue] = useState<string>(initial);

  const useValueChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUseValue(e.target.value);
  }, []);

  return [useValue, useValueChangeHandler] as const;
}

export default useInput;
