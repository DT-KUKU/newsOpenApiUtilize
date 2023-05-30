import { userState } from 'atoms/userState';
import LoginInput from 'components/newsLogin/LoginInput';
import useInput from 'hooks/useInput';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { USERID1, USERID2, USERPW1, USERPW2 } from 'utils/constData';
import { setLocalStorage } from 'utils/localStorage';
import LoginButton from './LoginButton';
import LoginTitle from './LoginTitle';

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
          <LoginTitle>뉴스 API</LoginTitle>
        </div>
        <div className="space-y-4">
          <LoginInput tagName="ID" value={userId} onChange={setUserId} />
          <LoginInput tagName="PW" value={userPassword} onChange={setUserPassword} />
        </div>
        <div>
          <LoginButton />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
