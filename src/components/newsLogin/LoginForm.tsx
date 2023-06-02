import { userState } from 'atoms/userState';
import LoginInput from 'components/newsLogin/LoginInput';
import useInput from 'hooks/useInput';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { USERID1, USERID2, USERPW1, USERPW2 } from 'utils/constData';
import { setLocalStorage } from 'utils/localStorage';

function LoginForm() {
  const [userId, setUserId] = useInput('');
  const [userPassword, setUserPassword] = useInput('');
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  const loginSuccessHandler = () => {
    navigate('/');
    setLocalStorage('loginSuccess');
    setUser('loginSuccess');
  };

  const userLoginSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userId === USERID1 && userPassword === USERPW1) {
      loginSuccessHandler();
    }
    if (userId === USERID2 && userPassword === USERPW2) {
      loginSuccessHandler();
    }
  };

  return (
    <div className="w-[30rem] border-2 h-[30rem]">
      <form className="flex flex-col items-center h-full justify-evenly" onSubmit={userLoginSubmitHandler}>
        <div>
          <p className="text-3xl">뉴스 API</p>
        </div>
        <div className="space-y-4">
          <LoginInput tagName="ID" value={userId} onChange={setUserId} type="text" />
          <LoginInput tagName="PW" value={userPassword} onChange={setUserPassword} type="password" />
        </div>
        <div>
          <button className="w-40 h-10 text-white bg-black rounded-md flex-cc">로그인</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
