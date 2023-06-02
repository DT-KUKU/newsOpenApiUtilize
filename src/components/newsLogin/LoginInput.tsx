import { ComponentProps } from 'react';

function LoginInput({ tagName, type, value, onChange }: ComponentProps<'input'> & { tagName: string }) {
  return (
    <div>
      <p>{tagName}</p>
      <input
        className="w-full p-2 border-2 border-solid rounded-md outline-none"
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default LoginInput;
