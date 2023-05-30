import { userState } from 'atoms/userState';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { LOGIN_USER_IMAGE } from 'utils/constData';
import { getLocalStorage } from 'utils/localStorage';

function Header() {
  const [user, setUser] = useRecoilState(userState);
  const localStorage = getLocalStorage();
  useEffect(() => {
    if (localStorage) {
      setUser(localStorage);
    }
  }, []);
  return (
    <header className="w-full px-12 h-14">
      <div className="flex items-center w-full h-full">
        <div>
          <a href="/" className="text-2xl">
            News API
          </a>
        </div>
        <nav className="flex ml-6 gap-7">
          <Link to={'/news'}>뉴스</Link>
          <Link to={'/'}>헤드라인</Link>
        </nav>
        <div className="ml-auto">
          {user ? (
            <img className="rounded-full" src={LOGIN_USER_IMAGE} width={40} height={40} />
          ) : (
            <Link to={'/login'}>로그인</Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
